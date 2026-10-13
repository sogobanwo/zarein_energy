import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui";
import { flame, site } from "@/lib/content";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/about#team" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "News", href: "/news" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Technology & Partners", href: "/partners" },
      { label: "Investors", href: "/investors" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  const linkCls = "text-white/70 transition-colors hover:text-white";
  return (
    <footer className="px-2.5 pb-2.5 md:px-4 md:pb-4">
      <div className="relative isolate overflow-hidden rounded-3xl bg-navy text-white md:rounded-[28px]">
        <Image
          src={flame}
          alt=""
          width={250}
          height={359}
          className="pointer-events-none absolute -right-[30%] -top-[4%] -z-10 h-[40%] w-auto opacity-15 md:-right-[4%] md:-top-[10%] md:h-[90%]"
        />
        {/* On desktop this column shrinks to the width of the ZAREIN wordmark, so links line up with its edges */}
        <div className="mx-auto flex max-w-full flex-col md:w-fit md:px-4">
          <div className="flex flex-col gap-7 px-5 pb-7 pt-10 md:w-0 md:min-w-full md:flex-row md:flex-wrap md:justify-between md:gap-12 md:px-0 md:pb-14 md:pt-[72px]">
            <div className="flex flex-col gap-4 md:max-w-[400px] md:flex-[1_1_320px] md:gap-5">
              <Image src={flame} alt="Zarein Energy" width={33} height={48} className="h-[42px] w-auto self-start md:h-12" />
              <p className="m-0 text-sm leading-relaxed text-white/80 md:text-[15px]">
                Dependable gas-to-power infrastructure for Nigerian industry, estates and distribution networks.
              </p>
              <Button href="/contact" variant="light" arrow className="md:self-start">
                Start a conversation
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-7 text-sm md:flex-[2_1_600px] md:grid-cols-4 md:gap-8">
              {columns.map((col) => (
                <div key={col.title} className="flex flex-col gap-3 md:gap-3.5">
                  <span className="font-bold">{col.title}</span>
                  {col.links.map((l) => (
                    <Link key={l.label} href={l.href} className={linkCls}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex flex-col gap-3 md:gap-3.5">
                <span className="font-bold">Get in touch</span>
                <a href={`mailto:${site.emails.general}`} className={`${linkCls} whitespace-nowrap text-[13px] md:text-sm`}>
                  {site.emails.general}
                </a>
                <a href={`mailto:${site.emails.invest}`} className={`${linkCls} whitespace-nowrap text-[13px] md:text-sm`}>
                  {site.emails.invest}
                </a>
                <span className="text-white/70">{site.city}</span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3.5">
                <span className="font-bold">Follow us</span>
                {site.social.map((s) => (
                  <a key={s.label} href={s.href} className={linkCls}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="whitespace-nowrap px-5 font-wide text-[17vw] font-extrabold leading-[0.78] tracking-[-0.05em] md:px-0 md:text-[clamp(80px,20vw,320px)]"
          >
            ZAREIN
          </div>

          <div className="flex flex-col gap-1.5 px-5 py-5 text-xs text-white/65 md:w-0 md:min-w-full md:flex-row md:flex-wrap md:justify-between md:gap-3 md:px-0 md:py-7 md:text-[13px]">
            <span>
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </span>
            <span>Privacy · Terms</span>
          </div>
        </div>
        <div className="flex h-2 md:h-2.5" aria-hidden="true">
          <span className="flex-1 bg-white" />
          <span className="flex-1 bg-white/60" />
          <span className="flex-1 bg-white/30" />
        </div>
      </div>
    </footer>
  );
}
