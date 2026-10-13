"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { flame, nav, site, type NavKey } from "@/lib/content";

export default function SiteHeader({ active }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  // Lock page scroll and allow Escape to close while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="relative z-20 m-3 flex items-center justify-between gap-4 rounded-full border border-white/20 bg-white/10 py-1.5 pl-3.5 pr-1.5 backdrop-blur-md md:m-5 md:py-2.5 md:pl-[22px] md:pr-2.5">
        <Link href="/" className="flex items-center gap-2 text-white md:gap-3" aria-label="Zarein Energy home">
          <Image src={flame} alt="" width={25} height={36} className="h-[26px] w-auto md:h-8" priority />
          <div className="flex flex-col gap-0.5">
            <span className="font-wide text-xs font-bold leading-none tracking-[0.08em] md:text-sm">ZAREIN ENERGY</span>
            <span className="text-[8px] font-medium uppercase leading-none tracking-[0.12em] text-white/60 md:text-[9px]">Powering Industrial Growth</span>
          </div>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-[30px] text-sm font-medium lg:flex">
          {nav.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={item.key === active ? "page" : undefined}
              className={`border-b-2 pb-1 transition-colors ${
                item.key === active ? "border-white font-bold text-white" : "border-transparent text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden min-h-12 items-center gap-3 rounded-full bg-ink py-0 pl-[22px] pr-1.5 text-sm font-semibold text-white md:inline-flex"
          >
            Get in touch
            <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
              →
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink lg:hidden"
          >
            <svg width="18" height="14" viewBox="0 0 18 14" aria-hidden="true">
              <path d="M1 2h16M1 7h16M1 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy p-5 text-white lg:hidden"
        >
          <Image src={flame} alt="" width={250} height={359} className="pointer-events-none absolute -bottom-[10%] -right-[30%] h-[70%] w-auto opacity-15" />
          <div className="relative flex items-center justify-between">
            <span className="flex items-center gap-2.5">
              <Image src={flame} alt="" width={20} height={28} className="h-7 w-auto" />
              <div className="flex flex-col gap-0.5">
                <span className="font-wide text-[13px] font-bold leading-none tracking-[0.08em]">ZAREIN ENERGY</span>
                <span className="text-[9px] font-medium uppercase leading-none tracking-[0.12em] text-white/60">Powering Industrial Growth</span>
              </div>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <nav aria-label="Main" className="relative mt-12 flex flex-col">
            {[{ key: "home" as NavKey, label: "Home", href: "/" }, ...nav].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={item.key === active ? "page" : undefined}
                className={`flex items-center justify-between border-b border-white/15 py-4 font-wide text-[30px] font-extrabold uppercase tracking-[-0.01em] ${
                  item.key === active ? "text-white" : "text-white/75"
                }`}
              >
                {item.label}
                <span aria-hidden="true" className="text-lg font-normal text-white/60">
                  →
                </span>
              </Link>
            ))}
          </nav>
          <div className="relative mt-auto flex flex-col gap-3 pt-10">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-[54px] items-center justify-center rounded-full bg-white text-base font-bold text-navy"
            >
              Get in touch
            </Link>
            <a href={`mailto:${site.emails.general}`} className="p-2.5 text-center text-sm text-white/75">
              {site.emails.general}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
