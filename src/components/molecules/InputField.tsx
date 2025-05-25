import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputField({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="focus:border-primary bg-secondary-1 rounded-md border border-neutral-500 px-3 py-1 focus:outline-none"
      />
    </div>
  );
}
