"use client"
import Image from "next/image";
import { truncate } from "@/utils/string";
import { Alert, ToggleSwitch } from 'flowbite-react';
import { ButtonConnectProvider } from "../button_connect_provider";
import Button from "../common/button";
import CurrencyInput from 'react-currency-input-field';
import { useClientAccount } from "@/hooks/use_client_account";
import { useSwap } from "@/hooks/use_swap";
import { formatEther } from "viem";
import { Supply, Token } from "@/models/supply";
import { SupplyingPopup } from "./supplying_popup";

import { SUPPLY_LIST } from "@/constants/contract_address";
import { CHAINS_TESTNET } from "@/constants/chains";
import { useNetwork } from "wagmi";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { ProgressPopup } from "./progress_popup";
import Tooltip from "../common/tooltip";
import { PlusCircleIcon } from "@heroicons/react/16/solid";
import { SupplyingNftPopup } from "./supplying_nft_popup";
import { useSwapNft } from "@/hooks/use_swap_nft";

type Props = {
  slippageTolerance: string | undefined;
  setSlippageTolerance: Dispatch<SetStateAction<string | undefined>>;
}

export const MainNftSwap = (props: Props) => {
  const { slippageTolerance, setSlippageTolerance } = props;
  const account = useClientAccount();
  const { chain } = useNetwork()
  const [chainId, setChainId] = useState<number | undefined>(undefined)
  const [nativeSymbol, setNativeSymbol] = useState<string | null>(null)
  const [isGasless, setIsGasless] = useState(false);
  useEffect(() => {
    if (chain) {
      setChainId(chain.id)
      setNativeSymbol(chain.nativeCurrency.symbol)
    } else {
      setChainId(undefined)
      setNativeSymbol(null)

    }
  }, [chain])
  const {

    isApprove,
    onSwap,
    buttonLoading,
    setTokenFrom,
    tokenFrom,
    tokenTo,
    setTokenTo,
    chainToId,
    setChainToId,
    errorMessage,
    progressState,
    setProgressState,
    hash,
    isUseAnotherWallet,
    setIsUseAnotherWallet,
    receiver,
    setReceiver,
    setTokenId,
    tokenId,
    zapTo,
    setZapTo,
    amountOut
  } = useSwapNft({ chainFromId: chainId })



  const chainFromIcon = useMemo(() => {
    return Object.values(CHAINS_TESTNET).find(item => item.id === chainId)?.icon
  }, [chainId])

  const chainToIcon = useMemo(() => {
    return Object.values(CHAINS_TESTNET).find(item => item.id === chainToId)?.icon
  }, [chainToId])

  const chainFromName = useMemo(() => {
    if (chainId === 1001) {
      return "Klaytn"
    }
    return Object.values(CHAINS_TESTNET).find(item => item.id === chainId)?.name
  }, [chainId])

  const chainToName = useMemo(() => {
    if (chainToId === 1001) {
      return "Klaytn"
    }
    return Object.values(CHAINS_TESTNET).find(item => item.id === chainToId)?.name
  }, [chainToId])

  const isSingleKlaytnChain = useMemo(() => {
    if (chainToId === 1001 && chainId === 1001) {
      return true;
    }
    return false;
  }, [chainToId, chainId])

  return (
    <>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm	">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">Supply From: {chainFromName}</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            CHAIN:
            {chainFromIcon && <Image alt={"chain from"} src={chainFromIcon} height={24} width={24} />}
            {truncate(account?.address ?? "")}
          </div>
        </div>
        <div className="my-3">
          <div className="w-full px-3 py-4 flex gap-4 items-center">
            <SupplyingNftPopup
              title={'Supply From'}
              supply={SUPPLY_LIST}
              token={tokenFrom}
              tokenId={tokenId}
              setTokenId={setTokenId}
              onChangeNft={(chainId, contractAddress, tokenId) => { setTokenFrom({ address: contractAddress } as Token); setTokenId(tokenId) }}

            />
          </div>
        </div>
      </div>
      <div className="secondary-gradient-background px-6 py-3 pb-9 shadow-sm">
        <div className="flex justify-between">
          <p className="text-[16px] text-[#646E6C]">Supply To: {chainToName}</p>
          <div className="bg-white rounded-[72px] p-1 flex gap-2">
            CHAIN:
            {chainToIcon && <Image alt="to icon" src={chainToIcon} height={24} width={24} />}
            {truncate(account?.address ?? "")}
          </div>
        </div>
        <div className="my-3">
          <div className="bg-white rounded-[8px] w-full px-3 py-4 flex gap-4 items-center">
            <div>
              <SupplyingPopup title="Supply To" chainToId={chainToId} setChainToId={(id) => setChainToId(id)} disabledSwitchChange supply={SUPPLY_LIST} zap={zapTo} token={tokenTo} onChangeToken={(chainId, zap, token) => { setTokenTo(token); setZapTo(zap) }} />
            </div>
            <input readOnly value={tokenId ? 10.8 : ""} placeholder="0.0" className="w-full border-transparent focus:border-transparent outline-none" />
          </div>
        </div>
        {/* <p className="text-[14px] mb-3 text-[#727B7A]">Balance: ???BNB</p> */}
        <div className="flex gap-3 text-[#727B7A]">
          <ToggleSwitch checked={isUseAnotherWallet} onChange={(checked) => {
            if (checked === false) {
              setReceiver("")
            }
            setIsUseAnotherWallet(checked)
          }} />
          <p>Receive to another wallet</p>
        </div>


        {isUseAnotherWallet && <div className="mt-4">
          <input value={receiver} onChange={(event) => setReceiver(event.currentTarget.value)} placeholder="Enter address ..." className="w-full border-transparent focus:border-transparent outline-none px-4 py-3" />
        </div>}
        {isSingleKlaytnChain && <div className="flex gap-3 text-[#727B7A] mt-3">
          <ToggleSwitch checked={isGasless} onChange={(checked) => setIsGasless(checked)} />
          <Tooltip className="w-[120px] text-center" text="Upcoming">
            <p>Gasless</p>
          </Tooltip>

        </div>}
      </div>
      <div className="third-gradient-background px-8 pt-9 flex flex-col gap-3 pb-6">
        <div className="flex justify-between">
          <p className="text-[#646E6C]">Slippage Tolerance:</p>
          <p className="font-[600] text-[16px]">{slippageTolerance || "1.5%"}</p>
        </div>
        {/* <div className="flex justify-between">
          <p className="text-[#646E6C]">Actual amount to be sent:</p>
          <p className="font-[600] text-[16px]">0.0984081 WETH</p>
        </div> */}
        <div className="flex justify-between">
          <p className="text-[#646E6C]">{isSingleKlaytnChain ? "Fee" : "Cross-chain fee"}:</p>
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
            disabled={buttonLoading || !tokenId}
            className={`w-full text-center rounded-b-[12px] rounded-t-[0px] ${buttonLoading || !tokenId ? "opacity-70" : ""}`}>
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