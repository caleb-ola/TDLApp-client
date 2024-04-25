"use client";
import { useAuth } from "@/hooks/useAuth";
import { redirect, useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const ProtectedRoute: FC<any> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  // console.log(user);

  useEffect(() => {
    if (!localStorage.tdlauser || !localStorage.tdlatoken) {
      router.push("/auth/login");
    }
  }, [user]);

  return user ? <>{children}</> : null;

  // if (user) {
  //   return <>{children}</>;
  // } else {
  //   return <></>;
  // }
};

export default ProtectedRoute;
