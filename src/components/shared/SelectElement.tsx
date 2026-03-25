import type { SelectHTMLAttributes } from "react";

interface SelectElementProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  defaultMessage?: string;
  isHidden?: boolean;
  options: string[];
  error?: string;
}
export default function SelectElement({
  name,
  label,
  options,
  defaultMessage = "Select option",
  isHidden = true,
  error,
  ...props
}: SelectElementProps) {
  return (
    <div className="flex flex-col gap-0.5 w-1/2 text-xs md:text-md lg:text-lg xl:text-xl">
      <label className="text-center" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...props}
        className="p-0.5 border border-black rounded lg:p-1 bg-white shadow"
      >
        <option value="" hidden={isHidden}>
          {defaultMessage}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-error pt-1">{error}</p>}
    </div>
  );
}
