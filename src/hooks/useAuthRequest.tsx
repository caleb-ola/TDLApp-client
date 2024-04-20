import {
  resendVerifyReq,
  signUpUserReq,
  verifyEmailReq,
} from "@/lib/authRequests";
import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";

export const usePostRequest = ({
  queryKey,
  userData,
  url,
  onSuccess,
  onError,
}: any) => {
  return useQuery(
    queryKey,
    () => {
      return axios.post(url, userData);
    },
    { onSuccess, onError }
  );
};

export const useSignupUser = () => {
  return useMutation(signUpUserReq);
};

export const useVerifyEmail = () => {
  return useMutation(verifyEmailReq);
};

export const useResendVerify: any = () => {
  return useMutation(resendVerifyReq);
};

export const getCurrentUser: any = () => {
  return null;
};
// export default usePostRequest;
