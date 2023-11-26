"use client"
import { Button, Modal } from 'flowbite-react';
import Image from 'next/image';
import { useState } from 'react';
import USDCIcon from "@/assets/usdc-icon.png"
import BSCIcon from "@/assets/bsc-icon.png"
import KlaytnIcon from "@/assets/klaytn.png"
import PolygonIcon from "@/assets/polygon-icon.webp"
import ETHIcon from "@/assets/eth-icon.webp"


export const SupplyingPopup = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Image alt="usdc icon" src={USDCIcon} onClick={() => setOpenModal(true)} height={24} width={24} />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"3xl"}>
        <Modal.Header className='bg-[#FAFBFB] rounded-t-[12px]'>Supply to</Modal.Header>
        <Modal.Body className='bg-[#FAFBFB]  rounded-b-[12px]'>
          <input type="text" placeholder='Search by name, chain or pool name' className='w-full p-6 border-transparent focus:border-transparent outline-none focus:outline-none shadow-md mb-6' />
          <div className='mb-5'>
            <h3 className='mb-3 text-[#727B7A]'>ZAP TYPE:</h3>
            <div className='flex gap-2 '>
              <div className='p-3 bg-[#130D0D] rounded-[16px] text-white text-[16px]'>Token</div>
              <div className='p-3 bg-[#ECEDED] rounded-[16px] text-[#130D0D] text-[16px]'>Farm</div>
              <div className='p-3 bg-[#ECEDED] rounded-[16px] text-[#130D0D] text-[16px]'>Lending protocols</div>
              <div className='p-3 bg-[#ECEDED] rounded-[16px] text-[#130D0D] text-[16px]'>Liquid staking</div>
            </div>
          </div>
          <div className='flex gap-6'>
            <div className='assets'>
              <h3 className='mb-3 text-[#727B7A]'>ASSETS FROM:</h3>
              <div className='grid grid-cols-2 gap-2'>
                <div className='p-3 flex flex-col justify-center items-center bg-white gap-1 rounded-[12px]'>
                  <Image alt="eth icon" src={ETHIcon} height={26} width={26} />
                  <h4>ETHEREUM</h4>
                </div>
                <div className='p-3 flex flex-col justify-center items-center bg-white gap-1 rounded-[12px]'>
                  <Image alt="klaytn icon" src={KlaytnIcon} height={26} width={26} />
                  <h4>KLAYTN</h4>
                </div>
                <div className='p-3 flex flex-col justify-center items-center bg-white gap-1 rounded-[12px]'>
                  <Image alt="bsc icon" src={BSCIcon} height={26} width={26} />
                  <h4>BSC</h4>
                </div>
                <div className='p-3 flex flex-col justify-center items-center bg-white gap-1 rounded-[12px]'>
                  <Image alt="polygon icon" src={PolygonIcon} height={26} width={26} />
                  <h4>POLYGON</h4>
                </div>
              </div>
            </div>
            <div className='table'>
              <div className='table-header grid grid-cols-5 border border-transparent border-b-[#C4C8C8]'>
                <div className='col-span-1 text-[#727B7A] p-3 pt-0'>
                  PROTOCOL
                </div>
                <div className='col-span-2 text-[#727B7A] p-3 pt-0'>
                  TOKEN
                </div>
                <div className='col-span-1 text-[#727B7A] p-3 pt-0'>
                  APY
                </div>
                <div className='col-span-1 text-[#727B7A] p-3 pt-0'>
                  BALANCE
                </div>
              </div>
              <div className='table-header grid grid-cols-5 border border-transparent border-b-[#C4C8C8] hover:bg-[#C4C8C8] cursor-pointer'>
                <div className='col-span-1 text-[#130D0D] p-3 font-bold flex items-center'>
                  AAVE
                </div>
                <div className='col-span-2 text-[#130D0D] p-3  font-bold'>
                  <div className='flex gap-2 items-center'>
                    <Image alt="usdc icon" src={USDCIcon} height={32} width={32} />
                    USDC
                  </div>
                </div>
                <div className='col-span-1 text-[#130D0D] p-3  font-bold  flex items-center'>
                  1.67%
                </div>
                <div className='col-span-1 text-[#130D0D] p-3  font-bold  flex items-center'>
                  0%
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}