"use client"
import Image from "next/image";
import KlaytnIcon from "@/assets/klaytn.png"
import { Web3Provider } from "@/context/web3_provider";
import { truncate } from "@/utils/string";
import { ToggleSwitch } from 'flowbite-react';
import { ButtonConnectProvider } from "../button_connect_provider";
import Button from "../common/button";


export const MainSwap = () => {
  return (
    <Web3Provider>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm	">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">From:</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            <Image alt="klaytn icon" src={KlaytnIcon} height={24} width={24} />
            {truncate("0x01d39A51D5502bD8357D781d6AF755156EC13047")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4">
            <div>
              <Image alt="klaytn icon" src={KlaytnIcon} height={24} width={24} />
            </div>
            <input placeholder="0.0" className="w-full border-transparent focus:border-transparent outline-none" />
          </div>
          <p className="text-[14px]">Balance: ???BNB</p>
        </div>
      </div>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">To:</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            <Image alt="klaytn icon" src={KlaytnIcon} height={24} width={24} />
            {truncate("0x01d39A51D5502bD8357D781d6AF755156EC13047")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4">
            <div>
              <Image alt="klaytn icon" src={KlaytnIcon} height={24} width={24} />
            </div>
            <input placeholder="0.0" className="w-full border-transparent focus:border-transparent outline-none" />
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
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-bold text-[16px]">1.5%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-bold text-[16px]">1.5%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-bold text-[16px]">1.5%</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-bold text-[16px]">1.5%</p>
        </div>
      </div>
      <div className="w-full">
        <ButtonConnectProvider className="w-full text-center rounded-b-[12px] rounded-t-[0px]">
          <Button className="w-full text-center rounded-b-[12px] rounded-t-[0px]">Swap</Button>
        </ButtonConnectProvider>
      </div>
    </Web3Provider>
  );
}