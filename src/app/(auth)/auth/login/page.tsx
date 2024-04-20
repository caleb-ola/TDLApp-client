"use client";
import GoogleSigninButton from "@/components/buttons/GoogleSigninButton";
import LoadingBlueButton from "@/components/buttons/loadingBlueButton";
import PasswordInput from "@/components/forms/passwordInput";
import TextInput from "@/components/forms/textInput";
import AuthProtectedRoute from "@/components/route-guards/authProtectedRoute";
import { useAuth } from "@/hooks/useAuth";
import { toastErrorFn } from "@/utils/toast.utils";
import { Metadata } from "next";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Bounce, ToastContainer } from "react-toastify";

const Page = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { login, logout, setUser } = useAuth();
  const {
    mutate,
    isLoading,
    data: loginResponse,
    error,
    isError,
  } = useMutation(login);

  const onSubmit = async (data: any) => {
    await mutate(data);
    // try {
    //   await mutate(data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
  // console.log({ loginResponse, error, isLoading });

  if (isError)
    toastErrorFn(`${(error as any)?.response?.data?.message}`, {
      toastId: "login-error-1",
    });

  if (loginResponse) {
    const responseData = (loginResponse as any)?.data;
    localStorage.setItem("tdlatoken", responseData.token);
    localStorage.setItem("tdlauser", JSON.stringify(responseData.data.data));
    // setUser(responseData.data.data);
    // redirect("/dashboard");
    router.push("/dashboard");
  }

  return (
    <>
      <ToastContainer />
      <div className="h-screen flex items-center justify-center">
        <div className="2xl:w-1/4 xl:w-2/5 md:w-2/4 sm:w-4/4  bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7 ">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign in
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account yet?{" "}
                <Link
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="/auth/signup"
                >
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <GoogleSigninButton />

              <div className="py-3 xl:my-4 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>

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

                  {/* <!-- Form Group --> */}
                  <PasswordInput
                    label={"Password"}
                    name={"password"}
                    type={"password"}
                    id={"password"}
                    forgotLink={"/auth/forgot-password"}
                    forgotLinkLabel={"Forgot password?"}
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
                        Remember me
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
                      Sign in
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

export default Page;
