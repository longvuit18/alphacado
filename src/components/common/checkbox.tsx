import './checkbox.css'

export default function Checkbox({ isChecked }: { isChecked?: boolean }) {
  return (
    <input className="w-[36px] h-[36px] rounded-lg text-[#53B268] cursor-pointer" type="checkbox" checked={isChecked} />
  );
}
