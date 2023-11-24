'use client'
import Button from "@/components/common/button";
import SelectDropdown from "@/components/common/select";
import Switch from "@/components/common/switch";
import TextField from "@/components/common/text_field";
import { InforIcon } from "@/components/icons/infor_icon";
import { useState } from "react";
import FeeConfigurationOption from "./fee_configuration_option";

export default function FeeConfigurationForm() {
  return (
    <div className=" w-[75%] flex flex-col gap-4 rounded-3xl border border-neutral-g-40 bg-white shadow-drop-2 p-6 ">
      <div>
        <h5 className="text-[27px] text-[#2E3B39] leading-8 font-semibold">Fee Configuration</h5>
        <p className="text-[#130D0D]">Vault managers can charge several types of fees, all of which are paid out in shares of the vault. Fees can be changed at any time after vault creation.</p>
      </div>
      <div>
        {/* Options */}
        <div className="mb-6">
          <FeeConfigurationOption title="Deposit Fee" content="Deposit fees are charged with every new deposit." isChecked={true} />
          <FeeConfigurationOption title="Withdraw Fee" content="Withdrawal fees are charged with every new withdrawal." isChecked={false} />
          <FeeConfigurationOption title="Performance Fee" content="Charge a fee whenever the share value reaches a new all time high." isChecked={false} />
          <FeeConfigurationOption title="Management Fee" content="Charge a continuous fee on the total value of deposits." isChecked={false} />
          <FeeConfigurationOption title="Fee Recipient" content="Which address should receive the fees?" isChecked={false} />
          <div>
            <div className="mb-3 p-4 rounded-lg shadow-md">
              <p className="text-[#808887] text-[14px] font-normal leading-5">0XE15085...Dfd0x4</p>
            </div>
            <p className="text-[#3E4B49] text-[14px] font-normal leading-5">Required</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <Button className="w-full text-center text-[18px] font-medium leading-6">Back</Button>
          <Button className="opacity-60 w-full text-center text-[18px] font-medium leading-6">Next</Button>
        </div>
      </div>
    </div>
  )
}