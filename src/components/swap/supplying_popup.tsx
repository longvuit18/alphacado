"use client"
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import USDCIcon from "@/assets/usdc-icon.png"
import { Supply, Token } from '@/models/supply';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { CHAINS_TESTNET } from '@/constants/chains';

type Props = {
  supply: Supply;
  zap: string;
  token: Token;
  onChangeToken: (chainId: number, zap: string, token: Token) => void
  disabledSwitchChange?: boolean;
  chainToId?: number
  setChainToId?: (chainId: number) => void
}

const ZAPS = ["token", "farm", "lending protocols", "liquid staking"];

export const SupplyingPopup = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [zap, setZap] = useState(props.zap ?? "token")
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()

  const handleSwitchChain = (id: number) => {
    if (switchNetwork && !props.disabledSwitchChange) {
      switchNetwork(id)
    }

    if (props.setChainToId) {
      props.setChainToId(id)
    }
  }

  const chainName = useMemo(() => {
    if (props.chainToId) {
      return Object.values(CHAINS_TESTNET).find(item => item.id === props.chainToId)?.name?.toLowerCase()
    }
    return Object.values(CHAINS_TESTNET).find(item => item.id === chain?.id)?.name?.toLowerCase()
  }, [chain?.id, props.chainToId])

  const currentToken = useMemo(() => {
    return Object.values(props.supply[chainName ?? ""]?.[zap] ?? {})?.find(item => item.address === props.token.address)
  }, [chainName, zap, props.token])

  const onChangeToken = (token: Token) => {
    props.onChangeToken(chain?.id ?? 1001, zap, token)
    setOpenModal(false)
  }

  const chainId = useMemo(() => {
    if (props.chainToId) return props.chainToId
    if (chain?.id) return chain.id
  }, [chain?.id, props.chainToId])

  return (
    <>
      <Image alt="icon" src={currentToken?.icon ?? USDCIcon} onClick={() => setOpenModal(true)} height={24} width={24} />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"3xl"}>
        <Modal.Header className='bg-[#FAFBFB] rounded-t-[12px]'>Supply to</Modal.Header>
        <Modal.Body className='bg-[#FAFBFB]  rounded-b-[12px]'>
          <input type="text" placeholder='Search by name, chain or pool name' className='w-full p-6 border-transparent focus:border-transparent outline-none focus:outline-none shadow-md mb-6 rounded-lg' />
          <div className='mb-5'>
            <h3 className='mb-3 text-[#727B7A]'>ZAP TYPE:</h3>
            <div className='flex gap-2 '>
              {ZAPS.map(item => <div onClick={() => setZap(item)} key={item} className={`cursor-pointer capitalize p-3 ${item === zap ? "bg-[#130D0D] text-[#FAFBFB]" : "bg-[#ECEDED] text-[#130D0D]"} rounded-[16px]  text-[16px]`}>{item}</div>)}
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='assets'>
              <h3 className='mb-3 text-[#727B7A]'>ASSETS FROM:</h3>
              <div className='grid grid-cols-2 gap-2'>
                {Object.values(CHAINS_TESTNET).map(item => {
                  return (
                    <div key={item.name} onClick={() => handleSwitchChain(item.id)} className={` cursor-pointer p-3 flex flex-col justify-center items-center bg-white gap-1 rounded-[12px] ${item.id == chainId ? "border border-[#130D0D]" : ''}`}>
                      <Image alt={item.name + " icon"} src={item.icon} height={26} width={26} />
                      <h4 className='uppercase'>{item.name}</h4>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='table'>
              <div className='table-header grid grid-cols-5 border border-transparent border-b-[#C4C8C8]'>
                <div className='col-span-3 text-[#727B7A] p-3 pt-0'>
                  TOKEN
                </div>
                <div className='col-span-1 text-[#727B7A] p-3 pt-0'>
                  APY
                </div>
                <div className='col-span-1 text-[#727B7A] p-3 pt-0'>
                  BALANCE
                </div>
              </div>
              {
                Object.entries(props.supply[chainName ?? ""]?.[zap] ?? {})?.map(item => {
                  return (
                    <div key={item[1].address} onClick={() => onChangeToken(item[1])} className='table-header grid grid-cols-5 border border-transparent border-b-[#C4C8C8] hover:bg-[#C4C8C8] cursor-pointer'>
                      <div className='col-span-3 text-[#130D0D] p-3  font-bold'>
                        <div className='flex gap-2 items-center'>
                          <Image alt="usdc icon" src={item[1].icon} height={32} width={32} />
                          {item[0]}
                        </div>
                      </div>
                      <div className='col-span-1 text-[#130D0D] p-3  font-bold  flex items-center'>
                        {item[1].apy} %
                      </div>
                      <div className='col-span-1 text-[#130D0D] p-3  font-bold  flex items-center'>
                        {item[1].balance} %
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}