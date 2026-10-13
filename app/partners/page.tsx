import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import PartnerLogo from "@/components/PartnerLogo";
import { Button, RuleCard, SectionHeading } from "@/components/ui";
import { images, partners, valueChainPartners } from "@/lib/content";

export const metadata: Metadata = {
  title: "Technology & Partners",
  description: "The technology, infrastructure and institutional partners behind Zarein Energy's projects.",
};

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        active="partners"
        eyebrow="Technology & partners"
        title="Built with trusted technology and strategic relationships."
        intro="Our delivery model draws on established technology providers, infrastructure collaborators and institutional partners to support reliability, scale and long-term performance."
        image={images.technician}
        imagePosition="center 45%"
        mobileImagePosition="center 40%"
      />

      <section className="px-gutter flex flex-col gap-5 py-14 md:gap-12 md:py-[120px]">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6">
          <SectionHeading eyebrow="Strategic network" title="Trusted names behind every delivery." className="max-w-[820px]" />
          <p className="m-0 hidden max-w-[400px] text-[15px] leading-relaxed text-muted md:block">
            Respected technology, infrastructure and institutional partners focused on dependable execution and lasting project value.
          </p>
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-line bg-line p-0 md:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:rounded-3xl">
          {partners.map((p) => (
            <li key={p.name} className="flex min-h-[168px] flex-col gap-2.5 bg-white px-4 py-[18px] md:min-h-[260px] md:gap-3.5 md:p-9">
              <div className="flex h-[60px] max-w-[280px] items-center md:h-[88px]">
                <PartnerLogo partner={p} align="start" />
              </div>
              <span className="mt-auto text-[9px] font-bold uppercase tracking-[0.12em] text-muted md:text-[11px] md:tracking-[0.14em]">{p.role}</span>
              <span className="text-[15px] font-extrabold leading-[1.15] md:text-[26px] md:leading-[1.1]" style={{ fontStretch: "118%" }}>
                {p.name}
              </span>
            </li>
          ))}
          <li className="flex min-h-[168px] flex-col gap-2.5 bg-navy px-4 py-[18px] text-white md:min-h-[260px] md:gap-3.5 md:p-9">
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/60 md:text-[11px] md:tracking-[0.14em]">Partner with us</span>
            <span className="text-[15px] font-extrabold uppercase leading-[1.2] [overflow-wrap:anywhere] md:text-[22px] md:leading-[1.15]" style={{ fontStretch: "112%" }}>
              Technology or infrastructure provider?
            </span>
            <Button href="/contact" variant="light" className="mt-auto min-h-11 text-[13px] md:self-start md:text-sm">
              Get in touch
            </Button>
          </li>
        </ul>
      </section>

      <section className="px-gutter flex flex-col gap-5 bg-white py-14 md:gap-12 md:py-[120px]">
        <SectionHeading eyebrow="How partners fit" title="Across the value chain." />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {valueChainPartners.map((v) => (
            <RuleCard key={v.stage} num={v.stage} title={v.title} body={v.partners} className="md:min-h-0" />
          ))}
        </div>
      </section>
      <div className="h-2.5 md:h-4" />
      <SiteFooter />
    </main>
  );
}
