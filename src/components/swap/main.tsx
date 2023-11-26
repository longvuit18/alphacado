"use client"
import Image from "next/image";
import MaticIcon from "@/assets/matic.png"
import BSCIcon from "@/assets/bsc-icon.png"
import USDCIcon from "@/assets/usdc-icon.png"
import { truncate } from "@/utils/string";
import { ToggleSwitch } from 'flowbite-react';
import { ButtonConnectProvider } from "../button_connect_provider";
import Button from "../common/button";
import CurrencyInput from 'react-currency-input-field';
import { useClientAccount } from "@/app/hooks/use_client_account";
import { useSwap } from "@/app/hooks/use_swap";
import { formatEther } from "viem";
import { Supply } from "@/models/supply";
import { SupplyingPopup } from "./supplying_popup";

const supplyList: Supply = {
  eth: {
    token: [],
    farm: [],
    lending: [],
    liquid: []
  },
  klaytn: {
    token: [],
    farm: [],
    lending: [],
    liquid: []
  },
  bsc: {
    token: [],
    farm: [],
    lending: [],
    liquid: []
  },
  mumbai: {
    token: [],
    farm: [],
    lending: [],
    liquid: []
  },
}


export const MainSwap = () => {
  const account = useClientAccount();
  const { amount, onChangeValue, isApprove, onSwap, buttonLoading, usdcBalance } = useSwap()
  return (
    <>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm	">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">From:</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            <Image alt="matic icon" src={MaticIcon} height={24} width={24} />
            {truncate(account?.address ?? "")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4 items-center">
            <div>
              <SupplyingPopup />
            </div>
            <CurrencyInput
              placeholder="0.0"
              className="w-full !border-transparent focus:!border-transparent focus:!outline-none !outline-none p-0 focus:!shadow-none"
              defaultValue={0}
              decimalsLimit={2}
              onValueChange={(value, name) => onChangeValue(value)}
            />
          </div>
          <p className="text-[14px]">Balance: {usdcBalance ? `${formatEther(usdcBalance)} USDC` : ""}</p>
        </div>
      </div>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">To:</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            <Image alt="bsc icon" src={BSCIcon} height={24} width={24} />
            {truncate(account?.address ?? "")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4 items-center">
            <div>
              <Image alt="usdc icon" src={USDCIcon} height={24} width={24} />
            </div>
            <input readOnly value={amount} placeholder="0.0" className="w-full border-transparent focus:border-transparent outline-none" />
          </div>
        </div>
        <p className="text-[14px] mb-3 text-[#727B7A]">Balance: ???BNB</p>
        <div className="flex gap-3 text-[#727B7A]">
          <ToggleSwitch checked onChange={() => null} />
          <p>Receive to another wallet</p>
        </div>
      </div>
      <div className="third-gradient-background px-8 pt-9 flex flex-col gap-3 pb-6">
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-bold text-[16px]">1.5%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Actual amount to be sent:</p>
          <p className="font-bold text-[16px]">0.0984081 WETH</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Cross-chain fee:</p>
          <p className="font-bold text-[16px]">0.00859999 WETH</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Protocol:</p>
          <p className="font-bold text-[16px]">Aave</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Supply APY:</p>
          <p className="font-bold text-[16px]">1.74%</p>
        </div>
      </div>
      <div className="w-full">
        <ButtonConnectProvider className="w-full text-center rounded-b-[12px] rounded-t-[0px]">
          <Button
            onClick={() => {
              onSwap()
            }}
            disabled={buttonLoading}
            className="w-full text-center rounded-b-[12px] rounded-t-[0px]">
            {
              buttonLoading ?
                "Loading ..."
                :
                isApprove
                  ? "Approve"
                  : "Swap"}

          </Button>
        </ButtonConnectProvider>
      </div>
    </>
  );
}