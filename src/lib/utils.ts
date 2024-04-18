import { Bounce, ToastOptions, toast } from "react-toastify";

// interface toastOptionTypes {
//   position: string;
//   autoClose: number;
//   hideProgressBar: boolean;
//   closeOnClick: boolean;
//   pauseOnHover: boolean;
//   draggable: boolean;
//   progress: string | number | undefined;
//   theme: string;
//   transition: string;
// }

export const toastErrorFn = (
  message: string,
  options: ToastOptions<unknown>
) => {
  return toast.error(message, {
    position: "top-right",
    autoClose: 10000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    ...options,
  });
};

export const toastSuccessFn = (
  message: string,
  options: ToastOptions<unknown>
) => {
  return toast.success(message, {
    position: "top-right",
    autoClose: 15000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    ...options,
  });
};
