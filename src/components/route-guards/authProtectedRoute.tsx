"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const AuthProtectedRoute: FC<any> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  //   console.log(user);

  useEffect(() => {
    if (localStorage.getItem("tdlatoken") || localStorage.getItem("tdlauser")) {
      router.push("/");
    }
  }, []);
  if (user) {
    return <></>;
  } else {
    return <>{children}</>;
  }
};

export default AuthProtectedRoute;
