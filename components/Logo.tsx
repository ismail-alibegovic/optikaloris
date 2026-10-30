import Image from "next/image";

type LogoProps = { variant?: "dark" | "light"; className?: string; decorative?: boolean };

// The genuine Optika Loris wordmark (black/red and white versions from optikaloris.ba).
export function Logo({ variant = "dark", className = "", decorative = false }: LogoProps) {
  const alt = decorative ? "" : "Optika Loris — optički studio";
  return variant === "dark" ? (
    <Image src="/brand/loris-logo.png" alt={alt} width={800} height={298} priority className={className} />
  ) : (
    <Image src="/brand/loris-logo-white.png" alt={alt} width={370} height={143} priority className={className} />
  );
}
