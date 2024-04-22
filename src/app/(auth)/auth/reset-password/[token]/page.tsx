"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ResetPasswordData } from "@/lib/authRequests";
import TextInput from "@/components/forms/textInput";
import PasswordInput from "@/components/forms/passwordInput";
import LoadingBlueButton from "@/components/buttons/loadingBlueButton";
import { useResetPassword } from "@/hooks/useAuthRequest";
import { useParams } from "next/navigation";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const { token } = useParams<{ token: string }>();

  const {
    mutate,
    data: result,
    isLoading,
    isError,
    error,
  } = useResetPassword();

  const onSubmit = (data: any) => {
    console.log({ data, token });
    mutate({ data, token });
  };

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center">
        <div className="2xl:w-1/4 xl:w-2/5 md:w-2/4 sm:w-4/4 mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Reset Password
              </h1>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-y-4">
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
                  <div className="mt-3">
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

export default ResetPassword;
