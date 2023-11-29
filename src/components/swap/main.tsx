"use client"
import Image from "next/image";
import MaticIcon from "@/assets/matic.png"
import BSCIcon from "@/assets/bsc-icon.png"
import USDCIcon from "@/assets/usdc-icon.png"
import { truncate } from "@/utils/string";
import { Alert, ToggleSwitch } from 'flowbite-react';
import { ButtonConnectProvider } from "../button_connect_provider";
import Button from "../common/button";
import CurrencyInput from 'react-currency-input-field';
import { useClientAccount } from "@/hooks/use_client_account";
import { useSwap } from "@/hooks/use_swap";
import { formatEther } from "viem";
import { Supply } from "@/models/supply";
import { SupplyingPopup } from "./supplying_popup";

import { SUPPLY_LIST } from "@/constants/contract_address";
import { CHAINS_TESTNET } from "@/constants/chains";
import { useNetwork } from "wagmi";
import { useEffect, useMemo, useState } from "react";
import { ProgressPopup } from "./progress_popup";


export const MainSwap = () => {
  const account = useClientAccount();
  const { chain } = useNetwork()
  const [chainId, setChainId] = useState<number | undefined>(undefined)
  const [nativeSymbol, setNativeSymbol] = useState<string | null>(null)
  useEffect(() => {
    if (chain) {
      setChainId(chain.id)
      setNativeSymbol(chain.nativeCurrency.symbol)
    } else {
      setChainId(undefined)
      setNativeSymbol(null)

    }
  }, [chain])
  const { amount,
    onChangeValue,
    isApprove,
    onSwap,
    buttonLoading,
    tokenFromBalance,
    setTokenFrom,
    tokenFrom,
    tokenTo,
    setTokenTo,
    chainToId,
    setChainToId,
    errorMessage,
    progressState,
    setProgressState,
    hash
  } = useSwap({ chainFromId: chainId })

  const chainFromIcon = useMemo(() => {
    return Object.values(CHAINS_TESTNET).find(item => item.id === chainId)?.icon
  }, [chainId])

  const chainToIcon = useMemo(() => {
    return Object.values(CHAINS_TESTNET).find(item => item.id === chainToId)?.icon
  }, [chainToId])
  return (
    <>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm	">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">From:</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            CHAIN:
            {chainFromIcon && <Image alt={"chain from"} src={chainFromIcon} height={24} width={24} />}
            {truncate(account?.address ?? "")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4 items-center">
            <div>
              <SupplyingPopup supply={SUPPLY_LIST} zap="token" token={tokenFrom} onChangeToken={(chainId, zap, token) => setTokenFrom(token)} />
            </div>
            <CurrencyInput
              placeholder="0.0"
              style={{ boxShadow: "none" }}
              className="w-full !border-transparent focus:!border-transparent focus:!outline-none !outline-none p-0"
              defaultValue={0}
              decimalsLimit={2}
              onValueChange={(value, name) => onChangeValue(value)}
            />
          </div>
          <p className="text-[14px]">Balance: {tokenFromBalance !== undefined && tokenFromBalance !== null ? `${formatEther(tokenFromBalance)} USDC` : ""}</p>
        </div>
      </div>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">To:</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            CHAIN:
            {chainToIcon && <Image alt="to icon" src={chainToIcon} height={24} width={24} />}
            {truncate(account?.address ?? "")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4 items-center">
            <div>
              <SupplyingPopup chainToId={chainToId} setChainToId={(id) => setChainToId(id)} disabledSwitchChange supply={SUPPLY_LIST} zap="token" token={tokenTo} onChangeToken={(chainId, zap, token) => setTokenTo(token)} />
            </div>
            <input readOnly value={amount / 0.2} placeholder="0.0" className="w-full border-transparent focus:border-transparent outline-none" />
          </div>
        </div>
        {/* <p className="text-[14px] mb-3 text-[#727B7A]">Balance: ???BNB</p> */}
        {/* <div className="flex gap-3 text-[#727B7A]">
          <ToggleSwitch checked onChange={() => null} />
          <p>Receive to another wallet</p>
        </div> */}
      </div>
      <div className="third-gradient-background px-8 pt-9 flex flex-col gap-3 pb-6">
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-[600] text-[16px]">1.5%</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="text-[#646E6C]">Actual amount to be sent:</p>
          <p className="font-[600] text-[16px]">0.0984081 WETH</p>
        </div> */}
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Cross-chain fee:</p>
          <p className="font-[600] text-[16px]">{0.0134} {nativeSymbol}</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="text-[#646E6C]">Supply APY:</p>
          <p className="font-[600] text-[16px]">1.74%</p>
        </div> */}
      </div>
      <div>
        {errorMessage && <Alert color="failure">
          {errorMessage}
        </Alert>}
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
      {hash && progressState && <ProgressPopup state={progressState} onClose={() => setProgressState("")} />}
    </>
  );
}