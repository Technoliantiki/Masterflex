import Image from "next/image";

export function BrandLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={`inline-flex overflow-hidden rounded-sm ${className}`}>
      <Image
        src="/images/brand/masterflex-logo-industrial-crop.png"
        alt="Masterflex Tools since 1975"
        width={1355}
        height={545}
        priority={priority}
        className="h-full w-auto object-contain"
      />
    </span>
  );
}
