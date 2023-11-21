import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function ChainLogo({ logo, borderLeft, borderRight, borderTop, borderBottom, className, imageClassName }:
  { logo: string | StaticImport, borderLeft?: boolean, borderRight?: boolean, borderTop?: boolean, borderBottom?: boolean, className?: string, imageClassName?: string }) {
  return (
    <div className={`p-6 rounded-lg border border-dashed border-black ${borderTop ? 'border-t-1' : 'border-t-0'} ${borderRight ? 'border-r-1' : 'border-r-0'} ${borderBottom ? 'border-b-1' : 'border-b-0'} ${borderLeft ? 'border-l-1' : 'border-l-0'} ${className}`}>
      <Image className={`${imageClassName}`} src={logo} alt={'Logo'} />
    </div>
  );
}
