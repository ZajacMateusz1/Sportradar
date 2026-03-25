import type { ButtonHTMLAttributes } from "react";
interface ButtonCircleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}
export default function ButtonCircle({
  children,
  ...props
}: ButtonCircleProps) {
  return (
    <button
      className="w-6 h-6 rounded-full text-md md:text-xl lg:text-2xl xl:text-3xl cursor-pointer bg-main-bg text-font-secondary hover:text-main transition md:w-8 md:h-8 
    lg:w-10 lg:h-10 "
      {...props}
    >
      {children}
    </button>
  );
}
