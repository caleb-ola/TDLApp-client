"use client";
import { loginData, loginUser } from "@/requestFunctions/auth";
import { createContext, useContext, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import usePostRequest from "./useAuthRequest";
import axios from "axios";

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  const login = async (userData: any) => {
    return await axios.post(
      "http://localhost:8000/api/v1/auth/login",
      userData
    );
    // .then(
    //   (res: any) => console.log(res),
    //   (err: any) => console.log(err)
    // );
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
