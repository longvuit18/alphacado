"use client"
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import USDCIcon from "@/assets/usdc-icon.png"
import { Supply, Token } from '@/models/supply';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { CHAINS_TESTNET } from '@/constants/chains';
import { ArrowDownIcon } from '../icons/arrow_down_icon';
import axios from 'axios';
import Tooltip from '../common/tooltip';

type Props = {
  title: string;
  supply: Supply;
  zap: string;
  token: Token;
  onChangeToken: (chainId: number, zap: string, token: Token) => void
  disabledSwitchChange?: boolean;
  chainToId?: number
  setChainToId?: (chainId: number) => void;
}

const ZAPS = ["token", "farm", "lending protocols", "liquid staking", "vault"];

export const SupplyingPopup = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const [zap, setZap] = useState(props.zap ?? "token")
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const [vaults, setVault] = useState([])
  const handleSwitchChain = (id: number) => {
    if (switchNetwork && !props.disabledSwitchChange) {
      switchNetwork(id)
    }

    if (props.setChainToId) {
      props.setChainToId(id)
    }
  }

  useEffect(() => {
    if (zap === "vault") {
      axios.get("http://34.87.73.123:5005/api/v1/vaults").then((res) => {
        setVault(res.data.data)
      })
    }
  }, [zap])

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
      <div className='flex items-center bg-[#E0E2E2] pr-2 gap-1 rounded-full' onClick={() => setOpenModal(true)}>
        {zap == "farm" ? (
          <div className='flex gap-1 mr-2'>
            <Image alt="icon"
              src={currentToken?.icon[0] ?? USDCIcon}
              height={24}
              width={24}
              className='cursor-pointer'
            />
            <Image alt="icon"
              src={currentToken?.icon[1] ?? USDCIcon}

              height={24}
              width={24}
              className='cursor-pointer'
            />
          </div>
        ) : (
          <Image alt="icon"
            src={currentToken?.icon ?? USDCIcon}

            height={24}
            width={24}
            className='cursor-pointer'
          />
        )}
        <ArrowDownIcon className='ml-1' />
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"3xl"}>
        <Modal.Header className='bg-[#FAFBFB] rounded-t-[12px]'>{props.title}</Modal.Header>
        <Modal.Body className='bg-[#FAFBFB]  rounded-b-[12px]'>
          <input type="text" placeholder='Search by name, chain or pool name' className='w-full p-6 border-transparent focus:border-transparent outline-none focus:outline-none shadow-md mb-6 rounded-lg' />
          <div className='mb-5'>
            <h3 className='mb-3 text-[#727B7A]'>ZAP TYPE:</h3>
            <div className='flex gap-2 '>
              {ZAPS.map((item, index) => {
                if (item === "vault" && chainId !== 1001) {
                  return null;
                }
                if (item === "lending protocols") {
                  return (
                    <Tooltip key={index} className='w-[150px] text-center' text='Upcoming'>
                      <div onClick={() => setZap(item)} key={item} className={`cursor-pointer capitalize p-3 ${item === zap ? "bg-[#130D0D] text-[#FAFBFB]" : "bg-[#ECEDED] text-[#130D0D]"} rounded-[16px]  text-[16px]`}>{item}</div>
                    </Tooltip>
                  )
                }
                return (
                  <div onClick={() => setZap(item)} key={item} className={`cursor-pointer capitalize p-3 ${item === zap ? "bg-[#130D0D] text-[#FAFBFB]" : "bg-[#ECEDED] text-[#130D0D]"} rounded-[16px]  text-[16px]`}>{item}</div>)
              }

              )
              }
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
              <div className='table-header grid grid-cols-4 border border-transparent border-b-[#C4C8C8]'>
                <div className='col-span-3 text-[#727B7A] p-3 pt-0'>
                  TOKEN
                </div>
                <div className='col-span-1 text-[#727B7A] p-3 pt-0'>
                  MARKETCAP
                </div>
              </div>
              {
                Object.entries(props.supply[chainName ?? ""]?.[zap] ?? {})?.map(item => {
                  return (
                    <div key={item[1].address} onClick={() => onChangeToken(item[1])} className='table-header grid grid-cols-5 border border-transparent border-b-[#C4C8C8] hover:bg-[#C4C8C8] cursor-pointer'>
                      <div className='col-span-4 text-[#130D0D] p-3  font-[500]'>
                        <div className='flex gap-2 items-center'>
                          {Array.isArray(item[1].icon) ?
                            <div className='flex gap-1'>
                              <Image alt="usdc icon" src={item[1].icon[0]} height={32} width={32} />
                              <Image alt="usdc icon" src={item[1].icon[1]} height={32} width={32} />
                            </div>
                            :
                            <Image alt="usdc icon" src={item[1].icon} height={32} width={32} />
                          }
                          {item[0]}
                        </div>
                      </div>
                      <div className='col-span-1 text-[#130D0D] p-3  font-[500]  flex items-center'>
                        {item[1].balance}
                      </div>
                    </div>
                  );
                })
              }
              {zap === "vault" &&
                vaults?.map((item: any) => {
                  return (
                    <div key={item.address} onClick={() => onChangeToken(item[1])} className='table-header grid grid-cols-5 border border-transparent border-b-[#C4C8C8] hover:bg-[#C4C8C8] cursor-pointer'>
                      <div className='col-span-3 text-[#130D0D] p-3  font-[500]'>
                        <div className='flex gap-2 items-center'>

                          <Image alt="usdc icon" src={"/favicon.ico"} height={32} width={32} />

                          {item.name}
                        </div>
                      </div>
                      <div className='col-span-1 text-[#130D0D] p-3  font-[500]  flex items-center'>
                        --
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