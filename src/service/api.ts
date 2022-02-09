import axios, { AxiosError } from "axios";
import { parseCookies, setCookie } from "nookies";
import { signOut } from "../contexts/AuthContext";
import { AuthTokenError } from "./errors/AuthTokenErrors";

type FailedRequestQueue = {
  onSuccess: (token: string) => void;
  onFailure: (error: AxiosError) => void;
};
let isRefreshing = false;
let failedRequestsQueue = Array<FailedRequestQueue>();

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
  const api = axios.create({
    baseURL: "https://books.ioasys.com.br/api/v1",
    headers: {
      Authorization: `Bearer ${cookies["ioasys.token"]}`,
      "Content-Type": "application/json",
    },
  });
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (
          error.response.data?.message === "Não autorizado." ||
          error.response.data?.message === "Usuário ou senha inválida." ||
          error.response.statusText === "Unauthorized"
        ) {

          cookies = parseCookies(ctx);
          const { "ioasys.refreshToken": refreshToken } = cookies;
          const originalConfig = error.config;
          const bodyRefreshToken = {
            refreshToken:refreshToken,
          }
          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post("/auth/refresh-token", {
                bodyRefreshToken,
              })
              .then((response) => {
                const { token } = response.data;

                setCookie(ctx, "ioasys.token", token, {
                  maxAge: 60 * 60 * 15, // 15 minutes
                  path: "/",
                });

                setCookie(
                  ctx,
                  "ioasys.refreshToken",
                  response.data.refreshToken,
                  {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: "/",
                  }
                );

                api.defaults.headers["Authorization"] = `Bearer ${token}`;

                failedRequestsQueue.forEach((request) =>
                  request.onSuccess(token)
                );
                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request) =>
                  request.onFailure(err)
                );
                failedRequestsQueue = [];
                if ((process as any).browser) {
                   signOut();
                } else {
                  return Promise.reject(new AuthTokenError());
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }
          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                originalConfig.headers["Authorization"] = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          // deslogar o usuario
          if ((process as any).browser) {
            signOut();
          }else {
            return Promise.reject(new AuthTokenError());
          }
        }
      }
    return Promise.reject(error);
    }
  );
  return api;
}
