import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL_LOCAL,
});
console.log({ url: process.env.NEXT_PUBLIC_BASEURL_LOCAL });
let token: string | null;
if (typeof window !== "undefined") {
  token = localStorage.getItem("tdlatoken");
}

axiosInstance.interceptors.request.use(
  (config: any) => {
    const accessToken = token && JSON.parse(token);

    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    return Promise.reject(error);
  }
);
// export const axiosInstance: any = ({ ...options }) => {
//   if (token) {
//     client.defaults.headers.common.authorization = `Bearer ${token}`;
//   }
//   const onSuccess: any = (response: any) => response;
//   const onError: any = (error: any) => error;

//   return client(options).then(onSuccess).catch(onError);
// };

export default axiosInstance;
