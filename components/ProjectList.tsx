"use client";

import Image from "next/image";
import { useState } from "react";
import FilterChips from "./FilterChips";
import { projects, type ProjectKind } from "@/lib/content";

type Filter = ProjectKind | "all";

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All projects" },
  { key: "embedded", label: "Embedded power" },
  { key: "gas", label: "Gas infrastructure" },
  { key: "estate", label: "Estate power" },
];

export default function ProjectList() {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = filter === "all" ? projects : projects.filter((p) => p.kind === filter);

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <FilterChips label="Filter projects" options={filters} value={filter} onChange={setFilter} />
      <div className="flex flex-col gap-4 md:gap-5">
        {shown.map((p) => {
          const num = String(projects.indexOf(p) + 1).padStart(2, "0");
          return (
            <article key={p.slug} id={p.slug} className="flex flex-col overflow-hidden rounded-[20px] bg-white md:flex-row md:flex-wrap md:rounded-3xl">
              <div className="relative h-[220px] bg-navy md:h-auto md:min-h-[360px] md:flex-[1_1_480px]">
                <Image src={p.image} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,38,0.55)_0%,rgba(7,22,38,0)_45%)]" />
                <span className="absolute left-4 top-3 font-wide text-[40px] font-extrabold leading-none text-white md:left-6 md:top-6 md:text-7xl">{num}</span>
              </div>
              <div className="flex flex-col gap-2.5 p-5 md:flex-[1_1_520px] md:gap-4 md:p-10">
                <span className="self-start rounded-full bg-ink px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white md:px-3 md:text-[11px]">
                  {p.kindLabel}
                </span>
                <h3 className="m-0 text-[21px] font-extrabold uppercase leading-[1.1] md:text-[clamp(26px,2.6vw,36px)] md:leading-[1.05]" style={{ fontStretch: "122%" }}>
                  {p.name}
                </h3>
                <p className="m-0 max-w-[560px] text-sm leading-relaxed text-body md:text-base md:leading-[1.7]">{p.body}</p>
                <dl className="m-0 mt-auto grid grid-cols-2 gap-3 border-t border-hairline pt-3.5 md:grid-cols-4 md:gap-4 md:pt-5">
                  {[
                    ["Capacity", p.capacity],
                    ["Location", p.location],
                    ["Status", p.status],
                    ["Partner", p.partner],
                  ].map(([k, v]) => (
                    <div key={k} className="flex flex-col gap-1">
                      <dt className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted md:text-[11px]">{k}</dt>
                      <dd className="m-0 text-[13px] font-bold md:text-sm">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
