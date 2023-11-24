import React from 'react';

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

export default function SelectDropdown({ children, className, placeholder, ...props }: Props) {
  return (
    <select
      className={`py-3 rounded bg-[#ECEDED] border-none outline-none ${className}`}
      {...props}
    >
      {placeholder && <option disabled selected hidden value="">{placeholder}</option>}
      {children}
    </select>
  );
}