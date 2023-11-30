// import { ButtonConnectWallet } from "./button";
import Logo from "@/assets/logo.png"
import Image from "next/image";
import Link from "next/link";
import Button from "./common/button";
import { ButtonConnectProvider } from "./button_connect_provider";
import ActiveLink from "./common/active_link";


export const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-9">
        <div className="h-[84px] w-full flex justify-between mb-9 items-start border-b-2 border--[#142321]">
          <Image src={Logo} alt="logo alphacado" height={40} />
          <nav className="flex gap-9 text-[#142321] items-center">
            <ActiveLink href={"/app/swap"} className="text-[18px] hover:font-semibold">Zap</ActiveLink>
            <ActiveLink href={"/app/deposit"} className="text-[18px] hover:font-semibold">Deposit</ActiveLink>
            <ActiveLink href={"/app/vault/create"} className="text-[18px] hover:font-semibold">Create Vault</ActiveLink>
            <ActiveLink href={"/app/analytic"} className="text-[18px] hover:font-semibold">Analytics</ActiveLink>
            <ButtonConnectProvider className="h-12">

            </ButtonConnectProvider>
          </nav>
        </div>
      </div>
    </header>
  );
}