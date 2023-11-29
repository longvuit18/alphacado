'use client'
import { TickIcon } from "@/components/icons/tick_icon";
import StrategyItem from "./strategyItem";
import { ReactNode, useState } from "react";
import { PlusIcon } from "../icons/plus_icon";

export default function Strategy() {
  const singleComponent = (
    <StrategyItem className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <input className="outline-none border-none w-10 text-center rounded-md text-[14px] px-2 py-2" />
        <p>%</p>
      </div>
      <div>
        <p>Stake to Klayswap</p>
      </div>
    </StrategyItem>
  );
  const [components, setComponents] = useState<ReactNode[]>([singleComponent]);

  const handleClickPlus = () => {
    setComponents([...components, singleComponent]);
  }

  return (
    <div className="flex max-w-full overflow-x-auto items-center">
      {components.map((component, index) => (
        <div key={index} className="flex justify-center items-center">
          {component}
          {index < components.length - 1 ? <div className="w-10 h-[2px] bg-[#FFE47A]"></div> : null}
        </div>
      ))}
      <div className="w-14 ml-4 cursor-pointer border-2 p-3 rounded-full border-[#FFE47A]" onClick={handleClickPlus}>
        <PlusIcon />
      </div>
    </div>
  )
}