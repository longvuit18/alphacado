import { CreateStepIcon } from "@/components/icons/create_step_icon";
import { SettingIcon } from "@/components/icons/setting_icon";
import { MainSwap } from "@/components/swap/main";
import Link from "next/link";
import SetupNewVaultForm from "./setup_new_vault_form";
import FeeConfigurationForm from "./fee_configuration_form";

export default function CreateVaultPage() {
  return (
    <div className="container mx-auto mb-10 flex flex-col justify-center items-center">
      {/* STEP */}
      <div className="flex justify-center items-center mb-12">
        <CreateStepIcon isCompleted={true} />
        <div className="w-[216px] h-[2px] bg-[#C4C8C8]"></div>
        <CreateStepIcon isCompleted={false} />
        <div className="w-[216px] h-[2px] bg-[#C4C8C8]"></div>
        <CreateStepIcon isCompleted={false} />
      </div>

      {/* FORM */}
      <div className="w-full flex justify-center">
        {/* <SetupNewVaultForm /> */}
        <FeeConfigurationForm />
      </div>
    </div>
  )
}