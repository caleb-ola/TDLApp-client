import axiosInstance from "@/lib/axios";
import axios from "axios";

export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface verifyEmailData {
  token: string;
}

export interface resendVerifyData {
  email: string;
}

export const loginUser = async (data: LoginData) => {
  return await axios.post("", data);
};

export const signUpUserReq = (data: SignupData) => {
  return axiosInstance({ url: "/auth/signup", data, method: "post" });
};

export const verifyEmailReq = (data: verifyEmailData) => {
  return axiosInstance.post("/auth/verification-email", data);
};

export const resendVerifyReq = (data: resendVerifyData) => {
  return axiosInstance.post("/auth/resend-verification-email", data);
};
