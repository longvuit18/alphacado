type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  placeholder?: string;
  children?: React.ReactNode;
}

export default function TextField({ children, className, placeholder, ...props }: Props) {
  return (
    <input className={`rounded p-3 bg-[#ECEDED] outline-none text-[14px] font-normal leading-5 ${className}`} placeholder={placeholder} />
  );
}
