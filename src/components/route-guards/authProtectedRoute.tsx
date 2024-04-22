"use client";
import { useAuth } from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const AuthProtectedRoute: FC<any> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  //   console.log(user);

  useEffect(() => {
    // if (localStorage.getItem("tdlatoken") || localStorage.getItem("tdlauser")) {
    //   redirect("/");
    // }
    if (user !== null) {
      redirect("/dashboard");
    }
  }, [user]);
  // if (user) {
  //   return <></>;
  // } else {
  return !user ? <>{children}</> : null;
  // }
};

export default AuthProtectedRoute;
