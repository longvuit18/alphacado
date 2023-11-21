
type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children?: React.ReactNode
  
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <a className={`py-3 px-5 bg-[#142321] rounded-lg cursor-pointer ${className}`} {...props}>
      <span
        style={{
          background: '-webkit-linear-gradient(122deg, #FFE47A 35.05%, rgba(142, 255, 88, 0.90) 96.88%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {children}
      </span>
    </a>
  );
}
