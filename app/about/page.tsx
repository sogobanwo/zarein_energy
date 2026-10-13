import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import { RuleCard, SectionHeading } from "@/components/ui";
import { foundations, images, strengths, team } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Zarein Energy is an independent Nigerian power producer developing gas-to-power infrastructure.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        active="about"
        eyebrow="About Zarein"
        title="An independent power producer, from wellhead to grid."
        intro="Zarein Energy develops gas-to-power infrastructure for industrial, commercial and grid-scale users across Nigeria."
        image={images.engineer}
        imagePosition="center 30%"
        mobileImagePosition="center 25%"
      />

      <section className="px-gutter flex flex-col gap-4 py-14 md:flex-row md:flex-wrap md:gap-16 md:py-[120px]">
        <SectionHeading eyebrow="Who we are" title="Dependable power for a growing economy." className="md:flex-[1_1_420px]" />
        <div className="flex flex-col gap-5 md:flex-[1_1_480px] md:pt-2">
          <p className="m-0 text-base leading-[1.7] text-body md:text-[19px]">
            We focus on dependable gas-to-power and infrastructure-led solutions that support industrial growth and long-term reliability. Our portfolio spans
            embedded power, gas processing and infrastructure-led developments.
          </p>
          <p className="m-0 hidden text-[17px] leading-[1.7] text-muted md:block">
            Every project is built on four foundations: structured development, bankable partnerships, efficient generation technology and long-term
            operational excellence.
          </p>
        </div>
      </section>

      <section className="px-gutter flex flex-col gap-5 bg-white py-14 md:gap-12 md:py-[120px]">
        <SectionHeading eyebrow="Our approach" title="Four foundations." />
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
          {foundations.map((f, i) => (
            <RuleCard key={f.title} num={String(i + 1).padStart(2, "0")} title={f.title} body={f.body} />
          ))}
        </div>
      </section>

      <section id="team" className="px-gutter flex flex-col gap-5 py-14 md:gap-12 md:py-[120px]">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6">
          <SectionHeading eyebrow="Our team" title="The people behind delivery." className="max-w-[820px]" />
          <p className="m-0 hidden max-w-[400px] text-[15px] leading-relaxed text-muted md:block">
            Experienced professionals driving strategy, execution, finance and technical excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:gap-5">
          {team.map((m) => (
            <article key={m.name} className="flex gap-4 rounded-[18px] bg-white p-3.5 md:flex-col md:gap-0 md:overflow-hidden md:rounded-3xl md:p-0">
              {/* Portrait placeholder: replace with a real photo (next/image) when available */}
              <div className="flex h-[104px] w-[88px] shrink-0 items-center justify-center rounded-xl bg-navy font-wide text-[28px] font-extrabold text-white/90 md:h-[280px] md:w-full md:items-end md:justify-start md:rounded-none md:p-5 md:text-[56px]">
                {m.initials}
              </div>
              <div className="flex min-w-0 flex-col gap-1.5 md:gap-2.5 md:p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted md:text-[11px]">{m.role}</span>
                <h3 className="m-0 font-semiwide text-[17px] font-extrabold leading-tight md:text-xl">{m.name}</h3>
                <p className="m-0 text-[13px] leading-normal text-body md:text-sm md:leading-relaxed">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-gutter flex flex-col gap-4 bg-ink py-14 text-white md:flex-row md:flex-wrap md:items-start md:gap-16 md:py-[120px]">
        <div className="flex flex-col gap-4 md:flex-[1_1_420px] md:gap-5">
          <SectionHeading eyebrow="Team strength" title="Built for strategic growth and dependable delivery." tone="light" />
          <p className="m-0 max-w-[560px] text-[15px] leading-relaxed text-white/80 md:text-[17px] md:leading-[1.7]">
            Engineering, project management, commercial structuring and operational support in one delivery-focused platform, moving projects from concept
            to execution.
          </p>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-2 md:mt-0 md:flex-[1_1_480px] md:gap-3">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              className={`flex flex-col gap-2 rounded-2xl border-t-[3px] bg-white/[0.06] p-[18px] md:gap-2.5 md:rounded-[20px] md:border-t-4 md:p-7 ${
                ["border-white", "border-white/70", "border-white/45", "border-white/25"][i]
              }`}
            >
              <span className="text-base font-extrabold uppercase md:text-[22px]" style={{ fontStretch: "118%" }}>
                {s.title}
              </span>
              <span className="text-xs leading-normal text-white/70 md:text-sm md:leading-relaxed">{s.body}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBand title="See what we're building." primary={{ href: "/projects", label: "Our projects" }} secondary={{ href: "/contact", label: "Talk to the team" }} />
      <SiteFooter />
    </main>
  );
}
