"use client";
import LoadingBlueButton from "@/components/buttons/loadingBlueButton";
import TextInput from "@/components/forms/textInput";
import { useResendVerify } from "@/hooks/useAuthRequest";
import { toastErrorFn, toastSuccessFn } from "@/utils/toast.utils";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();

  const {
    mutate,
    data: resendRes,
    isLoading,
    isError,
    error,
  } = useResendVerify();

  const onSubmit = (data: any) => {
    // console.log(data);
    mutate(data);
  };

  // console.log({ resendRes, isLoading, isError, error });
  if (resendRes) {
    toastSuccessFn(`${resendRes?.data?.data?.message}`, {
      toastId: "resend-email-success-1",
    });
  }

  if (isError) {
    toastErrorFn(`${(error as any)?.response?.data?.message}`, {
      toastId: "resend-email-error-1",
    });
  }

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center">
        <div className="2xl:w-1/4 xl:w-2/5 md:w-2/4 sm:w-4/4  bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl mb-4 font-bold text-gray-800 dark:text-white">
                Resend Verification
              </h1>
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
                  <div className="mt-3">
                    {isLoading ? (
                      <LoadingBlueButton />
                    ) : (
                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Resend
                      </button>
                    )}
                  </div>
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
