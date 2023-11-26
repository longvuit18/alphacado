'use client'
import Button from "@/components/common/button";
import Checkbox from "@/components/common/checkbox";
import { TickIcon } from "@/components/icons/tick_icon";
import Image from "next/image";

export default function Success() {
  return (
    <div className="flex flex-col justify-center items-center mt-[60px]">
      <div style={{
        background: '-webkit-linear-gradient(122deg, #FFE47A 35.05%, rgba(142, 255, 88, 0.90) 96.88%)',
        border: '3px solid var(--secondary-orange-400, #FFDE61)'
      }} className="w-[390px] h-[390px] flex justify-center items-center mb-[49px] rounded-[120px]">
        <TickIcon />
      </div>
      <h3 className="text-[#142321] text-[54px] font-normal leading-[60px]">Deploy Success</h3>
    </div>
  )
}