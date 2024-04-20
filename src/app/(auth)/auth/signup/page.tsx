"use client";
import LoadingBlueButton from "@/components/buttons/loadingBlueButton";
import PasswordInput from "@/components/forms/passwordInput";
import TextInput from "@/components/forms/textInput";
import { useSignupUser } from "@/hooks/useAuthRequest";
import { toastErrorFn, toastSuccessFn } from "@/utils/toast.utils";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const {
    mutate,
    data: signupRes,
    error,
    isError,
    isLoading,
  } = useSignupUser();

  const onSubmit = (data: any) => {
    // console.log(data);
    mutate(data);
  };

  // console.log({ signupRes, error, isError });

  if (signupRes) {
    toastSuccessFn(`${signupRes?.data?.data?.message}`, {
      toastId: "signup-success-1",
    });
  }

  if (isError) {
    toastErrorFn(`${(error as any)?.response?.data?.message}`, {
      toastId: "signup-error-1",
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center">
        <div className="2xl:w-1/4 xl:w-2/5 md:w-2/4 sm:w-4/4 mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/auth/login"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <button
                type="button"
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800"
              >
                <svg
                  className="w-4 h-auto"
                  width="46"
                  height="47"
                  viewBox="0 0 46 47"
                  fill="none"
                >
                  <path
                    d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                    fill="#34A853"
                  />
                  <path
                    d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                    fill="#EB4335"
                  />
                </svg>
                Sign up with Google
              </button>

              <div className="py-3 xl:my-4 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

              {/* <!-- Form --> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-4">
                  <TextInput
                    label={"Username"}
                    id={"name"}
                    type={"text"}
                    name={"name"}
                    error={"Please include a valid username"}
                    placeholder={"john_doe"}
                    register={register}
                  />

                  {/* <!-- Form Group --> */}
                  <TextInput
                    label={"Email Address"}
                    id={"email"}
                    type={"email"}
                    name={"email"}
                    error={
                      "Please include a valid email address so we can get back to you"
                    }
                    placeholder={"johnmary@email.com"}
                    register={register}
                  />
                  {/* <!-- End Form Group -->

                <!-- Form Group --> */}
                  <PasswordInput
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    id={"password"}
                    error={"Password does not match the password"}
                    register={register}
                  />
                  {/* <!-- End Form Group -->

                <!-- Form Group --> */}
                  <PasswordInput
                    label={"Confirm Password"}
                    name={"confirmPassword"}
                    type={"password"}
                    id={"confirmPassword"}
                    error={"Password does not match the password"}
                    register={register}
                  />

                  {/* <!-- End Form Group --> */}

                  {/* <!-- Checkbox --> */}
                  <div className="flex items-center">
                    <div className="flex">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ms-3">
                      <label
                        htmlFor="remember-me"
                        className="text-sm dark:text-white"
                      >
                        I accept the{" "}
                        <a
                          className="text-blue-600 decoration-2 hover:underline font-medium"
                          href="#"
                        >
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>
                  {/* <!-- End Checkbox --> */}

                  {isLoading ? (
                    <LoadingBlueButton />
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Sign up
                    </button>
                  )}
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
