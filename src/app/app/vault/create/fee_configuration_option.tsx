'use client'
import Button from "@/components/common/button";
import Switch from "@/components/common/switch";
type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  className?: string;
  title?: string;
  content?: string;
  isChecked?: boolean;
  handleToggle?: () => void;
}

export default function FeeConfigurationOption({ className, title, content, isChecked = true, handleToggle }: Props) {
  return (
    <div className="flex justify-between items-center pb-3 mb-4 border-b border-solid border-[#C4C8C8]">
      <div>
        <p className="text-[#130D0D] text-[16px] font-medium leading-6">{title}</p>
        <p className="text-[#3E4B49] text-[12px] font-normal leading-5">{content}</p>
      </div>
      <div className="flex justify-center items-center">
        <Switch isOn={isChecked} />
      </div>
    </div>
  )
}