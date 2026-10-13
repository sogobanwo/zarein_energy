import { Button } from "./ui";

/** Closing call-to-action band used at the end of inner pages */
export default function CtaBand({
  title,
  primary,
  secondary,
}: {
  title: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <section className="px-gutter flex flex-col gap-4 py-14 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8 md:py-[120px]">
      <h2 className="m-0 font-wide text-[34px] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] md:flex-[1_1_600px] md:text-[clamp(36px,5.4vw,80px)]">
        {title}
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap">
        <Button href={primary.href}>{primary.label}</Button>
        <Button href={secondary.href} variant="outline-dark">
          {secondary.label}
        </Button>
      </div>
    </section>
  );
}
