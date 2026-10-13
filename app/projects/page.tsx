import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import ProjectList from "@/components/ProjectList";
import { Button, SectionHeading } from "@/components/ui";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Embedded power, gas processing and estate-scale power projects across Nigeria.",
};

const glance = [
  { value: "5", label: "Projects in portfolio" },
  { value: "100", unit: " MMSCFD", label: "Gas processing capacity" },
  { value: "[MW]", label: "Combined generation capacity" },
  { value: "3", label: "Residential estate IPPs" },
];

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        active="projects"
        eyebrow="Projects"
        title="Building Nigeria's energy future, project by project."
        intro="Embedded power, gas infrastructure and resilient energy delivery for industrial and residential demand clusters."
        image={images.refineryNight}
        mobileImagePosition="60% center"
      />

      <section aria-label="Portfolio at a glance" className="pt-6 md:pt-10">
        <dl className="m-0 grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {glance.map((g, i) => (
            <div
              key={g.label}
              className={`flex flex-col-reverse gap-1 p-5 md:gap-1.5 md:px-[clamp(24px,4vw,64px)] md:py-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="text-xs text-muted md:text-[13px]">{g.label}</dt>
              <dd className="m-0 font-wide text-[32px] font-extrabold leading-none md:text-[44px]">
                {g.value}
                {g.unit && <span className="text-[13px] md:text-lg">{g.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="px-gutter flex flex-col gap-5 py-14 md:gap-10 md:py-[120px]">
        <SectionHeading eyebrow="Selected developments" title="Strategic assets, long-term impact." />
        <ProjectList />
      </section>

      <section className="px-gutter flex flex-col gap-4 bg-ink py-14 text-white md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8 md:py-28">
        <SectionHeading eyebrow="Develop with us" title="Have a demand cluster that needs reliable power?" tone="light" className="md:flex-[1_1_600px]" />
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
          <Button href="/contact" variant="light">
            Discuss a project
          </Button>
          <Button href="/investors" variant="outline-light">
            Invest in the portfolio
          </Button>
        </div>
      </section>
      <div className="h-2.5 md:h-4" />
      <SiteFooter />
    </main>
  );
}
