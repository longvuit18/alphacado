'use client'
import Button from "@/components/common/button"
import SelectDropdown from "@/components/common/select"
import Switch from "@/components/common/switch"
import TextField from "@/components/common/text_field"
import { InforIcon } from "@/components/icons/infor_icon"
import { useState } from "react"
import FeeConfigurationOption from "./fee_configuration_option"
import { CREATE_VAULT_STEP } from "./constants/create_vault_step"

export default function FeeConfigurationForm(props: any) {
  const { setStep, feeConfigurationForm, setFeeConfigurationForm, isFilledFeeConfigurationForm } = props

  const onClickBack = (e: any) => {
    setStep(CREATE_VAULT_STEP.SET_UP_NEW_VAULT)
  }

  const onChangeAddress = (e: any) => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      address: e.target.value,
    })
  }

  const onToggleDepositFee = () => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      depositFee: !feeConfigurationForm.depositFee,
    })
  }

  const onToggleWithdrawFee = () => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      withdrawFee: !feeConfigurationForm.withdrawFee,
    })
  }

  const onTogglePerformanceFee = () => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      performanceFee: !feeConfigurationForm.performanceFee,
    })
  }

  const onToggleManagementFee = () => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      managementFee: !feeConfigurationForm.managementFee,
    })
  }

  const onToggleFeeRecipient = () => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      feeRecipient: !feeConfigurationForm.feeRecipient,
    })
  }

  const onToggleAutoHarvest = () => {
    setFeeConfigurationForm({
      ...feeConfigurationForm,
      autoHarvest: !feeConfigurationForm.autoHarvest,
    })
  }

  const onClickNext = (e: any) => {
    if (isFilledFeeConfigurationForm) {
      setStep(CREATE_VAULT_STEP.REVIEW)
    }
  }

  return (
    <div className=" w-[75%] flex flex-col gap-4 rounded-3xl border border-neutral-g-40 bg-white shadow-drop-2 p-6 ">
      <div>
        <h5 className="text-[27px] text-[#2E3B39] leading-8 font-semibold">Fee Configuration</h5>
        <p className="text-[#130D0D]">Vault managers can charge several types of fees, all of which are paid out in shares of the vault. Fees can be changed at any time after vault creation.</p>
      </div>
      <div>
        {/* Options */}
        <div className="mb-6">
          <FeeConfigurationOption
            id="1"
            title="Deposit Fee"
            content="Deposit fees are charged with every new deposit."
            isChecked={feeConfigurationForm.depositFee}
            handleToggle={onToggleDepositFee}
          />
          <FeeConfigurationOption
            id="2"
            title="Withdraw Fee"
            content="Withdrawal fees are charged with every new withdrawal."
            isChecked={feeConfigurationForm.withdrawFee}
            handleToggle={onToggleWithdrawFee}
          />
          <FeeConfigurationOption
            id="3"
            title="Performance Fee"
            content="Charge a fee whenever the share value reaches a new all time high."
            isChecked={feeConfigurationForm.performanceFee}
            handleToggle={onTogglePerformanceFee}
          />
          <FeeConfigurationOption
            id="4"
            title="Management Fee"
            content="Charge a continuous fee on the total value of deposits."
            isChecked={feeConfigurationForm.managementFee}
            handleToggle={onToggleManagementFee}
          />
          <FeeConfigurationOption
            id="5"
            title="Fee Recipient"
            content="Which address should receive the fees?"
            isChecked={feeConfigurationForm.feeRecipient}
            handleToggle={onToggleFeeRecipient}
          />
          <FeeConfigurationOption
            id="6"
            title="Auto harvest (relayer)"
            content="Auto harvest (relayer)"
            isChecked={feeConfigurationForm.autoHarvest}
            handleToggle={onToggleAutoHarvest}
          />
          <div>
            <div className="mb-3 p-4 rounded-lg shadow-md">
              <TextField className="w-full" value={feeConfigurationForm.address} onChange={onChangeAddress} />
            </div>
            <p className="text-[#3E4B49] text-[14px] font-normal leading-5">Required</p>
          </div>
        </div>

        {/* Button */}
        <div className="flex gap-3">
          <Button className="w-full text-center text-[18px] font-medium leading-6 cursor-pointer" onClick={onClickBack}>Back</Button>
          <Button
            className={`${isFilledFeeConfigurationForm ? 'cursor-pointer' : 'opacity-60'} w-full text-center text-[18px] font-medium leading-6`}
            onClick={onClickNext}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}