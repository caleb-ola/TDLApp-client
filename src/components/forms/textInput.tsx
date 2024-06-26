import React, { FC } from "react";

interface AppProps {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  name: string;
  error: string;
  register: any;
}

const TextInput: FC<AppProps> = ({
  type,
  label,
  placeholder,
  id,
  name,
  error,
  register,
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm mb-2 dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 outline-0"
          required
          aria-describedby="email-error"
          {...register(name)}
        />
        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
          <svg
            className="size-5 text-red-500"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        </div>
      </div>
      <p className="hidden text-xs text-red-600 mt-2" id="email-error">
        {error}
      </p>
    </div>
  );
};

export default TextInput;
