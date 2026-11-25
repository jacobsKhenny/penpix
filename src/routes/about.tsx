import { createFileRoute } from "@tanstack/react-router";
import { ContactActions } from "../components/contact-actions";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About PenPixel | Aanu Clement David-Olawade" },
    { name: "description", content: "Meet Aanu Clement David-Olawade, founder of PenPixel, a personal branding agency for business owners based in Leicester." },
    { property: "og:title", content: "About PenPixel | Aanu Clement David-Olawade" },
    { property: "og:description", content: "Meet Aanu Clement David-Olawade, founder of PenPixel, a personal branding agency for business owners based in Leicester." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: AboutPage,
});

function AboutPage() {
  return <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
    <h1 className="font-display text-4xl leading-[1.06] sm:text-6xl">Hi, I'm Aanu.</h1>
    <div className="mt-10 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
      <p>I'm the founder of PenPixel, a personal branding agency for business owners, based in Leicester.</p>
      <p>Most of the business owners I meet are brilliant at what they do. They're just too busy serving their clients to keep their LinkedIn and social media up-to-date. That's what we do for them.</p>
      <p>I'm a registered nurse, a wife and a mum of two. So I know exactly what it's like to be busy, and I know that busy people need things done properly the first time. That's why we have a clear process and a small, dedicated team. You'll always know what's happening, when it's happening and who to speak to.</p>
      <p>I'm also an introvert, and I've still built a community of over 40,000 people on LinkedIn. So I know you don't need to be loud to be seen. You need to be clear, consistent and easy to trust.</p>
      <p>Alongside LinkedIn and social media, we've helped publish more than 100 books worldwide. A book is one of the best personal branding tools you can have.</p>
      <p>I also speak at events about personal branding for business owners and professionals.</p>
      <p>If you'd like a hand looking your best online, I'd love to hear from you.</p>
    </div><ContactActions />
  </div>;
}
