import { createFileRoute } from "@tanstack/react-router";
import { ContactActions } from "../components/contact-actions";
import { SETUP_SERVICES, MANAGEMENT_SERVICES } from "../lib/website-content";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "LinkedIn & Social Media for Business Owners | PenPixel" },
    { name: "description", content: "Done-for-you LinkedIn profile optimisation, company pages, monthly social media management, and book writing and publishing for business owners." },
    { property: "og:title", content: "LinkedIn & Social Media for Business Owners | PenPixel" },
    { property: "og:description", content: "Done-for-you LinkedIn profile optimisation, company pages, monthly social media management, and book writing and publishing for business owners." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ServicesPage,
});

function Packages({ items }: { items: { name: string; package: string; description: string; label?: string }[] }) {
  return <div className="mt-10 grid gap-6 md:grid-cols-2">{items.map(item => <article key={item.name} className="rounded-lg border border-border bg-card p-6">
    {item.label && <p className="mb-3 text-base font-semibold text-primary">{item.label}</p>}
    <h3 className="font-display text-xl">{item.name}</h3><p className="mt-2 text-base text-primary">{item.package}</p><p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.description}</p>
  </article>)}</div>;
}
function ServicesPage() {
  return <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
    <h1 className="font-display max-w-3xl text-4xl leading-[1.06] sm:text-6xl">How we can help you</h1>
    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Everything we do is done for you. Pick what you need, or tell us what you're hoping for and we'll point you in the right direction.</p>
    <section className="mt-16 border-t border-border pt-12"><h2 className="font-display text-3xl sm:text-4xl">Get set up properly</h2><p className="mt-5 text-lg text-primary">A one-off optimisation.</p><p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">We write it with the words your clients search for, make it look professional, sort out your designs, and set the profile all up for you.</p><Packages items={SETUP_SERVICES} /></section>
    <section className="mt-16 border-t border-border pt-12"><h2 className="font-display text-3xl sm:text-4xl">Stay visible every month</h2><p className="mt-5 text-lg text-primary">Management.</p><p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">We plan your posts, write them, post them, reply to comments and send you a simple report each month with trackable results.</p><Packages items={MANAGEMENT_SERVICES} /><p className="mt-6 text-base leading-relaxed text-muted-foreground">Ready to reach even more people? Once your pages are up and running, we can run ads for you too.</p></section>
    <section className="mt-16 border-t border-border pt-12"><h2 className="font-display text-3xl sm:text-4xl">Book Writing and Publishing</h2><p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">A book makes you the go-to expert in your field. We write it in your voice, edit it and publish it worldwide. Already written one? We can edit and publish it for you.</p></section>
    <section className="mt-16 border-t border-border pt-12"><p className="max-w-3xl text-lg leading-relaxed">Not sure which one is right for you? Just send us a message. We'll recommend the best option tailored to your goals.</p><ContactActions /></section>
  </div>;
}
