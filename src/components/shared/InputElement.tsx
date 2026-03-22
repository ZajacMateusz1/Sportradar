import type { InputHTMLAttributes } from "react";
interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  name: string;
  type: string;
}
export default function InputElement({
  children,
  type,
  name,
  ...props
}: InputElementProps) {
  return (
    <div className="flex flex-col">
      <label className="text-center" htmlFor={name}>
        {children}
      </label>
      <input
        className="text-center border border-black rounded p-0.5"
        type={type}
        name={name}
        id={name}
        {...props}
      />
    </div>
  );
}
