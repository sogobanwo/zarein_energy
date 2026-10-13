import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return <span className={`eyebrow ${tone === "light" ? "text-white/60" : "text-muted"} ${className}`}>{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  tone = "dark",
  size = "lg",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  tone?: "dark" | "light";
  size?: "lg" | "md";
  className?: string;
}) {
  const sizes = size === "lg" ? "text-[30px] md:text-[clamp(34px,5vw,72px)]" : "text-[30px] md:text-[clamp(30px,3.6vw,52px)]";
  return (
    <div className={`flex flex-col gap-3 md:gap-[18px] ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`m-0 font-wide font-extrabold uppercase leading-none tracking-[-0.02em] ${sizes}`}>{title}</h2>
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline-dark" | "outline-light";
  className?: string;
  arrow?: boolean;
};

const variants = {
  dark: "bg-ink text-white hover:bg-navy",
  light: "bg-white text-navy hover:bg-paper",
  "outline-dark": "border border-ink text-ink hover:bg-ink hover:text-white",
  "outline-light": "border border-white/50 text-white hover:bg-white/10",
};

export function Button({ href, children, variant = "dark", className = "", arrow = false }: ButtonProps) {
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");
  const cls = `inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full text-[15px] font-bold transition-colors ${
    arrow ? "pl-6 pr-1.5 justify-between" : "px-7"
  } ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && (
        <span
          aria-hidden="true"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${variant === "light" ? "bg-navy text-white" : "bg-white text-ink"}`}
        >
          →
        </span>
      )}
    </>
  );
  return isExternal ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** Show children only on phones / only from tablet up (wrapping avoids display-class clashes) */
export function OnlyMobile({ children }: { children: ReactNode }) {
  return <div className="flex flex-col md:hidden">{children}</div>;
}
export function OnlyDesktop({ children }: { children: ReactNode }) {
  return <div className="hidden md:block">{children}</div>;
}

/** Three-step white→grey bar used under big wordmarks */
export function StripeBar({ className = "", size = "sm" }: { className?: string; size?: "sm" | "md" }) {
  const seg = size === "md" ? "h-[5px] w-10 md:w-16 md:h-1.5" : "h-1 w-9 md:h-[5px] md:w-12";
  return (
    <div className={`flex gap-1.5 md:gap-2 ${className}`} aria-hidden="true">
      <span className={`${seg} rounded-full bg-white`} />
      <span className={`${seg} rounded-full bg-white/60`} />
      <span className={`${seg} rounded-full bg-white/30`} />
    </div>
  );
}

/** Dark stat card with a graded top border */
export function DarkStat({ value, label, index }: { value: ReactNode; label: string; index: number }) {
  const borders = ["border-white", "border-white/70", "border-white/45", "border-white/25"];
  return (
    <div className={`flex flex-col gap-2 rounded-2xl border-t-[3px] bg-white/[0.06] p-[18px] md:gap-2.5 md:rounded-[20px] md:border-t-4 md:p-8 ${borders[index % 4]}`}>
      <span className="font-wide text-[30px] font-extrabold leading-none md:text-[44px]">{value}</span>
      <span className="text-xs text-white/70 md:text-sm">{label}</span>
    </div>
  );
}

/** Light card with a short ink rule, used for lists of principles */
export function RuleCard({ num, title, body, className = "" }: { num?: string; title: string; body: string; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 rounded-[18px] bg-paper p-[22px] md:min-h-[240px] md:gap-4 md:rounded-[20px] md:p-8 ${className}`}>
      <span className="flex items-center gap-3">
        <span className="block h-[3px] w-7 rounded-full bg-ink md:w-10" />
        {num && <span className="eyebrow text-muted">{num}</span>}
      </span>
      <span className="font-extrabold uppercase leading-[1.15] text-[19px] md:text-[22px]" style={{ fontStretch: "118%" }}>
        {title}
      </span>
      <span className="text-sm leading-relaxed text-body md:text-[15px]">{body}</span>
    </div>
  );
}
