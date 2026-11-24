import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/contact-form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PenPixel Digital Press" },
      {
        name: "description",
        content:
          "Get in touch with PenPixel Digital Press by form, email, or WhatsApp. Based in Leicester, United Kingdom.",
      },
      { property: "og:title", content: "Contact — PenPixel Digital Press" },
      {
        property: "og:description",
        content: "Get in touch with PenPixel Digital Press by form, email, or WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-5">
          <h1 className="font-display text-4xl text-foreground sm:text-5xl">Get in touch</h1>
          <p className="text-base text-muted-foreground">
            <span className="font-semibold text-primary">Don&apos;t be shy</span> — tell us what
            you&apos;re working on and we&apos;ll reply personally.
          </p>
          <div className="space-y-2 pt-2 text-sm text-muted-foreground">
            <p>
              Email:{" "}
              <a href="mailto:info@penpixeldp.com" className="text-foreground hover:text-primary">
                info@penpixeldp.com
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/447925171979"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                +44 7925 171979
              </a>
            </p>
            <p>Leicester, United Kingdom</p>
          </div>
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}