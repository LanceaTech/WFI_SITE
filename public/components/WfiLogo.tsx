import Image from "next/image";

export default function WfiLogo({ className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Image
        src="/images/wfi_logo.png"
        alt="WFI Logo"
        width={200}
        height={200}
        priority
        className="object-contain"
      />
    </div>
  );
}
