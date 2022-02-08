import { setCookie, destroyCookie, parseCookies } from "nookies";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { api } from "./../service/apiClient";

type User = {
  name: string;
  email: string;
  birthdate: string;
  gender: string;
  id: string;
};
type SignInCredentials = {
  email: string;
  password: string;
};
type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: User;
};
export const AuthContext = createContext({} as AuthContextData);
const navigate = useNavigate();

export function signOut() {
  destroyCookie(undefined, "ioasys.token");
  destroyCookie(undefined, "ioasys.refreshToken");
  navigate('/login');
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  async function signIn({ email, password }: SignInCredentials) {
    /* console.log(`signIn:  ${email}, ${password}`); */
    try {
      const response = await api.post("login", {
        email,
        password,
      });
      /* console.log(response.data); */
      const { token, refreshToken } = response.data;
      setCookie(undefined, "ioasys.token", token, {
        maxAge: 60 * 60 * 15, // 15 minutes
        path: "/",
      });
      setCookie(undefined, "ioasys.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
            /* setUser({ email, type, permissions }); */

      api.defaults.headers["Authorization"] = `Bearer ${token}`;         
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
}