import { Link, type LinkProps } from "react-router-dom";
interface LinkButtonProps extends LinkProps {
  children: string;
  to: string;
}
export default function LinkButton({
  children,
  to,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className="p-1.5 rounded-lg cursor-pointer text-sm bg-main-bg text-font-secondary md:max-w-md md:text-md lg:text-lg xl:text-xl md:p-2 hover:text-main transition"
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
