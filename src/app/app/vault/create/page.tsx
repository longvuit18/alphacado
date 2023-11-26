'use client'
import { useEffect, useState } from "react";
import Success from "./success";
import { ArrowLeftIcon } from "@/components/icons/arrow_left_icon";
import { CREATE_VAULT_STEP } from "./constants/create_vault_step";
import { CreateStepIcon } from "@/components/icons/create_step_icon";
import SetupNewVaultForm from "./setup_new_vault_form";
import FeeConfigurationForm from "./fee_configuration_form";
import ReviewForm from "./review_form";

export default function CreateVaultPage() {
  const [step, setStep] = useState(CREATE_VAULT_STEP.SET_UP_NEW_VAULT);
  // Set up new vault form state
  const [setupNewVaultForm, setSetupNewVaultForm] = useState({
    name: '',
    asset: '',
    strategy: '',
    depositLimit: false,
    maxDepositAmount: '',
  });
  const [isFilledSetupNewVaultForm, setIsFilledSetupNewVaultForm] = useState(false);
  useEffect(() => {
    if (setupNewVaultForm.name.length > 0 && setupNewVaultForm.asset.length > 0 && setupNewVaultForm.strategy.length > 0) {
      if (setupNewVaultForm.depositLimit === false || (setupNewVaultForm.depositLimit === true && setupNewVaultForm.maxDepositAmount.length > 0)) {
        setIsFilledSetupNewVaultForm(true);
      } else {
        setIsFilledSetupNewVaultForm(false);
      }
    } else {
      setIsFilledSetupNewVaultForm(false);
    }
  }, [setupNewVaultForm]);

  // Fee configuration state
  const [feeConfigurationForm, setFeeConfigurationForm] = useState({
    depositFee: false,
    withdrawFee: false,
    performanceFee: false,
    managementFee: false,
    feeRecipient: false,
    address: '',
  });
  const [isFilledFeeConfigurationForm, setIsFilledFeeConfigurationForm] = useState(false);
  useEffect(() => {
    if (feeConfigurationForm.address.length > 0) {
      setIsFilledFeeConfigurationForm(true);
    } else {
      setIsFilledFeeConfigurationForm(false);
    }
  }, [feeConfigurationForm]);

  // Review state
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleDeployVault = () => {
    if (isConfirmed) {
      console.log('SET UP NEW VAULT FORM: ', setupNewVaultForm);
      console.log('FEE CONFIGURATION FORM: ', feeConfigurationForm);
      setStep(CREATE_VAULT_STEP.FINISH);
    }
  }

  return (
    <div className="container mx-auto mb-10 flex flex-col justify-center items-center">
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
            />
          ) : null
        }
        {
          step === CREATE_VAULT_STEP.FINISH ? (
            <Success />
          ) : null
        }
      </div>
    </div>
  )
}