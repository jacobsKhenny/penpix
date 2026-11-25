import { useId, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICE_OPTIONS, enquirySchema, WHATSAPP_URL } from "../lib/website-content";
import { Button } from "./ui/button";

export function ContactForm() {
  const id = useId();
  const [error, setError] = useState("");
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = enquirySchema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please check your details.");
      return;
    }
    // Sender-domain verification is required before a real sending action can be wired.
    // Never display the approved success message until the email service confirms a send.
    setError("Your message has not been sent. Email delivery is not available yet. Please email info@penpixeldp.com or send us a WhatsApp.");
  }
  return <form onSubmit={handleSubmit} className="space-y-5">
    <p className="text-base text-muted-foreground">The enquiry form is temporarily unavailable. Please <a href="mailto:info@penpixeldp.com" className="text-primary underline">email us</a> or <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-whatsapp underline">WhatsApp us</a>.</p>
    <div><label htmlFor={`${id}-name`} className="mb-2 block text-base">Your name <span className="text-destructive">*</span></label><input id={`${id}-name`} name="name" autoComplete="name" className="field-input" required maxLength={150} /></div>
    <div><label htmlFor={`${id}-email`} className="mb-2 block text-base">Email address <span className="text-destructive">*</span></label><input id={`${id}-email`} name="email" type="email" autoComplete="email" className="field-input" required maxLength={254} /></div>
    <div><label htmlFor={`${id}-phone`} className="mb-2 block text-base">Phone or WhatsApp number</label><input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className="field-input" maxLength={50} /></div>
    <div><label htmlFor={`${id}-business`} className="mb-2 block text-base">Business name</label><input id={`${id}-business`} name="business" autoComplete="organization" className="field-input" maxLength={200} /></div>
    <div><label htmlFor={`${id}-service`} className="mb-2 block text-base">What can we help you with? <span className="text-destructive">*</span></label><select id={`${id}-service`} name="service" className="field-input" defaultValue="" required><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}</select></div>
    <div><label htmlFor={`${id}-message`} className="mb-2 block text-base">Anything else you'd like to tell us?</label><textarea id={`${id}-message`} name="message" rows={4} maxLength={5000} className="field-input resize-y" /></div>
    <p className="text-base text-muted-foreground"><Link to="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link></p>
    {error && <p role="alert" className="text-base text-destructive">{error}</p>}
    <Button type="submit" variant="contact">Send my message</Button>
  </form>;
}
