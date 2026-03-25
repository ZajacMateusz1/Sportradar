import type { InputHTMLAttributes } from "react";
interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  name: string;
  type: string;
  error?: string;
}
export default function InputElement({
  children,
  name,
  type,
  error,
  ...props
}: InputElementProps) {
  return (
    <div className="flex flex-col gap-0.5 w-1/2 text-xs md:text-md lg:text-lg xl:text-xl">
      <label className="text-center" htmlFor={name}>
        {children}
      </label>
      <input
        className="p-0.5 text-center border border-black rounded lg:p-1"
        type={type}
        name={name}
        id={name}
        {...props}
      />
      {error && <p className="text-error pt-1">{error}</p>}
    </div>
  );
}
