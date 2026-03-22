import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border border-black p-2 rounded-lg cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
}
