"use client"
import { Modal } from 'flowbite-react';

import Image from 'next/image';
type Props = {
  state: string;
  onClose: () => void
}

export const ProgressPopup = (props: Props) => {
  return (
    <>
      <Modal show={true} size={"sm"} onClose={() => props.onClose()}>
        <Modal.Body className='bg-[#FAFBFB] rounded-[12px] flex flex-col items-center p-8'>
          <Image src={"/favicon.ico"} alt="icon" width={80} height={80} />
          <h2 className='text-[24px]'>
            {props.state}
          </h2>
          <div className='underline cursor-pointer' onClick={() => props.onClose()}>
            Back
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}