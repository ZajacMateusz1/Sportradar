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
    <div className="flex flex-col gap-0.5">
      <label className="text-center" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...props}
        className="border border-black rounded p-0.5"
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
      {error && <p>{error}</p>}
    </div>
  );
}
