import Link from "next/link";
import PartnerLogo from "./PartnerLogo";
import { partners } from "@/lib/content";

/** Auto-scrolling strip of partner logos (pauses on hover, stops for reduced motion) */
export default function PartnerMarquee() {
  const loop = [...partners, ...partners];
  return (
    <section aria-label="Our partners" className="flex flex-col gap-5 overflow-hidden pb-16 md:gap-8 md:pb-[120px]">
      <div className="px-gutter flex items-center justify-between gap-4">
        <span className="eyebrow text-muted">
          <span className="md:hidden">Our partners</span>
          <span className="hidden md:inline">Trusted technology, infrastructure &amp; institutional partners</span>
        </span>
        <Link href="/partners" className="inline-flex min-h-11 items-center gap-2 text-[13px] font-semibold md:text-sm">
          All partners <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="flex overflow-hidden border-y border-line">
        <ul className="animate-marquee flex w-max shrink-0">
          {loop.map((p, i) => (
            <li
              key={`${p.name}-${i}`}
              aria-hidden={i >= partners.length ? true : undefined}
              className="flex w-[180px] flex-col items-center justify-center gap-2 border-r border-line px-5 py-[22px] text-center md:w-auto md:min-w-[300px] md:px-12 md:py-8"
            >
              <div className="flex h-[52px] w-[140px] items-center justify-center md:mb-2.5 md:h-20 md:w-[220px]">
                <PartnerLogo partner={p} />
              </div>
              <span className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.12em] text-muted md:text-xs">{p.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
