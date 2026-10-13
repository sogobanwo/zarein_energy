import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import { DarkStat, SectionHeading } from "@/components/ui";
import { commitments, images, impactStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "Gas-to-power as a cleaner, more reliable alternative to diesel in Nigeria's energy transition.",
};

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero
        active="sustainability"
        eyebrow="Sustainability"
        title="A practical transition pathway for reliable power."
        intro="Cleaner energy pathways, operational efficiency and a long-term view of resilience, value creation and responsible growth."
        image={images.pylons}
        imagePosition="center 60%"
        mobileImagePosition="55% 60%"
      />

      <section className="px-gutter flex flex-col items-center gap-4 py-14 text-center md:gap-7 md:py-[120px]">
        <span className="eyebrow text-muted">Our position</span>
        <h2 className="m-0 max-w-[1200px] font-wide text-[38px] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] md:text-[clamp(36px,6vw,96px)]">
          Gas over diesel. Reliability over compromise.
        </h2>
        <p className="m-0 max-w-[680px] text-base leading-[1.7] text-body md:text-lg">
          In high-demand environments, gas-to-power is a cleaner, more reliable alternative to diesel and heavy fuel oil, and a practical step in
          Nigeria&apos;s energy transition.
        </p>
      </section>

      <section className="px-gutter flex flex-col gap-5 bg-white py-14 md:gap-12 md:py-[120px]">
        <SectionHeading eyebrow="Three commitments" title="How we build responsibly." />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {commitments.map((c, i) => (
            <div key={c.title} className="flex flex-col gap-3 rounded-[18px] bg-paper p-6 md:min-h-[340px] md:gap-[18px] md:rounded-3xl md:p-10">
              <span className="font-wide text-[44px] font-extrabold leading-none text-mist md:text-[64px]">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-xl font-extrabold uppercase leading-[1.1] md:text-[26px]" style={{ fontStretch: "118%" }}>
                {c.title}
              </span>
              <span className="text-sm leading-[1.65] text-body md:text-base">{c.body}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-gutter flex flex-col gap-4 bg-ink py-14 text-white md:gap-12 md:py-[120px]">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6">
          <SectionHeading eyebrow="Impact" title="Measured progress." tone="light" />
          <p className="m-0 max-w-[380px] text-[13px] leading-relaxed text-white/60 md:text-sm">Figures to be supplied by Zarein&apos;s ESG reporting.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:gap-3">
          {impactStats.map((s, i) => (
            <DarkStat key={s.label} index={i} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <CtaBand title="Partner on a cleaner grid." primary={{ href: "/contact", label: "Get in touch" }} secondary={{ href: "/investors", label: "Request ESG framework" }} />
      <SiteFooter />
    </main>
  );
}
