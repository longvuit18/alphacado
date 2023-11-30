'use client'
import Modal from "@/components/common/modal";
import Tooltip from "@/components/common/tooltip";
import { SettingIcon } from "@/components/icons/setting_icon";
import { MainSwap } from "@/components/swap/main";
import { SettingPopup } from "@/components/swap/setting_popup";
import { Web3Provider } from "@/context/web3_provider";
import Link from "next/link";
import { useState } from "react";

export default function SwapPage() {
  const [slippageTolerance, setSlippageTolerance] = useState<string | undefined>(undefined)
  const [isActiveModal, setIsActiveModal] = useState(true);

  const handleCloseModal = () => {
    setIsActiveModal(false);
  }

  return (
    <div className="container mx-auto mb-10">
      <Modal active={isActiveModal}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <p className="mb-2">UNDER DEVELOPMENT</p>
          <div className="flex flex-col gap-2">
            This is an early-stage, Proof of Concept (PoC) product developed in a time-constrained hackathon environment. While we have strived to create a functional and valuable product, there may still be areas for improvement.
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
      <div className="flex gap-2 justify-center">
        <div className="text-[16px] px-9 py-3 border rounded-[16px] border-[#E0E2E2] bg-[#130D0D] text-[#fafbfb]">
          <Link href={"/app/swap?type=swap"}>Zap</Link>
        </div>
        <Tooltip className="w-[120px] text-center" text="Upcoming">
          <div className="text-[16px] px-9 py-3 border rounded-[16px] border-[#E0E2E2]">
            <Link href={"/app/swap?type=pools"}>Pools</Link>
          </div>
        </Tooltip>
      </div>
      <div className="mt-5 w-[770px] mx-auto">
        <div className="main-gradient-background p-6 flex justify-between rounded-t-[12px]">
          <p className="text-[23px] font-[600] text-[#2E3B39]">Exchange</p>
          <SettingPopup slippageTolerance={slippageTolerance} setSlippageTolerance={setSlippageTolerance} />
        </div>
        <Web3Provider>
          <MainSwap slippageTolerance={slippageTolerance} setSlippageTolerance={setSlippageTolerance} />
        </Web3Provider>
      </div>
    </div>
  )
}