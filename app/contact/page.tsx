import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import ContactForm from "@/components/ContactForm";
import { images, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to Zarein Energy about partnerships, investment and reliable power for your site.",
};

export default function ContactPage() {
  const tiles = [
    { small: "Email us", big: "General", href: `mailto:${site.emails.general}` },
    { small: "Email us", big: "Investment", href: `mailto:${site.emails.invest}` },
    { small: "Call", big: site.phone, href: "#" },
    { small: "Visit", big: "Lagos office", href: "#map" },
  ];

  return (
    <main>
      <PageHero
        active="contact"
        eyebrow="Contact"
        title="Let's start the conversation."
        intro="Partnerships, investment opportunities and infrastructure collaboration across the energy value chain."
        image={images.contact}
        mobileImagePosition="70% center"
      />

      <section className="flex flex-col gap-2.5 px-2.5 pb-14 pt-10 md:flex-row-reverse md:flex-wrap md:items-start md:gap-8 md:px-[clamp(24px,4vw,64px)] md:py-[120px]">
        <aside className="flex flex-col gap-2.5 md:flex-[1_1_340px] md:gap-3">
          <div className="flex flex-col gap-[18px] rounded-[22px] bg-navy px-[22px] py-7 text-white md:gap-[22px] md:rounded-3xl md:p-10">
            <span className="eyebrow text-white/60">Contact details</span>
            <div className="flex flex-col gap-1">
              <span className="font-semiwide text-lg font-extrabold md:text-xl">Jerry S. Raji</span>
              <span className="text-[13px] text-white/70 md:text-sm">Managing Partner</span>
            </div>

            {/* Phones: quick-action tiles */}
            <div className="grid grid-cols-2 gap-2.5 md:hidden">
              {tiles.map((t) => (
                <a key={t.big} href={t.href} className="flex min-h-16 flex-col justify-center gap-0.5 rounded-[14px] bg-white/[0.08] px-3.5 py-2.5">
                  <span className="text-[11px] text-white/65">{t.small}</span>
                  <span className="text-sm font-bold">{t.big}</span>
                </a>
              ))}
            </div>

            {/* Desktop: full details */}
            <dl className="m-0 hidden flex-col gap-3.5 border-t border-white/15 pt-5 md:flex">
              {[
                ["General enquiries", <a key="g" href={`mailto:${site.emails.general}`}>{site.emails.general}</a>],
                ["Investment team", <a key="i" href={`mailto:${site.emails.invest}`}>{site.emails.invest}</a>],
                ["Phone", site.phone],
                ["Office", site.address],
              ].map(([k, v]) => (
                <div key={String(k)} className="flex flex-col gap-0.5">
                  <dt className="text-xs text-white/60">{k}</dt>
                  <dd className="m-0 text-base font-bold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Replace with an embedded map (e.g. Google Maps iframe) once the office address is confirmed */}
          <div
            id="map"
            className="hidden h-[260px] items-center justify-center rounded-3xl bg-[#dde2e6] text-[11px] tracking-[0.12em] text-muted md:flex"
          >
            [MAP — LAGOS OFFICE]
          </div>
        </aside>

        <div className="md:flex-[2_1_600px]">
          <ContactForm />
        </div>

        <div className="flex h-[200px] items-center justify-center rounded-[22px] bg-[#dde2e6] text-[11px] tracking-[0.12em] text-muted md:hidden">
          [MAP — LAGOS OFFICE]
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
