import { Link, createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { WorkSamples } from "../components/work-samples";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PenPixel Digital Press" },
      {
        name: "description",
        content:
          "Pixel for growth and visibility. Pen for writing and authority. Explore our LinkedIn, social media, ghostwriting, and book publishing services.",
      },
      { property: "og:title", content: "Services — PenPixel Digital Press" },
      {
        property: "og:description",
        content:
          "Pixel for growth and visibility. Pen for writing and authority.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const PIXEL_ITEMS = [
  "LinkedIn profile optimisation and full visual refresh",
  "Ongoing LinkedIn content and management",
  "Clear professional positioning so ideal clients recognise you",
  "Facebook and Instagram support for consistent visibility",
];

const PEN_ITEMS = [
  "End-to-end ghostwriting in your authentic voice",
  "Book writing and manuscript development",
  "Proofreading, structural editing, and formatting",
  "Interior design, cover design, and full publishing support",
];

function ServicesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <h1 className="font-display max-w-3xl text-4xl leading-[1.06] text-foreground sm:text-6xl">
        Two ways to make your expertise go further.
      </h1>
      <p className="mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
        Whether you need a sharper online presence or a published book that cements your authority,
        we handle the heavy lifting from start to finish.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <section id="pixel" className="rounded-xl border border-border bg-card p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Pixel · Growth &amp; visibility
            </p>
            <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">
              Get found by the right clients.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Most business owners are brilliant at what they do, but their profiles don&apos;t show
              it. We turn your online presence into a clear, trustworthy shop window.
            </p>
            <ul className="mt-6 space-y-3">
              {PIXEL_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn-pill-primary">
              Enquire about Pixel
            </Link>
          </div>
        </section>

        <section id="pen" className="rounded-xl border border-border bg-card p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Pen · Writing &amp; authority
            </p>
            <h2 className="font-display mt-3 text-2xl text-foreground sm:text-3xl">
              Turn your expertise into a book.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A published book positions you as the go-to authority in your field without you having
              to spend months staring at a blank page.
            </p>
            <ul className="mt-6 space-y-3">
              {PEN_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn-pill-secondary">
              Enquire about Pen
            </Link>
          </div>
        </section>
      </div>

      <div className="mt-16">
        <WorkSamples />
      </div>
    </div>
  );
}