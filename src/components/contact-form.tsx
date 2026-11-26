import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICE_OPTIONS, enquirySchema, buildEnquiryMailto, WHATSAPP_URL } from "../lib/website-content";
import { Button } from "./ui/button";

export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [draftUrl, setDraftUrl] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (draftUrl) statusRef.current?.focus(); }, [draftUrl]);
  function fieldError(field: string) {
    return errors[field] ? <p id={`${id}-${field}-error`} className="mt-2 text-base text-primary" role="alert">{errors[field]}</p> : null;
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const result = enquirySchema.safeParse(Object.fromEntries(form));
    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) { const field = String(issue.path[0]); nextErrors[field] ??= issue.message; }
      setErrors(nextErrors);
      const firstField = result.error.issues[0]?.path[0];
      if (typeof firstField === "string") event.currentTarget.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }
    setErrors({});
    const href = buildEnquiryMailto(result.data);
    setDraftUrl(href);
    window.location.href = href;
  }
  if (draftUrl) return <div ref={statusRef} role="status" tabIndex={-1} className="enquiry-status space-y-6"><h3 className="font-display">Your email draft is ready.</h3><p>Your message has not been sent by this website. Please send it from your email app to info@penpixeldp.com. Can't wait? Send us a WhatsApp on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">+44 7925 171979</a>.</p><div className="flex flex-wrap gap-4"><Button asChild variant="contact"><a href={draftUrl}>Open email draft</a></Button><Button variant="outline" onClick={() => setDraftUrl("")}>Back to form</Button></div></div>;
  return <form onSubmit={handleSubmit} noValidate className="space-y-6">
    <p className="text-base text-muted-foreground">Send your enquiry using your email app, or <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">WhatsApp us</a>.</p>
    <div><label htmlFor={`${id}-name`} className="mb-2 block text-base">Your name <span className="text-destructive">*</span></label><input id={`${id}-name`} name="name" autoComplete="name" className="field-input" required maxLength={150} aria-invalid={Boolean(errors['name'])} aria-describedby={errors['name'] ? `${id}-name-error` : undefined} />{fieldError("name")}</div>
    <div><label htmlFor={`${id}-email`} className="mb-2 block text-base">Email address <span className="text-destructive">*</span></label><input id={`${id}-email`} name="email" type="email" autoComplete="email" className="field-input" required maxLength={254} aria-invalid={Boolean(errors['email'])} aria-describedby={errors['email'] ? `${id}-email-error` : undefined} />{fieldError("email")}</div>
    <div><label htmlFor={`${id}-phone`} className="mb-2 block text-base">Phone or WhatsApp number</label><input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className="field-input" maxLength={50} /></div>
    <div><label htmlFor={`${id}-business`} className="mb-2 block text-base">Business name</label><input id={`${id}-business`} name="business" autoComplete="organization" className="field-input" maxLength={200} /></div>
    <div><label htmlFor={`${id}-service`} className="mb-2 block text-base">What can we help you with? <span className="text-destructive">*</span></label><select id={`${id}-service`} name="service" className="field-input" defaultValue="" required aria-invalid={Boolean(errors['service'])} aria-describedby={errors['service'] ? `${id}-service-error` : undefined}><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}</select>{fieldError("service")}</div>
    <div><label htmlFor={`${id}-message`} className="mb-2 block text-base">Anything else you'd like to tell us?</label><textarea id={`${id}-message`} name="message" rows={4} maxLength={5000} className="field-input resize-y" /></div>
    <p className="text-base text-muted-foreground"><Link to="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link></p>
    <Button type="submit" variant="contact">Send my message</Button>
  </form>;
}
