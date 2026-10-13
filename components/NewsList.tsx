"use client";

import Image from "next/image";
import { useState } from "react";
import FilterChips from "./FilterChips";
import { images, newsCategories, newsItems, type NewsCategory } from "@/lib/content";

type Filter = NewsCategory | "all";

export default function NewsList() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <FilterChips label="Filter by category" options={newsCategories} value={filter} onChange={setFilter} />

      <a href="#featured" id="featured" className="lift flex flex-col overflow-hidden rounded-[20px] bg-white md:flex-row md:flex-wrap md:rounded-3xl">
        <div className="relative h-[220px] overflow-hidden bg-navy md:h-auto md:min-h-[420px] md:flex-[1_1_560px]">
          <Image src={images.substation} alt="Electrical substation lit at dusk" fill sizes="(min-width: 768px) 55vw, 100vw" className="lift-img object-cover" />
        </div>
        <div className="flex flex-col gap-3 p-[22px] md:flex-[1_1_420px] md:gap-[18px] md:p-12">
          <span className="self-start rounded-full bg-ink px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white md:px-3 md:text-[11px]">
            Featured · Project milestone
          </span>
          <span className="text-[22px] font-extrabold uppercase leading-[1.08] md:text-[clamp(26px,2.8vw,40px)] md:leading-[1.05]" style={{ fontStretch: "122%" }}>
            [Headline: Amuwo Odofin IPP reaches commercial operation]
          </span>
          <span className="text-sm leading-relaxed text-body md:text-base md:leading-[1.7]">[Two-line summary of the story.]</span>
          <span className="mt-auto flex justify-between text-[13px] text-muted md:text-sm">
            <span>[Date]</span>
            <span className="font-bold text-ink">Read story →</span>
          </span>
        </div>
      </a>

      <ul className="m-0 grid list-none grid-cols-1 gap-3.5 p-0 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:gap-5">
        {shown.map((n) => (
          <li key={n.title}>
            <a href="#featured" className="lift flex h-full gap-3.5 rounded-[18px] bg-white p-3 md:flex-col md:gap-0 md:overflow-hidden md:rounded-3xl md:p-0">
              <div className="relative h-[104px] w-[104px] shrink-0 overflow-hidden rounded-xl bg-navy md:h-[200px] md:w-full md:rounded-none">
                <Image src={n.image} alt="" fill sizes="(min-width: 768px) 33vw, 104px" className="lift-img object-cover" />
              </div>
              <div className="flex min-w-0 flex-col gap-1.5 py-0.5 md:min-h-[200px] md:gap-3.5 md:p-7">
                <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-muted md:self-start md:rounded-full md:border md:border-ink md:px-3 md:py-1 md:text-[11px] md:text-ink">
                  {n.type}
                </span>
                <span className="text-[15px] font-bold leading-snug md:text-[21px] md:leading-[1.25]" style={{ fontStretch: "110%" }}>
                  {n.title}
                </span>
                <span className="mt-auto flex justify-between text-xs text-muted md:text-[13px]">
                  <span>{n.date}</span>
                  <span aria-hidden="true" className="hidden md:inline">
                    →
                  </span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
