import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PartnerMarquee from "@/components/PartnerMarquee";
import ValueChain from "@/components/ValueChain";
import { Button, DarkStat, OnlyDesktop, OnlyMobile, SectionHeading, StripeBar } from "@/components/ui";
import { flame, homeInsights, images, keyFacts, projects, site } from "@/lib/content";

const statement = "font-wide text-[40px] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] md:text-[clamp(40px,8vw,128px)]";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      {/* ───────── Hero ───────── */}
      <section className="p-2.5 md:p-4">
        <div className="relative flex min-h-[760px] flex-col overflow-hidden rounded-3xl bg-navy text-white md:min-h-[820px] md:rounded-[28px]">
          <Image
            src={images.homeHero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] md:object-[center_60%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,38,0.6)_0%,rgba(7,22,38,0.2)_38%,rgba(7,22,38,0.9)_100%)] md:bg-[linear-gradient(180deg,rgba(7,22,38,0.55)_0%,rgba(7,22,38,0.35)_40%,rgba(7,22,38,0.85)_100%)]" />
          <Image
            src={flame}
            alt=""
            width={250}
            height={359}
            priority
            className="pointer-events-none absolute -right-[30%] top-[6%] h-[70%] w-auto opacity-20 md:-right-[6%] md:h-[118%]"
          />

          <SiteHeader active="home" />

          <div className="animate-rise relative z-10 px-5 pt-7 md:px-8 md:pt-10">
            <div className="font-wide text-[64px] font-extrabold leading-[0.85] tracking-[-0.04em] md:text-[clamp(72px,15.5vw,236px)] md:tracking-[-0.03em]">
              ZAREIN
            </div>
            <StripeBar size="md" className="mt-3.5 md:mt-[18px]" />
          </div>

          <div className="relative z-10 mt-auto flex flex-col gap-4 px-5 pb-6 pt-12 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8 md:px-8 md:pb-14">
            <div className="flex max-w-[640px] flex-col gap-4 md:gap-5">
              <p className="order-2 m-0 max-w-[420px] text-[15px] leading-relaxed text-white/85 md:order-1 md:text-white/80">
                An independent Nigerian energy company turning gas into dependable power for industry, estates and distribution networks.
              </p>
              <h1 className="order-1 m-0 font-wide text-[40px] font-bold uppercase leading-[0.98] tracking-[-0.02em] md:order-2 md:text-[clamp(40px,5.4vw,76px)]">
                From wellhead
                <br />
                to grid.
              </h1>
              <div className="order-3 mt-1 flex flex-col gap-2.5 md:mt-2 md:flex-row md:flex-wrap md:gap-3">
                <Button href="/projects" variant="light">
                  Explore our projects
                </Button>
                <Button href="/investors" variant="outline-light">
                  Investor relations
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Key partner facts ───────── */}
      <section aria-label="Key facts" className="pb-2 pt-6 md:pb-14 md:pt-10">
        <dl className="m-0 grid grid-cols-2 border-y border-line lg:grid-cols-4">
          {keyFacts.map((f, i) => (
            <div
              key={f.label}
              className={`flex flex-col gap-1 p-5 md:gap-1.5 md:px-[clamp(24px,4vw,64px)] md:py-8 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted md:text-xs">{f.label}</dt>
              <dd className="m-0 font-semiwide text-[17px] font-bold md:text-[22px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ───────── Statement ───────── */}
      <section id="about" className="px-gutter flex flex-col items-center gap-2.5 overflow-hidden pb-16 pt-16 text-center md:gap-5 md:pb-[120px] md:pt-[72px]">
        <div className="relative inline-flex gap-2.5 items-center">
          <span className={`${statement} whitespace-nowrap`}>Reliable power </span>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-5">
          <span className={statement}>for</span>
          <span className="inline-flex h-12 w-[104px] items-center justify-center rounded-full bg-navy md:h-[clamp(56px,7.5vw,112px)] md:w-[clamp(120px,17vw,260px)]">
            <Image src={flame} alt="" width={50} height={72} className="h-[72%] w-auto" />
          </span>
          <span className={`${statement} hidden md:inline`}>Nigerian</span>
        </div>
        <span className={`${statement} md:hidden`}>Nigerian</span>
        <div className="relative inline-flex items-center">
          <span className={`${statement} whitespace-nowrap`}>industry</span>
        </div>
        <p className="m-0 mt-4 max-w-[680px] text-base leading-relaxed text-body [text-wrap:balance] md:mt-6 md:text-lg md:leading-[1.7]">
          We develop and operate the full gas-to-power chain: securing supply, processing gas and generating embedded power close to the people who use it.
        </p>
      </section>

      <PartnerMarquee />

      {/* ───────── Value chain ───────── */}
      <section id="chain" className="px-gutter flex flex-col gap-6 bg-white py-16 md:gap-12 md:py-[120px]">
        <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-6">
          <SectionHeading eyebrow="What we do" title="One integrated chain." className="max-w-[760px]" />
          <p className="m-0 max-w-[360px] text-sm leading-relaxed text-muted md:text-[15px]">
            Select a stage to follow the energy from the wellhead to the customer.
          </p>
        </div>
        <ValueChain />
      </section>

      {/* ───────── Projects ───────── */}
      <section id="projects" className="px-gutter flex flex-col gap-6 py-16 md:gap-12 md:py-[120px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Flagship projects" title="Assets in the ground." />
          <OnlyDesktop>
            <Button href="/projects" variant="outline-dark">
              View all projects →
            </Button>
          </OnlyDesktop>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:gap-5">
          {featured.map((p) => (
            <Link key={p.slug} href={`/projects#${p.slug}`} className="lift flex flex-col overflow-hidden rounded-[20px] bg-white md:rounded-3xl">
              <div className="relative h-[210px] overflow-hidden border-b-[5px] border-mist bg-navy md:h-[300px] md:border-b-[6px]">
                <Image src={p.image} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="lift-img object-cover" />
              </div>
              <div className="flex flex-grow flex-col gap-2.5 p-5 md:gap-3 md:p-7">
                <span className="eyebrow text-muted">{p.kindLabel}</span>
                <h3 className="m-0 text-[21px] font-extrabold uppercase leading-[1.1] md:text-[26px]" style={{ fontStretch: "118%" }}>
                  {p.shortName}
                </h3>
                <p className="m-0 text-sm leading-relaxed text-body md:text-[15px]">{p.body}</p>
                <dl className="m-0 mt-auto grid grid-cols-3 gap-2 border-t border-hairline pt-3.5 md:gap-3 md:pt-[18px]">
                  {[
                    ["Capacity", p.capacity],
                    ["Location", p.location],
                    ["Status", p.status],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-1">
                      <dt className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted md:text-[11px]">{k}</dt>
                      <dd className="m-0 text-[13px] font-bold md:text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Link>
          ))}
        </div>
        <OnlyMobile>
          <Button href="/projects" variant="outline-dark">
            View all projects →
          </Button>
        </OnlyMobile>
      </section>

      {/* ───────── Investors ───────── */}
      <section id="investors" className="px-gutter relative isolate flex flex-col gap-5 overflow-hidden bg-ink py-16 text-white md:flex-row md:flex-wrap md:items-center md:gap-16 md:py-[120px]">
        <Image
          src={flame}
          alt=""
          width={250}
          height={359}
          className="pointer-events-none absolute -right-[35%] -top-[6%] -z-10 h-[60%] w-auto opacity-[0.12] md:-bottom-[35%] md:-left-[6%] md:right-auto md:top-auto md:h-[150%]"
        />
        <div className="flex flex-col gap-5 md:flex-[1_1_480px] md:gap-[22px]">
          <SectionHeading eyebrow="Investor relations" title="Infrastructure-backed opportunities." tone="light" />
          <p className="m-0 max-w-[560px] text-[15px] leading-relaxed text-white/80 md:text-[17px] md:leading-[1.7]">
            Contracted offtake, proven German engine technology and estate-scale demand partners, structured for long-term returns.
          </p>
          <div className="hidden flex-wrap items-center gap-3 md:flex">
            <Button href="/investors" variant="light">
              Explore opportunities
            </Button>
            <a href={`mailto:${site.emails.invest}`} className="px-2 text-[15px] font-semibold underline underline-offset-4">
              {site.emails.invest}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 md:flex-[1_1_480px] md:gap-3">
          <DarkStat index={0} value="3" label="Flagship projects" />
          <DarkStat index={1} value={<>100<span className="text-xs md:text-base"> MMSCFD</span></>} label="Processing capacity" />
          <DarkStat index={2} value="[MW]" label="Generation capacity" />
          <DarkStat index={3} value="[YRS]" label="Contracted offtake term" />
        </div>
        <div className="flex flex-col gap-2 md:hidden">
          <Button href="/investors" variant="light">
            Explore opportunities
          </Button>
          <a href={`mailto:${site.emails.invest}`} className="p-1.5 text-center text-sm font-semibold underline underline-offset-4">
            {site.emails.invest}
          </a>
        </div>
      </section>

      {/* ───────── Insights ───────── */}
      <section id="insights" className="px-gutter flex flex-col gap-5 py-16 md:gap-12 md:py-[120px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Insights & updates" title="Latest from Zarein." />
          <OnlyDesktop>
            <Button href="/news" variant="outline-dark">
              All insights →
            </Button>
          </OnlyDesktop>
        </div>
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-5">
          {homeInsights.map((n) => (
            <Link key={n.title} href="/news" className="lift flex flex-col gap-3 rounded-[20px] bg-white p-[22px] md:min-h-[260px] md:gap-3.5 md:rounded-3xl md:p-8">
              <span className="self-start rounded-full bg-ink px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white md:px-3 md:text-[11px]">
                {n.type}
              </span>
              <span className="text-[19px] font-bold leading-[1.25] md:text-2xl" style={{ fontStretch: "110%" }}>
                {n.title}
              </span>
              <span className="mt-auto flex justify-between text-xs text-muted md:text-[13px]">
                <span>{n.date}</span>
                <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
