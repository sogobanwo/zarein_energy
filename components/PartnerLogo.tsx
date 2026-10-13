import Image from "next/image";
import type { Partner } from "@/lib/content";

/** A partner's logo, or the typeset Hidier Power wordmark when there is no logo file */
export default function PartnerLogo({ partner, align = "center", size = "md" }: { partner: Partner; align?: "center" | "start"; size?: "sm" | "md" }) {
  if (partner.wordmark) {
    return (
      <span className={`flex flex-col leading-none text-ink ${align === "center" ? "items-center" : "items-start"}`}>
        <span className={`font-wide font-black tracking-[-0.02em] ${size === "sm" ? "text-[22px]" : "text-[30px] md:text-[34px]"}`}>HIDIER</span>
        <span className={`mt-1 flex items-center gap-2 tracking-[0.5em] text-body ${size === "sm" ? "text-[9px]" : "text-[11px] md:text-xs"}`}>
          POWER
          <span className="h-px w-5 bg-ink md:w-7" aria-hidden="true" />
        </span>
      </span>
    );
  }
  return (
    <Image
      src={partner.logo!}
      alt={`${partner.name} logo`}
      width={partner.width}
      height={partner.height}
      className="h-auto max-h-full w-auto max-w-full object-contain"
    />
  );
}
