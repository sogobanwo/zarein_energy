"use client";

/** Row of toggle chips. Scrolls sideways on phones, wraps on desktop. */
export default function FilterChips<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { key: T; label: string }[];
  value: T;
  onChange: (key: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] md:flex-wrap md:overflow-visible">
      {options.map((o) => {
        const on = o.key === value;
        return (
          <button
            key={o.key}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(o.key)}
            className={`min-h-11 shrink-0 whitespace-nowrap rounded-full border px-[18px] text-sm font-semibold transition-colors md:px-5 ${
              on ? "border-ink bg-ink text-white" : "border-mist text-ink hover:border-ink"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
