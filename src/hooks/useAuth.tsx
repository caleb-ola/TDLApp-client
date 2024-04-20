"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import axiosInstance from "@/lib/axios";

const AuthContext = createContext<any>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("tdlauser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
    setUser(null);
    localStorage.removeItem("tdlauser");
    localStorage.removeItem("tdlatoken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
