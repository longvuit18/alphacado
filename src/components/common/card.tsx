export default function Card({ title, content, className }: { title?: string, content?: string, className?: string }) {
    return (
        <div className={`p-6 rounded-tr-[48px] rounded-b rounded-tl flex flex-col items-start gap-2 ${className}`}>
            <h5 className="text-[27px] font-semibold leading-8">{title}</h5>
            <p className="text-[16px] leading-6 font-medium text-left text-[#4A5654]">{content}</p>
        </div>
    );
}
  