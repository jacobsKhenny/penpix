import { z } from "zod";

export const WHATSAPP_MESSAGE = "Hi Aanu, I found you on your website and I'd love to know more about your services.";
export const WHATSAPP_URL = `https://wa.me/447925171979?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
export const CONTACT_EMAIL = "info@penpixeldp.com";

export const SERVICE_OPTIONS = [
  "LinkedIn Profile optimisation",
  "LinkedIn Management",
  "LinkedIn Company Page",
  "Facebook and Instagram",
  "All my social media",
  "Book Writing and Publishing",
  "I'd like your prices",
  "I'm not sure yet",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(150),
  email: z.email("Please enter a valid email address.").max(254),
  phone: z.string().trim().max(50),
  business: z.string().trim().max(200),
  service: z.enum(SERVICE_OPTIONS, { error: "Please choose what we can help you with." }),
  message: z.string().trim().max(5000),
});

export function enquirySubject(service: string) {
  return `New enquiry: ${service || "General"}`;
}

export function buildEnquiryMailto(enquiry: { name: string; email: string; phone: string; service: string; message: string }) {
  const body = [`Name: ${enquiry.name}`, `Email: ${enquiry.email}`, `Phone: ${enquiry.phone}`, `Service: ${enquiry.service}`, "", "Message:", enquiry.message.replace(/\r?\n/g, "\r\n")].join("\r\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(enquirySubject(enquiry.service))}&body=${encodeURIComponent(body)}`;
}

export function enquiryConfirmation(name: string) {
  const firstName = name.trim().split(/\s+/)[0] ?? "";
  const greeting = firstName ? `Thank you, ${firstName.charAt(0).toUpperCase()}${firstName.slice(1)}!` : "Thank you!";
  return `${greeting} We've got your message and we'll be in touch within one working day. Can't wait? Send us a WhatsApp on +44 7925 171979.`;
}

export const HOME_SERVICES = [
  { name: "LinkedIn Profile optimisation", description: "We rewrite your profile, sort out your banner and set it all up, so it brings you enquiries." },
  { name: "LinkedIn Management", description: "We post for you every week, manage your account, connect with and engage with your ideal clients for lead generation and client acquisition." },
  { name: "Facebook and Instagram", description: "We set up your pages so they match your brand, then post and reply for you for business growth." },
  { name: "Book Writing and Publishing", description: "We write and publish your book, so you become the go-to expert in your field." },
];

export const SETUP_SERVICES = [
  { name: "LinkedIn Profile optimisation", package: "Client Magnet Profile", description: "Your headline, About section, Experience, Featured section and banner, optimised and all done for you." },
  { name: "LinkedIn Company Page", package: "Business Authority Page", description: "Your company page set up with a clear description, logo, cover and contact button." },
  { name: "Profile + Company Page", package: "Booked Out Brand Package", description: "Both of the above, made to work together.", label: "Best value" },
  { name: "Facebook and Instagram optimisation", package: "Social Magnet Pages", description: "Your bio, page details, images, highlight covers and contact buttons, sorted." },
];

export const MANAGEMENT_SERVICES = [
  { name: "LinkedIn Management", package: "Pipeline Growth Partnership", description: "Posts in your voice, chats with your ideal clients and a growing network." },
  { name: "LinkedIn Company Page Management", package: "Page Growth Partnership", description: "Regular content marketing posts that keep your company page active, growing, and sales-converting." },
  { name: "Facebook and Instagram Management", package: "Social Growth Partnership", description: "12 posts a month, with captions, designs, infographics and engagement." },
  { name: "All three platforms", package: "Everywhere Presence", description: "LinkedIn, Facebook and Instagram, all looked after together for business growth.", label: "Most complete" },
];