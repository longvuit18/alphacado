'use client'
import { useEffect, useState } from "react"
import Success from "./success"
import { ArrowLeftIcon } from "@/components/icons/arrow_left_icon"
import { CREATE_VAULT_STEP } from "./constants/create_vault_step"
import { CreateStepIcon } from "@/components/icons/create_step_icon"
import SetupNewVaultForm from "./setup_new_vault_form"
import FeeConfigurationForm from "./fee_configuration_form"
import ReviewForm from "./review_form"
import { useVault } from "@/hooks/use_vault"
import { ProgressPopup } from "@/components/swap/progress_popup"
import Modal from "@/components/common/modal"

export default function CreateVaultPage() {
  const [step, setStep] = useState(CREATE_VAULT_STEP.SET_UP_NEW_VAULT)
  const [isActiveModal, setIsActiveModal] = useState(true);

  const handleCloseModal = () => {
    setIsActiveModal(false);
  }

  // Set up new vault form state
  const [setupNewVaultForm, setSetupNewVaultForm] = useState({
    name: '',
    depositLimit: false,
    maxDepositAmount: '',
    asset: ''
  })
  const [isFilledSetupNewVaultForm, setIsFilledSetupNewVaultForm] = useState(false)
  useEffect(() => {
    if (setupNewVaultForm.name.length > 0) {
      if (setupNewVaultForm.depositLimit === false || (setupNewVaultForm.depositLimit === true && setupNewVaultForm.maxDepositAmount.length > 0)) {
        setIsFilledSetupNewVaultForm(true)
      } else {
        setIsFilledSetupNewVaultForm(false)
      }
    } else {
      setIsFilledSetupNewVaultForm(false)
    }
  }, [setupNewVaultForm])

  // Fee configuration state
  const [feeConfigurationForm, setFeeConfigurationForm] = useState({
    depositFee: false,
    withdrawFee: false,
    performanceFee: false,
    managementFee: false,
    feeRecipient: false,
    autoHarvest: false,
    address: '',
  })
  const [isFilledFeeConfigurationForm, setIsFilledFeeConfigurationForm] = useState(false)
  useEffect(() => {
    if (feeConfigurationForm.address.length > 0) {
      setIsFilledFeeConfigurationForm(true)
    } else {
      setIsFilledFeeConfigurationForm(false)
    }
  }, [feeConfigurationForm])

  // Review state
  const [isConfirmed, setIsConfirmed] = useState(false)

  const { createVault, chainId, switchNetworkAsync, hash, progressState, setProgressState } = useVault({
    data: {
      name: setupNewVaultForm.name,
      depositAmount: Number(setupNewVaultForm.maxDepositAmount),
      fee: feeConfigurationForm.depositFee ? 2 : 0,
      receiver: feeConfigurationForm.address as any,
      isConfirmed
      // rewardToken
    },
    setEndStep: () => {
      setStep(CREATE_VAULT_STEP.FINISH)

    }
  })

  const handleDeployVault = async () => {
    if (isConfirmed) {
      if (chainId !== 89) {
        if (switchNetworkAsync) {
          await switchNetworkAsync(89)
          return
        }
      }
    }
    await createVault()

  }

  return (
    <div className="container mx-auto mb-10 flex flex-col justify-center items-center">
      <Modal active={isActiveModal}>
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <p className="mb-2">UNDER DEVELOPMENT</p>
          <div className="flex flex-col gap-2">
            This is an early-stage, Proof of Concept (PoC) product developed in a time-constrained hackathon environment. While we have strived to create a functional and valuable product, there may still be areas for improvement.
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="button"
            onClick={handleCloseModal}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
            Cancel
          </button>
        </div>
      </Modal>
      {/* STEP */}
      <div className="w-full">
        {step === CREATE_VAULT_STEP.FINISH ? (
          <div className="cursor-pointer">
            <ArrowLeftIcon />
          </div>
        ) : (
          <div className="flex justify-center items-center mb-12">
            <CreateStepIcon step={CREATE_VAULT_STEP.SET_UP_NEW_VAULT} currentStep={step} />
            <div className="w-[216px] h-[2px] bg-[#C4C8C8]"></div>
            <CreateStepIcon step={CREATE_VAULT_STEP.FEE_CONFIGURATION} currentStep={step} />
            <div className="w-[216px] h-[2px] bg-[#C4C8C8]"></div>
            <CreateStepIcon step={CREATE_VAULT_STEP.REVIEW} currentStep={step} />
          </div>
        )}
      </div>

      {/* FORM */}
      <div className="w-full flex justify-center">
        {
          step === CREATE_VAULT_STEP.SET_UP_NEW_VAULT ? (
            <SetupNewVaultForm
              setupNewVaultForm={setupNewVaultForm}
              setSetupNewVaultForm={setSetupNewVaultForm}
              isFilledSetupNewVaultForm={isFilledSetupNewVaultForm}
              setStep={setStep}
            />
          ) : null
        }
        {
          step === CREATE_VAULT_STEP.FEE_CONFIGURATION ? (
            <FeeConfigurationForm
              feeConfigurationForm={feeConfigurationForm}
              setFeeConfigurationForm={setFeeConfigurationForm}
              isFilledFeeConfigurationForm={isFilledFeeConfigurationForm}
              setStep={setStep}
            />
          ) : null
        }
        {
          step === CREATE_VAULT_STEP.REVIEW ? (
            <ReviewForm
              isConfirmed={isConfirmed}
              setIsConfirmed={setIsConfirmed}
              setStep={setStep}
              handleDeployVault={handleDeployVault}
              chainId={chainId}
              data={{
                name: setupNewVaultForm.name,
                depositAmount: Number(setupNewVaultForm.maxDepositAmount),
                fee: feeConfigurationForm.depositFee ? 2 : 0,
                receiver: feeConfigurationForm.address as any,
                isConfirmed
                // rewardToken
              }}
            />
          ) : null
        }
        {
          step === CREATE_VAULT_STEP.FINISH ? (
            <Success />
          ) : null
        }
      </div>
      {hash && progressState && <ProgressPopup state={progressState} onClose={() => setProgressState("")} />}
    </div>
  )
}