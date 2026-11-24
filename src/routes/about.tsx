import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PenPixel Digital Press" },
      {
        name: "description",
        content:
          "Based in Leicester, UK. PenPixel Digital Press helps business owners and professionals across the UK and beyond build lasting authority.",
      },
      { property: "og:title", content: "About — PenPixel Digital Press" },
      {
        property: "og:description",
        content:
          "Based in Leicester, UK. PenPixel Digital Press helps business owners and professionals build lasting authority.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">
        About PenPixel Digital Press
      </p>
      <h1 className="font-display mt-3 text-4xl leading-[1.06] text-foreground sm:text-6xl">
        Pixel for growth. Pen for authority.
      </h1>

      <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          Founded by <span className="font-semibold text-foreground">Aanu Clement David-Olawade</span>{" "}
          and based in Leicester, United Kingdom, PenPixel Digital Press works with business owners,
          consultants, and professionals across the UK and internationally.
        </p>
        <p>
          Even when you&apos;re busy delivering for clients, your online presence is quietly telling
          people who you are. An outdated photograph, a bare job title, and no clear way to reach
          you costs opportunities every week.
        </p>
        <p>
          We combine strategic digital positioning (Pixel) with ghostwriting and book publishing
          (Pen) so your expertise is unmistakable—and sounds completely like you.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <Link to="/services" className="btn-pill-primary">
          Explore services
        </Link>
        <Link to="/contact" className="btn-pill-secondary">
          Get in touch
        </Link>
      </div>
    </div>
  );
}