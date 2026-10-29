import Image from "next/image";

// The genuine Optika Loris wordmark (black/red and white versions from optikaloris.ba).
export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return variant === "dark" ? (
    <Image src="/brand/loris-logo.png" alt="Optika Loris — optički studio" width={800} height={298} priority className={className} />
  ) : (
    <Image src="/brand/loris-logo-white.png" alt="Optika Loris — optički studio" width={370} height={143} className={className} />
  );
}
