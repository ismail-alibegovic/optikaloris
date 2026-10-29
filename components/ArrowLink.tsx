import { ArrowUpRight, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export function ArrowLink({ href, children, external, className = "" }: ArrowLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-2 text-[0.8125rem] font-semibold tracking-wide ${className}`}
    >
      <span className="link-underline">{children}</span>
      <Icon
        aria-hidden
        className="size-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1"
        strokeWidth={1.5}
      />
      {external && <span className="sr-only">(otvara se u novom prozoru)</span>}
    </a>
  );
}

type ButtonLinkProps = ArrowLinkProps & { variant?: "dark" | "light" | "outline" };

export function ButtonLink({ href, children, external, className = "", variant = "dark" }: ButtonLinkProps) {
  const styles = {
    dark: "bg-charcoal text-ivory hover:bg-ink",
    light: "bg-ivory text-charcoal hover:bg-cream",
    outline: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  }[variant];
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex h-12 items-center justify-center gap-3 px-7 text-[0.8125rem] font-semibold tracking-wide transition-colors duration-300 ${styles} ${className}`}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1"
        strokeWidth={1.5}
      />
      {external && <span className="sr-only">(otvara se u novom prozoru)</span>}
    </a>
  );
}
