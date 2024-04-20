import axiosInstance from "./axios";

// Google authenication, sending the authorization code to the backend
const googleAuth = (code: string) =>
  axiosInstance.get(`/auth/google?code=${code}`);

export default googleAuth;
