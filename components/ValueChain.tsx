"use client";

import { useState } from "react";
import { stages } from "@/lib/content";

/** "From wellhead to grid" — four selectable stages with a detail panel */
export default function ValueChain() {
  const [current, setCurrent] = useState(0);
  const active = stages[current];

  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-3">
        {stages.map((s, i) => {
          const on = i === current;
          return (
            <button
              key={s.num}
              type="button"
              aria-pressed={on}
              onClick={() => setCurrent(i)}
              className={`flex min-h-28 flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-colors md:min-h-[190px] md:gap-3 md:rounded-[20px] md:p-7 ${
                on ? "border-navy bg-navy" : "border-line bg-white hover:border-ink"
              }`}
            >
              <span className={`block h-[3px] rounded-full transition-all duration-500 ${on ? "w-full bg-white" : "w-7 bg-ink md:w-10"}`} />
              <span className={`eyebrow ${on ? "text-white/70" : "text-muted"}`}>{s.num}</span>
              <span className={`text-base font-extrabold uppercase leading-[1.1] md:text-2xl ${on ? "text-white" : "text-ink"}`} style={{ fontStretch: "118%" }}>
                {s.title}
              </span>
              <span className={`hidden text-sm md:block ${on ? "text-white/70" : "text-muted"}`}>{s.tag}</span>
            </button>
          );
        })}
      </div>

      <div aria-live="polite" className="flex flex-col gap-3 rounded-[20px] bg-paper p-6 md:flex-row md:flex-wrap md:gap-12 md:rounded-3xl md:p-14">
        <div className="flex flex-col gap-3 md:flex-[1_1_420px] md:gap-[18px]">
          <span className="self-start rounded-full bg-ink px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white md:px-3 md:text-[11px]">
            Stage {active.num}
            <span className="md:hidden"> · {active.tag}</span>
          </span>
          <h3 className="m-0 font-wide text-[26px] font-extrabold uppercase leading-[1.05] md:text-[44px] md:leading-[1.02]">{active.title}</h3>
          <p className="m-0 text-[15px] leading-relaxed text-body md:text-[17px] md:leading-[1.7]">{active.body}</p>
        </div>
        <dl className="m-0 flex flex-col md:flex-[1_1_320px]">
          {active.facts.map((f) => (
            <div key={f.k} className="flex justify-between gap-3 border-t border-line py-3.5 md:border-b md:border-t-0 md:py-[22px]">
              <dt className="text-[13px] text-muted md:text-sm">{f.k}</dt>
              <dd className="m-0 text-right text-[13px] font-bold md:text-[15px]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
