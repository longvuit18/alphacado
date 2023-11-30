'use client'
import Button from "@/components/common/button";
import Checkbox from "@/components/common/checkbox";
import Image from "next/image";
import { CREATE_VAULT_STEP } from "./constants/create_vault_step";
import { ButtonConnectProvider } from "@/components/button_connect_provider";
import KlayIcon from "@/assets/klaytn.png"

export default function ReviewForm(props: any) {
  const { setStep, isConfirmed, setIsConfirmed, handleDeployVault, chainId, data } = props;

  const onClickBack = () => {
    setStep(CREATE_VAULT_STEP.FEE_CONFIGURATION);
  }

  return (
    <div className=" w-[75%] flex flex-col gap-6 rounded-3xl border border-neutral-g-40 bg-white shadow-drop-2 p-6 ">
      <div>
        <h5 className="text-[27px] text-[#2E3B39] leading-8 font-semibold">Review</h5>
        <p className="text-[#130D0D] text-[14px] font-normal leading-5">Please review your configuration carefully. You can interact with vaults that you created on <span className="text-[#7B4B94]">app.pop.network</span></p>
      </div>
      {/* Basic */}
      <div className="border-b border-[#C4C8C8] pb-3">
        <p className="text-[#130D0D] text-[18px] font-semibold leading-6 mb-4">Basic</p>
        <div>
          <div className="flex justify-between mb-3">
            <div>
              <p>Vault Name</p>
            </div>
            <div>
              <p>{data.name}</p>
            </div>
          </div>
          <div className="flex justify-between mb-3">
            <div>
              <p>Asset</p>
            </div>
            <div className="flex items-center">
              <p>KLAY</p>
              <div className="ml-2">
                <Image src={KlayIcon} alt='Coin' width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee */}
      <div className="border-b border-[#C4C8C8] pb-3">
        <p className="text-[#130D0D] text-[18px] font-normal leading-6 mb-4">Fees</p>
        <div>
          <div className="flex justify-between mb-3">
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">Deposit Fee</p>
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">0%</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">Withdrawal Fee</p>
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">0%</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">Performance Fee</p>
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">0%</p>
          </div>
          <div className="flex justify-between mb-3">
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">Management Fee</p>
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">0%</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">Fee Recipient</p>
            <p className="text-[#130D0D] font-medium text-[16px] leading-6">{data.receiver}</p>
          </div>
        </div>
      </div>

      {/* Deposit Limit */}
      <div className="border-b border-[#C4C8C8] pb-3">
        <p className="text-[#130D0D] text-[18px] font-normal leading-6 mb-4">Deposits Limit</p>
        <div className="flex justify-between">
          <p className="text-[#130D0D] font-medium text-[16px] leading-6">Maximum deposit amount</p>
          <p className="text-[#130D0D] font-medium text-[16px] leading-6">10 USDT</p>
        </div>
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-center mb-6">
        <Checkbox isChecked={isConfirmed} handleOnChange={() => setIsConfirmed(!isConfirmed)} />
        <p className="text-[14px] font-normal leading-5 ml-2">I have read and agree to the <span className="text-[#19609F]">Terms & Conditions.</span></p>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <Button className="w-full text-center text-[18px] font-medium leading-6 cursor-pointer" onClick={onClickBack}>Back</Button>
        <ButtonConnectProvider className="w-full text-center text-[18px] font-medium">
          <Button
            className={`${isConfirmed ? 'cursor-pointer' : 'opacity-60'} w-full text-center text-[18px] font-medium leading-6`}
            btnType="success"
            onClick={handleDeployVault}
          >
            {chainId !== 1001 ? "Switch chain to Klaytn" : "Deploy Vault"}
          </Button>
        </ButtonConnectProvider>

      </div>
    </div>
  )
}