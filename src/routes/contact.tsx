import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "../components/contact-form";
import { WhatsAppAction } from "../components/contact-actions";
import { WHATSAPP_URL } from "../lib/website-content";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact PenPixel" },
    { name: "description", content: "Contact PenPixel about personal branding, LinkedIn, social media or your book. Get a reply within one working day, or send Aanu a WhatsApp." },
    { property: "og:title", content: "Contact PenPixel" },
    { property: "og:description", content: "Contact PenPixel about personal branding, LinkedIn, social media or your book. Get a reply within one working day, or send Aanu a WhatsApp." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ContactPage,
});
function ContactPage() {
  return <div className="mx-auto max-w-5xl px-6 py-20 md:py-28"><div className="grid gap-12 md:grid-cols-12">
    <div className="space-y-5 md:col-span-5"><h1 className="font-display text-4xl sm:text-5xl">Let's have a chat.</h1><p className="text-base leading-relaxed text-muted-foreground">Fill in the form and we'll get back to you within one working day. Or send us a WhatsApp if you'd like a quicker reply.</p><WhatsAppAction /></div>
    <div className="min-w-0 md:col-span-7"><ContactForm /><div className="mt-10 space-y-3 border-t border-border pt-8 text-base text-muted-foreground"><p>Email: <a href="mailto:info@penpixeldp.com" className="text-foreground hover:text-primary">info@penpixeldp.com</a></p><p>Call or WhatsApp: <a href="tel:+447925171979" className="text-foreground hover:text-primary">+44 7925 171979</a> · <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-whatsapp underline">WhatsApp</a></p><p>Based in Leicester, working with business owners across the UK and beyond.</p></div></div>
  </div></div>;
}
