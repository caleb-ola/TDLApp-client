"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const ProtectedRoute: FC<any> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();
  // console.log(user);

  useEffect(() => {
    if (
      !localStorage.getItem("tdlatoken") ||
      !localStorage.getItem("tdlauser")
    ) {
      router.push("/auth/login");
    }
  }, []);
  if (user) {
    return <>{children}</>;
  } else {
    return <></>;
  }
};

export default ProtectedRoute;
