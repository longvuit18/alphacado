"use client"
import { Modal } from 'flowbite-react';
import { Dispatch, SetStateAction, useState } from 'react';

import { SettingIcon } from '../icons/setting_icon';
import Button from '../common/button';

type Props = {
  slippageTolerance: string | undefined;
  setSlippageTolerance: Dispatch<SetStateAction<string | undefined>>;
}


export const SettingPopup = (props: Props) => {
  const { slippageTolerance, setSlippageTolerance } = props;
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
              <div className={`p-4 shadow-md w-[70px] text-center rounded-lg ${slippageTolerance == "1%" ? 'bg-[#ffe]' : ''} cursor-pointer`} onClick={() => setSlippageTolerance("1%")}>1%</div>
              <div className={`p-4 shadow-md w-[70px] text-center rounded-lg ${slippageTolerance == "1.5%" ? 'bg-[#ffe]' : ''} cursor-pointer`} onClick={() => setSlippageTolerance("1.5%")}>1.5%</div>
              <div className={`p-4 shadow-md w-[70px] text-center rounded-lg ${slippageTolerance == "2%" ? 'bg-[#ffe]' : ''} cursor-pointer`} onClick={() => setSlippageTolerance("2%")}>2.0%</div>
              <div className={`p-4 shadow-md w-[70px] text-center rounded-lg cursor-pointer ${slippageTolerance == "4%" ? 'bg-[#ffe]' : ''}`} onClick={() => setSlippageTolerance("4%")}>
                4%
              </div>
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