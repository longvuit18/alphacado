"use client"
import { Modal } from 'flowbite-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { Supply, Token } from '@/models/supply';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import { CHAINS_TESTNET } from '@/constants/chains';
import axios from 'axios';
import { PlusCircleIcon } from '@heroicons/react/16/solid';
import { useClientAccount } from '@/hooks/use_client_account';

type Props = {
  title: string;
  supply: Supply;
  token: Token;
  disabledSwitchChange?: boolean;
  chainToId?: number
  setChainToId?: (chainId: number) => void;
  disabledSwitchChain?: boolean;
  onChangeNft: (chainId: number, contractAddress: string, tokenId: string) => void
  tokenId?: string | undefined
  setTokenId?: any

}


export const SupplyingNftPopup = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const account = useClientAccount();
  const [loading, setLoading] = useState(false);
  const [nfts, setNfts] = useState<any[]>([]);
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const handleSwitchChain = (id: number) => {
    if (switchNetwork && !props.disabledSwitchChange) {
      switchNetwork(id)
    }

    if (props.setChainToId) {
      props.setChainToId(id)
    }

    if (props.setTokenId) {
      props.setTokenId(undefined)
    }

  }

  const chainId = useMemo(() => {
    if (props.chainToId) return props.chainToId
    if (chain?.id) return chain.id
  }, [chain?.id, props.chainToId])


  useEffect(() => {
    if (!!account?.address && openModal) {
      setLoading(true)
      axios.get("/api/nfts/" + account?.address ?? '').then((res) => {
        setNfts(chainId === 11155111 ? res.data.result : [])
        setLoading(false)
      })
    }

  }, [account?.address, openModal, chainId])



  const currentNft = useMemo(() => {
    return nfts?.find(item => item.token_id === props.tokenId)
  }, [nfts, props.tokenId])

  return (
    <>
      <div className='w-full flex items-center flex-col justify-center gap-1 rounded-full'>
        {currentNft ?
          <div className='cursor-pointer'
          >
            <img src={currentNft?.token_uri} alt={currentNft?.name} />
            <div className='flex items-center flex-col'>
              <p>Name: {currentNft?.name}</p>
              <p>TokenId: {currentNft?.token_id}</p>
              <p className='underline cursor-pointer' onClick={() => setOpenModal(true)} >Change</p>
            </div>
          </div>
          :
          <div onClick={() => setOpenModal(true)}>
            <div>Add NFT</div>
            <PlusCircleIcon className="w-12 h-12 cursor-pointer" color="rgba(255, 200, 90)" />
          </div>
        }
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"4xl"}>
        <Modal.Header className='bg-[#FAFBFB] rounded-t-[12px]'>{props.title}</Modal.Header>
        <Modal.Body className='bg-[#FAFBFB]  rounded-b-[12px]'>
          <input type="text" placeholder='Search by name, chain or pool name' className='w-full p-6 border-transparent focus:border-transparent outline-none focus:outline-none shadow-md mb-6 rounded-lg' />

          <div className='flex gap-6'>
            {!props.disabledSwitchChain &&
              <div className='assets'>
                <h3 className='mb-3 text-[#727B7A]'>ASSETS FROM:</h3>
                <div className='grid grid-cols-2 gap-2'>
                  {Object.values(CHAINS_TESTNET).map(item => {
                    return (
                      <div key={item.name} onClick={() => handleSwitchChain(item.id)} className={`cursor-pointer p-3 flex flex-col justify-center items-center bg-white gap-1 rounded-[12px] ${item.id == chainId ? "border border-[#130D0D]" : ''}`}>
                        <Image alt={item.name + " icon"} src={item.icon} height={26} width={26} />
                        <h4 className='uppercase'>{item.name}</h4>
                      </div>
                    )
                  })}
                </div>
              </div>
            }
            <div className=''>
              <h3 className='mb-3 text-[#727B7A]'>ASSETS:</h3>
              {
                loading ? <>Loading ...</>
                  :
                  (
                    <div className='grid grid-cols-2 gap-4 overflow-auto h-[400px]'>
                      {nfts?.map((item: any, index: number) => (
                        <div key={item?.token_id + index} className='cursor-pointer'
                          onClick={() => {
                            props.onChangeNft(chainId ?? 11155111, item.token_address, item?.token_id)
                            setOpenModal(false)
                          }}
                        >
                          <img src={item.token_uri} alt={item.name} />
                          <div className='flex items-center flex-col'>
                            <p>Name: {item.name}</p>
                            <p>TokenId: {item.token_id}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )
              }
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}