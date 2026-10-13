import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui";
import { images } from "@/lib/content";

export default function NotFound() {
  return (
    <main>
      <PageHero
        active="home"
        eyebrow="Error 404"
        title="This page is off the grid."
        intro="The page you were looking for has moved or no longer exists."
        image={images.refineryBw}
      />
      <section className="px-gutter flex flex-col gap-3 py-14 md:flex-row md:py-24">
        <Button href="/">Back to home</Button>
        <Button href="/contact" variant="outline-dark">
          Contact us
        </Button>
      </section>
      <SiteFooter />
    </main>
  );
}
