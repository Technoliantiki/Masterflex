import Image from "next/image";

export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-sm border border-white/25 bg-white/90 p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.18)] backdrop-blur-sm ${className}`}
    >
      <Image
        src="/images/brand/masterflex-logo.png"
        alt="Masterflex Tools since 1975"
        width={1145}
        height={312}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
