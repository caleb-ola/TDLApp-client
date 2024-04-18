import axiosInstance from "@/utils/axios.utils";
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

export const loginUser = async (data: LoginData) => {
  return await axios.post("", data);
};

export const signUpUserReq = (data: SignupData) => {
  return axiosInstance({ url: "/auth/signup", data, method: "post" });
};
