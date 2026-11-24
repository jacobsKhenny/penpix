import { Expand, X } from "lucide-react";
import { useEffect, useState } from "react";
import andyAfter from "../assets/linkedin-andy-after.png.asset.json";
import andyBefore from "../assets/linkedin-andy-before.png.asset.json";
import joanneAfter from "../assets/linkedin-joanne-after.png.asset.json";
import joanneBefore from "../assets/linkedin-joanne-before.png.asset.json";
import marianAfter from "../assets/linkedin-marian-after.png.asset.json";
import marianBefore from "../assets/linkedin-marian-before.png.asset.json";
import showcase1 from "../assets/linkedin-showcase-1.jpeg.asset.json";
import showcase2 from "../assets/linkedin-showcase-2.jpeg.asset.json";
import testimonialAbi from "../assets/testimonial-abi.jpeg.asset.json";
import testimonialClaire from "../assets/testimonial-claire.jpeg.asset.json";
import testimonialDina from "../assets/testimonial-dina.jpeg.asset.json";
import testimonialOlayinka from "../assets/testimonial-olayinka.jpeg.asset.json";
import testimonialRaj from "../assets/testimonial-raj.jpeg.asset.json";
import testimonialRichard from "../assets/testimonial-richard.jpeg.asset.json";
import testimonialToyin from "../assets/testimonial-toyin.jpeg.asset.json";

const TRANSFORMATIONS = [
  { name: "Andy", before: andyBefore.url, after: andyAfter.url },
  { name: "Joanne", before: joanneBefore.url, after: joanneAfter.url },
  { name: "Marian", before: marianBefore.url, after: marianAfter.url },
];

const SHOWCASES = [
  { title: "Authority Author LinkedIn Profile", url: showcase1.url },
  { title: "Advisory & Tax Planning LinkedIn Profile", url: showcase2.url },
];

const TESTIMONIAL_CARDS = [
  { author: "Claire T.", location: "US", url: testimonialClaire.url },
  { author: "Dina P.", location: "United Kingdom", url: testimonialDina.url },
  { author: "Mrs Toyin I.", location: "United Kingdom", url: testimonialToyin.url },
  { author: "Raj P.", location: "US", url: testimonialRaj.url },
  { author: "Richard W.", location: "United Kingdom", url: testimonialRichard.url },
  { author: "Olayinka A.", location: "Ireland", url: testimonialOlayinka.url },
  { author: "Abi A.", location: "United Kingdom", url: testimonialAbi.url },
];

function Lightbox({
  image,
  onClose,
}: {
  image: { url: string; alt: string } | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [image, onClose]);

  if (!image) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="fixed top-5 right-5 rounded-full border border-border bg-card p-2 text-foreground hover:border-primary"
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={image.url}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] rounded-lg border border-border object-contain shadow-2xl"
      />
    </div>
  );
}

function TransformationCard({
  item,
  onZoom,
}: {
  item: (typeof TRANSFORMATIONS)[number];
  onZoom: (img: { url: string; alt: string }) => void;
}) {
  const [view, setView] = useState<"after" | "before">("after");
  const currentUrl = view === "after" ? item.after : item.before;
  const label = `${item.name} LinkedIn ${view}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-display text-base text-foreground">{item.name}</span>
        <div className="inline-flex rounded-full border border-border bg-background p-0.5 text-xs">
          <button
            type="button"
            onClick={() => setView("before")}
            className={`rounded-full px-2.5 py-0.5 font-medium transition-colors ${
              view === "before" ? "bg-secondary text-secondary-foreground" : "text-muted-foreground"
            }`}
          >
            Before
          </button>
          <button
            type="button"
            onClick={() => setView("after")}
            className={`rounded-full px-2.5 py-0.5 font-medium transition-colors ${
              view === "after" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            After
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={() => onZoom({ url: currentUrl, alt: label })}
        className="group relative aspect-[3/4] w-full overflow-hidden bg-muted text-left"
        aria-label={`View ${label} full size`}
      >
        <img src={currentUrl} alt={label} loading="lazy" className="h-full w-full object-cover object-top" />
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground opacity-90 transition-opacity group-hover:opacity-100">
          <Expand className="h-3 w-3" />
          Zoom
        </span>
      </button>
    </div>
  );
}

export function WorkSamples() {
  const [zoomed, setZoomed] = useState<{ url: string; alt: string } | null>(null);

  return (
    <section id="work" className="border-t border-border/70 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            LinkedIn transformations
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Toggle between Before and After to see how we turn overlooked profiles into clear,
            client-ready shop windows.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRANSFORMATIONS.map((item) => (
            <TransformationCard key={item.name} item={item} onZoom={setZoomed} />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {SHOWCASES.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setZoomed({ url: item.url, alt: item.title })}
              className="group relative overflow-hidden rounded-xl border border-border bg-card text-left"
            >
              <img
                src={item.url}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-medium text-foreground">
                <Expand className="h-3 w-3" />
                View full sample
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox image={zoomed} onClose={() => setZoomed(null)} />
    </section>
  );
}

export function TestimonialGallery() {
  const [zoomed, setZoomed] = useState<{ url: string; alt: string } | null>(null);

  return (
    <>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIAL_CARDS.map((card) => (
          <button
            key={card.author}
            type="button"
            onClick={() => setZoomed({ url: card.url, alt: `Client review from ${card.author}` })}
            className="group overflow-hidden rounded-xl border border-surface-light-border bg-surface-light text-left shadow-xs transition-shadow hover:shadow-md"
          >
            <img
              src={card.url}
              alt={`Client review from ${card.author} (${card.location})`}
              loading="lazy"
              className="aspect-[5/6] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="flex items-center justify-between px-4 py-3 text-xs font-semibold uppercase tracking-wider text-surface-light-muted">
              <span>
                {card.author} · {card.location}
              </span>
              <Expand className="h-3.5 w-3.5" />
            </div>
          </button>
        ))}
      </div>
      <Lightbox image={zoomed} onClose={() => setZoomed(null)} />
    </>
  );
}