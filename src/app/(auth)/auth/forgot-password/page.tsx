"use client";
import LoadingBlueButton from "@/components/buttons/loadingBlueButton";
import TextInput from "@/components/forms/textInput";
import { forgotPassword } from "@/lib/authRequests";
import { toastErrorFn, toastSuccessFn } from "@/utils/toast.utils";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const {
    mutate,
    data: result,
    isLoading,
    isError,
    error,
  } = useMutation(forgotPassword);

  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data);
  };

  if (isError) {
    toastErrorFn(`${(error as any)?.response?.data?.message}`, {
      toastId: "forgot-error-1",
    });
  }

  if (result) {
    toastSuccessFn(`${result?.data?.data?.message}`, {
      toastId: "forgot-success-1",
    });
  }

  // console.log({ result, isLoading, isError });
  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center">
        <div className="2xl:w-1/4 xl:w-2/5 md:w-2/4 sm:w-4/4  bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Forgot password?
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Remember your password?{" "}
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/auth/login"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-4">
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
                  {/* <!-- End Form Group --> */}

                  {isLoading ? (
                    <LoadingBlueButton />
                  ) : (
                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Reset password
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

export default ForgotPassword;
