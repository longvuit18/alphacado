"use client"
import { Modal } from 'flowbite-react';
import { useState } from 'react';

import { SettingIcon } from '../icons/setting_icon';
import Button from '../common/button';

type Props = {
}


export const SettingPopup = (props: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <SettingIcon onClick={() => setOpenModal(true)} />
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"2xl"}>
        <Modal.Header className='bg-[#FAFBFB] rounded-t-[12px]'>Settings</Modal.Header>
        <Modal.Body className='bg-[#FAFBFB] rounded-b-[12px]'>
          <h3 className='text-[16px] font-[500] mb-3'>
            Slippage tolerance
          </h3>
          <div className='flex gap-1 justify-between mb-6'>
            <div className='flex gap-1'>
              <div className='p-4 shadow-md rounded-lg'>1%</div>
              <div className='p-4 shadow-md  rounded-lg bg-[#ffe]'>1.5%</div>
              <div className='p-4 shadow-md  rounded-lg'>2.0%</div>
            </div>
            <div className='p-4 flex justify-between shadow-md w-full  rounded-lg'>
              <div>4</div>
              <div>%</div>
            </div>
          </div>
          <div className='font-[400] text-[#4A5654] mb-6'>
            <span className='font-[600]'>Slippage Tolerance </span> is the maximum price change you are willing to accept for your trades to be completed. On-chain and cross-chain swaps will be treated in a special way if the price change exceeds the specified value.
          </div>
          <div className='border border-transparent border-b-[#4A5654] mb-6'></div>
          <h3 className='text-[16px] font-[500] mb-3'>
            On-chain trades deadline:
          </h3>
          <div className='p-4 flex justify-between shadow-md w-full  rounded-lg mb-6'>
            <div>20</div>
            <div>Minutes</div>
          </div>
          <h3 className='text-[16px] font-[500] mb-3'>
            Cross-chain trades deadline:
          </h3>
          <div className='p-4 flex justify-between shadow-md w-full  rounded-lg'>
            <div>10000</div>
            <div>Minutes</div>
          </div>
        </Modal.Body>
        <Modal.Footer className='p-0'>
          <Button
            onClick={() => {
              setOpenModal(false)
            }}
            className="w-full text-center rounded-b-[9px] rounded-t-[0px]">
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}