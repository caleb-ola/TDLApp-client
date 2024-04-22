"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useAuth } from "@/hooks/useAuth";
import { useVerifyEmail } from "@/hooks/useAuthRequest";
import { verifyEmailData } from "@/lib/authRequests";
import { setLocalStorage } from "@/utils/localStorage.utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { FC, useEffect } from "react";

const EmailVerification: FC<any> = () => {
  const { setUser } = useAuth();
  const router = useRouter();
  const {
    mutate,
    data: verifyRes,
    isLoading,
    error,
    isError,
  } = useVerifyEmail();

  const { token } = useParams<{ token: string }>();
  // console.log(token);
  // console.log({ isLoading, error, isError, verifyRes });

  if (verifyRes) {
    const responseData = (verifyRes as any)?.data;
    setLocalStorage(responseData);
    setUser(responseData?.data?.data);
  }

  useEffect(() => {
    mutate({ token });
  }, []);
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="2xl:w-1/4 xl:w-2/5 md:w-2/4 sm:w-4/4  bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block lg:text-3xl text-2xl my-2 font-bold text-gray-800 dark:text-white">
                Email Verification
              </h1>
              <div className="my-4 mt-5 ">
                {!isError && !verifyRes && (
                  <>
                    <Image
                      src="/images/auth/verify1.gif"
                      alt="EMAIL VERIFY LOADING IMAGE"
                      width={1200}
                      height={12}
                    />
                    <h1 className="block text-lg lg:text-xl font-bold text-gray-700 dark:text-white my-2">
                      Please wait, Verifying...
                    </h1>
                  </>
                )}
                {isError && (
                  <>
                    <Image
                      src="/images/auth/error1.gif"
                      alt="EMAIL VERIFY ERROR ICON"
                      className="mx-auto"
                      width={140}
                      height={140}
                    />
                    <h1 className="block text-lg lg:text-xl font-bold text-red-600 dark:text-white my-2">
                      {(error as any)?.response?.data?.message}
                    </h1>
                    <div className="mt-8">
                      <PrimaryButton
                        text={"Resend Verification"}
                        link={"/auth/resend-verification"}
                      />
                    </div>
                  </>
                )}
                {verifyRes && (
                  <>
                    <Image
                      src="/images/auth/success.gif"
                      alt="EMAIL VERIFY SUCCESS ICON"
                      className="mx-auto"
                      width={320}
                      height={320}
                    />
                    <h1 className="block text-lg lg:text-xl font-bold text-green-600 dark:text-white my-2">
                      {/* {(verifyRes as any)?.response?.data?.message} */}
                      Verification Successful.
                    </h1>
                  </>
                )}
              </div>
            </div>

            <div className="mt-5">
              {/* <!-- Form --> */}

              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default EmailVerification;
