import Image from "next/image";
import SiteHeader from "./SiteHeader";
import { StripeBar } from "./ui";
import { flame, type NavKey } from "@/lib/content";

type Props = {
  active: NavKey;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imagePosition?: string;
  mobileImagePosition?: string;
};

/** Hero card used at the top of every inner page */
export default function PageHero({ active, eyebrow, title, intro, image, imagePosition = "center", mobileImagePosition }: Props) {
  return (
    <section className="p-2.5 md:p-4">
      <div className="relative flex min-h-[560px] flex-col overflow-hidden rounded-3xl bg-navy text-white md:min-h-[580px] md:rounded-[28px]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover md:hidden"
          style={{ objectPosition: mobileImagePosition ?? imagePosition }}
        />
        <Image src={image} alt="" fill priority sizes="100vw" className="hidden object-cover md:block" style={{ objectPosition: imagePosition }} />
        {/* Legibility scrims: vertical on phones, horizontal on desktop */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,22,38,0.55)_0%,rgba(7,22,38,0.35)_40%,rgba(7,22,38,0.92)_100%)] md:hidden" />
        <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(7,22,38,0.9)_0%,rgba(7,22,38,0.6)_55%,rgba(7,22,38,0.3)_100%)] md:block" />
        <Image
          src={flame}
          alt=""
          width={250}
          height={359}
          className="pointer-events-none absolute -right-[28%] top-[10%] h-3/4 w-auto opacity-20 md:-right-[4%] md:top-[4%] md:h-[115%]"
        />

        <SiteHeader active={active} />

        <div className="relative z-10 mt-auto flex flex-col gap-3.5 px-5 pb-7 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-10 md:px-8 md:pb-16 md:pt-14">
          <div className="flex flex-col gap-3.5 md:flex-[1_1_640px] md:gap-5">
            <span className="eyebrow text-white/75 md:text-white/70">{eyebrow}</span>
            <h1 className="m-0 max-w-[1100px] font-wide text-[28px] font-extrabold uppercase leading-[0.98] tracking-[-0.02em] md:text-[clamp(40px,6.4vw,100px)] md:leading-[0.94] md:tracking-[-0.025em]">
              {title}
            </h1>
            <StripeBar />
          </div>
          <p className="m-0 text-[15px] leading-relaxed text-white/85 md:flex-[0_1_420px] md:text-[17px] md:text-white/80">{intro}</p>
        </div>
      </div>
    </section>
  );
}
