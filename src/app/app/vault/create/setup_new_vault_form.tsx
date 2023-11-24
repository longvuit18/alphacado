'use client'
import Button from "@/components/common/button";
import SelectDropdown from "@/components/common/select";
import Switch from "@/components/common/switch";
import TextField from "@/components/common/text_field";
import { InforIcon } from "@/components/icons/infor_icon";
import { useState } from "react";

export default function SetupNewVaultForm() {
  const [checked, setChecked] = useState(true);

  return (
    <div className=" w-[75%] flex flex-col gap-4 rounded-3xl border border-neutral-g-40 bg-white shadow-drop-2 p-6 ">
      <div>
        <h5 className="text-[27px] text-[#2E3B39] leading-8 font-semibold">Set up a new vault</h5>
      </div>
      <div>
        {/* Name */}
        <div className="mb-4">
          <div className="mb-3">
            <p className="text-base mb-2">Name</p>
            <TextField className="w-full" placeholder="Type vault name" />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <SelectDropdown placeholder="Choose an Asset" />
            <TextField placeholder="Select an asset first" />
          </div>
          <div>
            <TextField className="w-full" placeholder="Choose a Strategy" />
            <div>
              <p className="text-[12px] text-[#646E6C] font-normal leading-5">To learn more click here</p>
            </div>
          </div>
        </div>

        {/* Deposit Limit */}
        <div className="mb-4">
          <div className="flex justify-between mb-3">
            <div>
              <p className="text-base text-[#130D0D]">Deposit Limit</p>
              <p className="text-[#3E4B49] text-[12px] font-normal leading-5">Restricts the maximum of assets that can be deposited into the vault.</p>
            </div>
            <div className="flex justify-center items-center">
              <Switch
                isOn={checked}
                handleToggle={() => setChecked(!checked)}
              />
            </div>
          </div>
          <div className="p-2 bg-[#E8AA1433] flex justify-center items-center gap-4 rounded-lg">
            <div className="w-[46px] h-[46px]">
              <InforIcon />
            </div>
            <div>
              <p className="text-[#130D0D] text-[12px] font-normal leading-5">
                Settings in this section are restrictive. Enable them to control how much can be deposited into your vault. Deposit limits can be changed at any time after vault creation
              </p>
            </div>
          </div>
        </div>

        {/* Maximum Deposit Amount */}
        <div className="mb-4">
          <div className="mb-3">
            <p className="text-base mb-2">Maximum deposit amount</p>
            <TextField className="w-full" placeholder="0" />
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