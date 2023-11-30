'use client'
import { TickIcon } from "@/components/icons/tick_icon";
import StrategyItem from "./strategyItem";
import { ReactNode, useState } from "react";
import { PlusIcon } from "../icons/plus_icon";
import Modal from "@/components/common/modal";

type Props = {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  content: string
}

export default function Strategy(props: Props) {
  const { content } = props;
  const [isActiveModal, setIsActiveModal] = useState(false);
  const singleComponent = ({ content }: { content: string }) => (
    <StrategyItem className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-2">
        <input className="outline-none border-none w-10 text-center rounded-md text-[14px] px-2 py-2" />
        <p>%</p>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </StrategyItem>
  )
  const [components, setComponents] = useState<ReactNode[]>([singleComponent({ content: content })]);

  const handleClickPlus = () => {
    setComponents([...components, singleComponent({ content: content })]);
  }

  const handleOpenModal = () => {
    setIsActiveModal(true);
  }

  const handleCloseModal = () => {
    setIsActiveModal(false);
  }

  const handleClickStakeToKlayswap = () => {
    setComponents([...components, singleComponent({ content: 'Stake to Klayswap' })])
    handleCloseModal();
  }

  const handleClickLiquidStakeToStakely = () => {
    setComponents([...components, singleComponent({ content: 'Stakely:WrapStakedKLAY' })])
    handleCloseModal();
  }

  return (
    <div className="flex max-w-full overflow-x-auto items-center">
      <Modal active={isActiveModal}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <p className="mb-2">Choose your strategy</p>
          <div className="flex flex-col gap-2">
            <div
              className="px-4 py-2 rounded-lg hover:opacity-80 cursor-pointer"
              style={{ background: '-webkit-linear-gradient(122deg, #FFE47A 35.05%, rgba(142, 255, 88, 0.90) 96.88%)' }}
              onClick={handleClickLiquidStakeToStakely}
            >
              {content === "KlaySwap::Stake" ? "" : "Stakely:WrapStakedKLAY"}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            onClick={handleCloseModal}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
            Cancel
          </button>
        </div>
      </Modal>
      {components.map((component, index) => (
        <div key={index} className="flex justify-center items-center">
          {component}
          {index < components.length - 1 ? <div className="w-10 h-[2px] bg-[#FFE47A]"></div> : null}
        </div>
      ))}
      {content !== "KlaySwap::Stake" && components.length < 2 ? (
        <div className="w-14 ml-4 cursor-pointer border-2 p-3 rounded-full border-[#FFE47A]" onClick={handleOpenModal}>
          <PlusIcon />
        </div>
      ) : null}
    </div>
  )
}