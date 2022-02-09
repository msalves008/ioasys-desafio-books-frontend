import { setCookie, destroyCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

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


export function signOut() {
  /* const navigate = useNavigate(); */
  destroyCookie(undefined, "ioasys.token");
  destroyCookie(undefined, "ioasys.refreshToken");
  
  
}
export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  async function signIn({ email, password }: SignInCredentials) {
    /* console.log(`signIn:  ${email}, ${password}`); */
    try {
      const response = await api.post("/auth/sign-in", {
        email,
        password,
      });
      const { name, birthdate, gender, id } = response.data;
      const {authorization, 'refresh-token': refreshToken } = response.headers;
      setCookie(undefined, "ioasys.token", authorization, {
        maxAge: 60 * 60 * 15, // 15 minutes
        path: "/",
      });
      setCookie(undefined, "ioasys.refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setUser({ name, email, birthdate, gender, id });

      api.defaults.headers["Authorization"] = `Bearer ${authorization}`;
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
