import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function ChainLogo({ logo, className, imageClassName, commingSoon }:
  { logo: string | StaticImport, className?: string, imageClassName?: string, commingSoon?: boolean }) {
  return (
    <div className={`px-[67px] ${commingSoon ? 'py-[45px] opacity-60' : 'py-[58px]'} border border-solid border-[#E0E2E2] flex flex-col justify-center items-center ${className}`}>
      <Image className={`${imageClassName}`} src={logo} alt={'Logo'} />
      {commingSoon ? (
        <p className="text-[14px] text-center opacity-60">Comming soon</p>
      ) : null}
    </div>
  );
}
