'use client'
import Button from "@/components/common/button";
import SelectDropdown from "@/components/common/select";
import Switch from "@/components/common/switch";
import TextField from "@/components/common/text_field";
import { InforIcon } from "@/components/icons/infor_icon";
import { FormEventHandler, ReactNode, useState } from "react";
import { CREATE_VAULT_STEP } from "./constants/create_vault_step";
import Strategy from "@/components/vault/strategy";
import { PlusIcon } from "@/components/icons/plus_icon";

export default function SetupNewVaultForm(props: any) {
  const { setupNewVaultForm, setSetupNewVaultForm, isFilledSetupNewVaultForm, setStep } = props;
  const singleStrategy = <Strategy />

  const [strategies, setStrategies] = useState<ReactNode[]>([singleStrategy]);

  const onChangeVaultName = (e: any) => {
    setSetupNewVaultForm({
      ...setupNewVaultForm,
      name: e.target.value,
    });
  }

  const onChangeAsset = (e: any) => {
    setSetupNewVaultForm({
      ...setupNewVaultForm,
      asset: e.target.value,
    });
  }

  const onChangeStrategy = (e: any) => {
    setSetupNewVaultForm({
      ...setupNewVaultForm,
      strategy: e.target.value,
    });
  }

  const onChangeDepositLimit = () => {
    setSetupNewVaultForm({
      ...setupNewVaultForm,
      depositLimit: !setupNewVaultForm.depositLimit,
    });
  }

  const onChangeMaxDepositAmount = (e: any) => {
    setSetupNewVaultForm({
      ...setupNewVaultForm,
      maxDepositAmount: e.target.value,
    });
  }

  const onClickNext = (e: any) => {
    if (isFilledSetupNewVaultForm) {
      console.log('FORM RESULT: ', setupNewVaultForm);
      setStep(CREATE_VAULT_STEP.FEE_CONFIGURATION);
    }
  }

  const handleAddStrategy = () => {
    setStrategies([...strategies, singleStrategy]);
  }

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
            <TextField className="w-full" placeholder="Type vault name" value={setupNewVaultForm.name} onChange={onChangeVaultName} />
          </div>
          <div className="w-full mb-3">
            <SelectDropdown className="w-full" placeholder="Choose a Token">
              <option>Token 1</option>
              <option>Token 2</option>
              <option>Token 3</option>
            </SelectDropdown>
          </div>
          <div>
            {strategies.map((strategy, index) => (
              <div key={index} className="mb-4">
                {strategy}
              </div>
            ))}
            <div
              className="w-14 ml-[72px] cursor-pointer border-2 p-3 rounded-full border-[#FFE47A] mt-4"
              onClick={handleAddStrategy}
            >
              <PlusIcon />
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
                id="depositLimit"
                isOn={setupNewVaultForm.depositLimit}
                handleToggle={onChangeDepositLimit}
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
            <TextField className="w-full" placeholder="0" value={setupNewVaultForm.maxDepositAmount} onChange={onChangeMaxDepositAmount} />
          </div>
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <Button className="w-full text-center text-[18px] font-medium leading-6 cursor-pointer">Back</Button>
          <Button
            className={`${isFilledSetupNewVaultForm ? 'cursor-pointer' : 'opacity-60'} w-full text-center text-[18px] font-medium leading-6`}
            onClick={onClickNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}