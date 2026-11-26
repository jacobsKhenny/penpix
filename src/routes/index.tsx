import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ContactActions } from "../components/contact-actions";
import { Button } from "../components/ui/button";
import { TestimonialGallery, WorkSamples, ClientPhotos } from "../components/work-samples";
import { HOME_SERVICES } from "../lib/website-content";
import aanuPhoto from "../assets/aanu-founder.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Personal Branding on LinkedIn & Social Media for Business Growth | PenPixel" },
    { name: "description", content: "We help business owners look great online and booked out with clients, even in their quiet seasons. LinkedIn profile optimisation, LinkedIn management, and Facebook and Instagram, all done for you." },
    { property: "og:title", content: "Personal Branding on LinkedIn & Social Media for Business Growth | PenPixel" },
    { property: "og:description", content: "We help business owners look great online and booked out with clients, even in their quiet seasons. LinkedIn profile optimisation, LinkedIn management, and Facebook and Instagram, all done for you." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Index,
});

const STEPS = [
  { num: "01", title: "Get in touch.", body: "Fill in the form or send us a WhatsApp." },
  { num: "02", title: "Have a quick chat.", body: "Tell us about your business and who you'd love to work with." },
  { num: "03", title: "We do the rest.", body: "We write it, set it up and keep it going. You just review and say yes." },
];

function Index() {
  return <>
    <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
      <div className="min-w-0"><h1 className="font-display text-foreground">Personal branding on LinkedIn and social media, for business owners.</h1>
      <p className="hero-lead mt-8 max-w-2xl text-muted-foreground">We sort out your LinkedIn, Facebook and Instagram, so the right people find you, trust you and get in touch. You don't lift a finger.</p>
      <ContactActions />
      </div><img src={aanuPhoto.url} alt="Aanu Clement David-Olawade, founder of PenPixel Digital Press" width={768} height={768} fetchPriority="high" className="aspect-[4/5] w-full max-w-[520px] justify-self-center rounded-md object-cover lg:justify-self-end" />
    </section>
    <section className="border-t border-border/70 bg-page-alt py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display max-w-3xl text-3xl sm:text-4xl">Your online profile is your shop window.</h2>
        <div className="mt-7 max-w-3xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>Even when you're busy with clients, it's quietly telling people who you are. Is it saying the right thing?</p>
          <p>Most business owners are brilliant at what they do, but their profiles don't show it. Then, they lose clients quietly and don't even know it.</p>
          <p>An old photograph. A job title and nothing else. No easy way to get in touch. We fix all of that.</p>
        </div>
      </div>
    </section>
    <section className="border-t border-border/70 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-3xl sm:text-4xl">What we do</h2>
        <div className="mt-10 grid gap-x-12 md:grid-cols-2">
          {HOME_SERVICES.map(service => <article key={service.name} className="border-t border-border py-8">
            <h3 className="font-display text-xl">{service.name}</h3><p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.description}</p>
          </article>)}
        </div>
        <Button asChild variant="link" className="mt-8 h-auto whitespace-normal p-0 text-base"><Link to="/services">See all our services<ArrowRight aria-hidden="true" /></Link></Button>
      </div>
    </section>
    <section className="bg-page-alt py-20 text-foreground md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-3xl text-gold" aria-label="Five stars">★★★★★</p>
        <h2 className="font-display mt-4 text-2xl sm:text-4xl">100+ books published · £500,000+ in client revenue</h2>
        <p className="mt-10 text-lg font-semibold">Trusted by:</p><ClientPhotos />
        <TestimonialGallery />
      </div>
    </section>
    <WorkSamples />
    <section className="border-t border-border/70 bg-page-alt py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-3xl sm:text-4xl">Three easy steps</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">{STEPS.map(step => <div key={step.num} className="space-y-4 border-t border-border pt-8"><span className="step-number" aria-hidden="true">{step.num}</span><h3 className="font-display text-xl">{step.title}</h3><p className="text-base leading-relaxed text-muted-foreground">{step.body}</p></div>)}</div>
      </div>
    </section>
    <section className="mx-auto max-w-5xl px-6 py-24"><h2 className="font-display max-w-3xl text-3xl sm:text-5xl">Ready to be seen by the right people and grow your business?</h2><ContactActions /></section>
  </>;
}
