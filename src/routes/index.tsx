import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { ContactForm } from "../components/contact-form";
import { TestimonialGallery, WorkSamples } from "../components/work-samples";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PenPixel Digital Press — Visibility, Authority & Opportunity" },
      {
        name: "description",
        content:
          "Pixel for growth. Pen for authority. LinkedIn positioning, social visibility, ghostwriting, and book publishing for business owners.",
      },
      { property: "og:title", content: "PenPixel Digital Press — Visibility, Authority & Opportunity" },
      {
        property: "og:description",
        content:
          "Pixel for growth. Pen for authority. LinkedIn positioning, social visibility, ghostwriting, and book publishing for business owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const TESTIMONIALS = [
  {
    quote:
      "Working with PenPixel Digital Press was my best business decision in recent times. My book positioned me as an authority in my field and generated over $20,000 in new consulting contracts within 6 months. The best part? I never had to write a word, yet everyone says they heard my voice while reading the book, as it sounds exactly like me.",
    author: "Claire T.",
    location: "US",
  },
  {
    quote:
      "It was an absolute pleasure working with Aanu Clement David-Olawade on the manuscript of my book, 'The Awakened Nurse.' Aanu handled the proofreading, formatting, interior design, and cover design with exceptional professionalism and creativity. Despite the tight timelines, Aanu delivered the book without compromising on quality.",
    author: "Dina P.",
    location: "United Kingdom · The Awakened Nurse",
  },
];

const STEPS = [
  { num: "01", title: "Get in touch.", body: "Fill in the form or send us a WhatsApp." },
  { num: "02", title: "Have a quick chat.", body: "Tell us about your business and who you'd love to work with." },
  { num: "03", title: "We do the rest.", body: "We write it, set it up, and keep it going. You just review and say yes." },
];

function Index() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <h1 className="font-display max-w-4xl text-4xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
          Turn your expertise into visibility, authority &amp; opportunity.
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Your online profile is your shop window.{" "}
          <span className="text-primary">Pixel for growth. Pen for authority.</span>
        </p>

        <p className="mt-3 max-w-2xl text-base text-foreground sm:text-lg">
          → We help business owners and professionals get seen by the right people—through
          strategic LinkedIn positioning and published books.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link to="/services" hash="pixel" className="btn-pill-primary">
            <Check className="h-4 w-4" />
            Pixel: Growth &amp; visibility
          </Link>
          <Link to="/services" hash="pen" className="btn-pill-secondary">
            <Check className="h-4 w-4" />
            Pen: Writing &amp; authority
          </Link>
        </div>
      </section>

      <section className="border-t border-border/70 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-center text-3xl text-foreground sm:text-4xl">
            Three easy steps
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.num} className="space-y-2">
                <span className="text-xs font-semibold tracking-widest text-primary">{step.num}</span>
                <h3 className="font-display text-xl text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              See all Pixel &amp; Pen services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <WorkSamples />

      <section className="bg-surface-light py-20 text-surface-light-foreground md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-center text-3xl sm:text-5xl">
            Kind words from our clients
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((item) => (
              <blockquote
                key={item.author}
                className="flex flex-col justify-between border-t border-surface-light-border pt-6"
              >
                <p className="text-sm leading-relaxed text-surface-light-foreground sm:text-base">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 text-xs font-semibold uppercase tracking-wider text-surface-light-muted">
                  {item.author} · {item.location}
                </footer>
              </blockquote>
            ))}
          </div>
          <TestimonialGallery />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-display text-4xl text-foreground sm:text-5xl">Get in touch</h2>
            <p className="text-base text-muted-foreground">
              <span className="font-semibold text-primary">Don&apos;t be shy</span> — talk soon.
            </p>
            <p className="text-sm text-muted-foreground">(you will get a reply from a human)</p>
            <p className="pt-2 text-sm text-muted-foreground">
              Prefer WhatsApp?{" "}
              <a
                href="https://wa.me/447925171979"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                Message +44 7925 171979 →
              </a>
            </p>
          </div>
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
