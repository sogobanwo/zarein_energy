import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import NewsList from "@/components/NewsList";
import NewsletterForm from "@/components/NewsletterForm";
import { SectionHeading } from "@/components/ui";
import { images } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Project milestones, partnership announcements and market insight from Zarein Energy.",
};

export default function NewsPage() {
  return (
    <main>
      <PageHero
        active="news"
        eyebrow="News & updates"
        title="Milestones, announcements and insight."
        intro="Project progress, partnership announcements and our perspective on Nigeria's energy market."
        image={images.refineryBw}
        imagePosition="center 30%"
        mobileImagePosition="30% center"
      />

      <section className="px-gutter flex flex-col gap-5 py-14 md:gap-10 md:py-[120px]">
        <SectionHeading eyebrow="Company bulletin" title="Latest from Zarein." />
        <NewsList />
      </section>

      <section className="px-gutter flex flex-col gap-4 bg-ink py-14 text-white md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-12 md:py-28">
        <SectionHeading eyebrow="Stay informed" title="Get updates in your inbox." tone="light" className="md:flex-[1_1_520px]" />
        <NewsletterForm />
      </section>
      <div className="h-2.5 md:h-4" />
      <SiteFooter />
    </main>
  );
}
