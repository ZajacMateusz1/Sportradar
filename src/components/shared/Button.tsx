import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
}
export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="p-1.5 rounded-lg cursor-pointer text-sm bg-main-bg text-font-secondary md:max-w-md md:text-md lg:text-lg xl:text-xl md:p-2 hover:text-main transition"
      {...props}
    >
      {children}
    </button>
  );
}
