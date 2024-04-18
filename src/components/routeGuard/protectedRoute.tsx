"use client";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const ProtectedRoute: FC<any> = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
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
