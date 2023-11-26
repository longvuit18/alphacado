type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
  onChange?: (e?: any) => void;
  value?: string;
}

export default function TextField({ children, className, placeholder, onChange, value, ...props }: Props) {
  return (
    <input value={value} className={`rounded p-3 bg-[#ECEDED] outline-none text-[14px] font-normal leading-5 ${className}`} placeholder={placeholder} onChange={onChange} />
  );
}
