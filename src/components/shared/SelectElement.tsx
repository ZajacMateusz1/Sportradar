import type { SelectHTMLAttributes } from "react";

interface SelectElementProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: string[];
  error: string;
}
export default function SelectElement({
  name,
  label,
  options,
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
        className="p-0.5 border border-black rounded lg:p-1"
      >
        <option value="" hidden>
          Select option
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
