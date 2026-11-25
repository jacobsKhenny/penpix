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
import clairePhoto from "../assets/client-claire.jpg.asset.json";
import richardPhoto from "../assets/client-richard.jpg.asset.json";

const TRANSFORMATIONS = [
  { name: "Andy", before: andyBefore.url, after: andyAfter.url },
  { name: "Joanne", before: joanneBefore.url, after: joanneAfter.url },
  { name: "Marian", before: marianBefore.url, after: marianAfter.url },
];
const TESTIMONIALS = [
  { author: "Claire", url: testimonialClaire.url }, { author: "Dina", url: testimonialDina.url },
  { author: "Toyin", url: testimonialToyin.url }, { author: "Raj", url: testimonialRaj.url },
  { author: "Richard", url: testimonialRichard.url }, { author: "Olayinka", url: testimonialOlayinka.url }, { author: "Abi", url: testimonialAbi.url },
];
export function ClientPhotos() {
  return <div className="mt-5 flex flex-wrap gap-6">{[{ name: "Claire", url: clairePhoto.url }, { name: "Richard", url: richardPhoto.url }].map(client => <figure key={client.name}><img src={client.url} alt={client.name} loading="lazy" className="h-20 w-20 rounded-full object-cover" /><figcaption className="mt-2 text-center text-base">{client.name}</figcaption></figure>)}</div>;
}
export function WorkSamples() {
  return <section className="border-t border-border/70 py-20"><div className="mx-auto max-w-5xl px-6"><h2 className="font-display text-3xl sm:text-4xl">LinkedIn transformations</h2>
    <div className="mt-10 space-y-10">{TRANSFORMATIONS.map(item => <article key={item.name}><h3 className="font-display mb-4 text-xl">{item.name}</h3><div className="grid grid-cols-2 gap-3 sm:gap-6">{[{ label: "Before", url: item.before }, { label: "After", url: item.after }].map(image => <figure key={image.label}><figcaption className="mb-2 text-base font-semibold text-primary">{image.label}</figcaption><a href={image.url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} LinkedIn ${image.label}, full image`}><img src={image.url} alt={`${item.name} LinkedIn ${image.label}`} loading="lazy" className="aspect-[3/4] w-full rounded-lg border border-border object-cover object-top" /></a></figure>)}</div></article>)}</div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">{[{ name: "Authority Author LinkedIn Profile", url: showcase1.url }, { name: "Advisory & Tax Planning LinkedIn Profile", url: showcase2.url }].map(item => <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer"><img src={item.url} alt={item.name} loading="lazy" className="aspect-[4/5] w-full rounded-lg border border-border object-cover object-top" /></a>)}</div>
  </div></section>;
}
export function TestimonialGallery() {
  return <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{TESTIMONIALS.map(card => <figure key={card.author} className="overflow-hidden rounded-lg border border-surface-light-border"><a href={card.url} target="_blank" rel="noopener noreferrer"><img src={card.url} alt={`Client review from ${card.author}`} loading="lazy" className="h-auto w-full" /></a><figcaption className="px-4 py-3 text-base font-semibold text-surface-light-muted">{card.author}</figcaption></figure>)}</div>;
}
