import Image from "next/image";

export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex bg-white p-1 ${className}`}>
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
