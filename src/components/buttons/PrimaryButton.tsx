import Link from "next/link";
import React, { FC } from "react";

interface ButtonProps {
  link?: string;
  type?: string;
  submit?: boolean;
  text: string;
}

const PrimaryButton: FC<ButtonProps> = ({ link, type, submit, text }) => {
  return link ? (
    <>
      <Link
        href={link}
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        {text}
      </Link>
    </>
  ) : submit ? (
    <>
      <button
        type={"submit"}
        // href={"/auth/signup"}
        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
      >
        {text}
      </button>
    </>
  ) : (
    <>
      <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
        {text}
      </button>
    </>
  );
};

export default PrimaryButton;
