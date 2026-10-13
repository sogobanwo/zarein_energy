import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import { Button, DarkStat, RuleCard, SectionHeading } from "@/components/ui";
import { images, investmentHighlights, investorDocs, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Investor Relations",
  description: "Structured, infrastructure-backed investment opportunities in Nigerian gas-to-power.",
};

export default function InvestorsPage() {
  return (
    <main>
      <PageHero
        active="investors"
        eyebrow="Investor relations"
        title="Structured opportunities for long-term energy investment."
        intro="Access a diversified portfolio of gas-to-power and embedded infrastructure projects, positioned for scale, resilience and long-term value."
        image={images.lagosBridge}
        imagePosition="center 72%"
        mobileImagePosition="72% 75%"
      />

      <section className="px-gutter flex flex-col gap-4 py-14 md:flex-row md:flex-wrap md:gap-16 md:py-[120px]">
        <SectionHeading eyebrow="Our approach" title="Disciplined. Governed. Bankable." className="md:flex-[1_1_420px]" />
        <div className="flex flex-col gap-5 md:flex-[1_1_480px] md:pt-2">
          <p className="m-0 text-base leading-[1.7] text-body md:text-[19px]">
            Our investment approach is anchored in disciplined execution, strong governance and development-finance-aligned structuring.
          </p>
          <p className="m-0 text-base leading-[1.7] text-muted md:text-[17px]">
            We partner with capital providers interested in Africa&apos;s energy sector, focusing on assets built for sustainable returns.
          </p>
        </div>
      </section>

      <section className="px-gutter flex flex-col gap-5 bg-white py-14 md:gap-12 md:py-[120px]">
        <SectionHeading eyebrow="Investment highlights" title="Why Zarein." />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {investmentHighlights.map((h) => (
            <RuleCard key={h.title} title={h.title} body={h.body} />
          ))}
        </div>
      </section>

      <section className="px-gutter flex flex-col gap-5 bg-ink py-14 text-white md:gap-12 md:py-[120px]">
        <SectionHeading eyebrow="Portfolio snapshot" title="The numbers." tone="light" />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-[repeat(auto-fit,minmax(240px,1fr))] md:gap-3">
          <DarkStat index={0} value="5" label="Projects in portfolio" />
          <DarkStat index={1} value={<>100<span className="text-xs md:text-lg"> MMSCFD</span></>} label="Gas processing capacity" />
          <DarkStat index={2} value="[MW]" label="Generation capacity" />
          <DarkStat index={3} value="[$M]" label="Capital being raised" />
        </div>
      </section>

      <section className="px-gutter flex flex-col gap-5 py-14 md:flex-row md:flex-wrap md:items-start md:gap-12 md:py-[120px]">
        <div className="flex flex-col gap-5 md:flex-[1_1_520px] md:gap-7">
          <SectionHeading eyebrow="Investor resources" title="Documents on request." size="md" />
          <ul className="m-0 flex list-none flex-col p-0">
            {investorDocs.map((d, i) => (
              <li key={d}>
                <Link
                  href="/contact"
                  className={`flex min-h-14 items-center justify-between gap-4 border-t border-line py-3 md:py-6 ${i === investorDocs.length - 1 ? "border-b" : ""}`}
                >
                  <span className="font-semiwide text-[17px] font-bold md:text-xl">{d}</span>
                  <span className="text-[13px] text-muted md:text-sm">Request →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2 flex flex-col gap-3.5 rounded-[20px] bg-navy px-[22px] py-7 text-white md:mt-0 md:flex-[1_1_420px] md:gap-5 md:rounded-3xl md:p-12">
          <span className="eyebrow text-white/60">Investment team</span>
          <h3 className="m-0 text-2xl font-extrabold uppercase leading-[1.05] md:text-[32px]" style={{ fontStretch: "122%" }}>
            Speak with us directly.
          </h3>
          <p className="m-0 hidden text-base leading-[1.7] text-white/80 md:block">
            For portfolio information, co-investment or project finance discussions, contact our investment team.
          </p>
          <div className="flex flex-col gap-1 border-y border-white/15 py-3.5 md:gap-1.5 md:py-5">
            <span className="text-[15px] font-bold md:text-base">Haliru Momodu</span>
            <span className="text-[13px] text-white/70 md:text-sm">Finance</span>
          </div>
          <Button href={`mailto:${site.emails.invest}`} variant="light">
            {site.emails.invest}
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
