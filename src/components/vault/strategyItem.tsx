'use client'
import { TickIcon } from "@/components/icons/tick_icon";

export default function StrategyItem({ children, className }: { children: React.ReactNode, className: string }) {
  return (
    <div
      className={`rounded-lg border-2 px-4 py-8 min-w-[200px] max-w-[200px] flex justify-center items-center ${className}`}
      style={{ background: '-webkit-linear-gradient(122deg, #FFE47A 35.05%, rgba(142, 255, 88, 0.90) 96.88%)' }}
    >
      {children}
    </div>
  )
}