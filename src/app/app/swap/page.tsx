import { SettingIcon } from "@/components/icons/setting_icon";
import { MainSwap } from "@/components/swap/main";
import { SettingPopup } from "@/components/swap/setting_popup";
import { Web3Provider } from "@/context/web3_provider";
import Link from "next/link";

export default function SwapPage() {
  return (
    <div className="container mx-auto mb-10">
      <div className="flex gap-2 justify-center">
        <div className="text-[16px] px-9 py-3 border rounded-[16px] border-[#E0E2E2] bg-[#130D0D] text-[#fafbfb]">
          <Link href={"/app/swap?type=swap"}>Swap</Link>
        </div>
        <div className="text-[16px] px-9 py-3 border rounded-[16px] border-[#E0E2E2]">
          <Link href={"/app/swap?type=pools"}>Pools</Link>
        </div>
      </div>
      <div className="mt-5 w-[770px] mx-auto">
        <div className="main-gradient-background p-6 flex justify-between rounded-t-[12px]">
          <p className="text-[23px] font-[600] text-[#2E3B39]">Exchange</p>
          <SettingPopup />
        </div>
        <Web3Provider>
          <MainSwap />
        </Web3Provider>
      </div>
    </div>
  )
}