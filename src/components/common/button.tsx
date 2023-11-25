import { BUTTON_TYPE } from "./constant/button_type";

type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  children?: React.ReactNode
  btnType?: string
}

export default function Button({ children, className, btnType, ...props }: Props) {
  return (
    <a type="button" style={btnType == BUTTON_TYPE.SUCCESS ? {
      background: '-webkit-linear-gradient(122deg, #FFE47A 35.05%, rgba(142, 255, 88, 0.90) 96.88%)'
    } : {}} className={`py-3 px-5 ${btnType == BUTTON_TYPE.SUCCESS ? '' : 'bg-[#142321]'} rounded-lg cursor-pointer ${className}`} {...props}>
      <span
        style={btnType == BUTTON_TYPE.SUCCESS ? {} : {
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
