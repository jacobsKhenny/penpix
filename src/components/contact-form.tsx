import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { SERVICE_OPTIONS, enquirySchema, WHATSAPP_URL } from "../lib/website-content";
import { Button } from "./ui/button";

const FORM_NAME = "penpixel-enquiry";

export function ContactForm() {
  const id = useId();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [firstName, setFirstName] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);
  useEffect(() => { if (sent) statusRef.current?.focus(); }, [sent]);

  function fieldError(field: string) {
    return errors[field] ? <p id={`${id}-${field}-error`} className="mt-2 text-base text-primary" role="alert">{errors[field]}</p> : null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (form.get("bot-field")) return;
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
    setFailed(false);
    setSending(true);
    try {
      const body = new URLSearchParams({
        "form-name": FORM_NAME,
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone,
        business: result.data.business,
        service: result.data.service,
        message: result.data.message,
      });
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      const first = result.data.name.trim().split(/\s+/)[0] ?? "";
      setFirstName(first ? first.charAt(0).toUpperCase() + first.slice(1) : "");
      setSent(true);
    } catch {
      setFailed(true);
    } finally {
      setSending(false);
    }
  }

  if (sent) return <div ref={statusRef} role="status" tabIndex={-1} className="enquiry-status space-y-4">
    <h3 className="font-display">{firstName ? `Thank you, ${firstName}!` : "Thank you!"}</h3>
    <p>We've got your message and we'll be in touch within one working day. Can't wait? Send us a WhatsApp on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-primary underline">+44 7925 171979</a>.</p>
  </div>;

  return <form onSubmit={handleSubmit} noValidate name={FORM_NAME} data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
    <input type="hidden" name="form-name" value={FORM_NAME} />
    <p className="hidden"><label>Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div><label htmlFor={`${id}-name`} className="mb-2 block text-base">Your name <span className="text-destructive">*</span></label><input id={`${id}-name`} name="name" autoComplete="name" className="field-input" required maxLength={150} aria-invalid={Boolean(errors['name'])} aria-describedby={errors['name'] ? `${id}-name-error` : undefined} />{fieldError("name")}</div>
    <div><label htmlFor={`${id}-email`} className="mb-2 block text-base">Email address <span className="text-destructive">*</span></label><input id={`${id}-email`} name="email" type="email" autoComplete="email" className="field-input" required maxLength={254} aria-invalid={Boolean(errors['email'])} aria-describedby={errors['email'] ? `${id}-email-error` : undefined} />{fieldError("email")}</div>
    <div><label htmlFor={`${id}-phone`} className="mb-2 block text-base">Phone or WhatsApp number</label><input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" className="field-input" maxLength={50} /></div>
    <div><label htmlFor={`${id}-business`} className="mb-2 block text-base">Business name</label><input id={`${id}-business`} name="business" autoComplete="organization" className="field-input" maxLength={200} /></div>
    <div><label htmlFor={`${id}-service`} className="mb-2 block text-base">What can we help you with? <span className="text-destructive">*</span></label><select id={`${id}-service`} name="service" className="field-input" defaultValue="" required aria-invalid={Boolean(errors['service'])} aria-describedby={errors['service'] ? `${id}-service-error` : undefined}><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}</select>{fieldError("service")}</div>
    <div><label htmlFor={`${id}-message`} className="mb-2 block text-base">Anything else you'd like to tell us?</label><textarea id={`${id}-message`} name="message" rows={4} maxLength={5000} className="field-input resize-y" /></div>
    {failed && <p className="text-base text-primary" role="alert">Something went wrong sending that. Please try again, or WhatsApp us on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="underline">+44 7925 171979</a>.</p>}
    <p className="text-base text-muted-foreground"><Link to="/privacy-policy" className="underline hover:text-foreground">Privacy Policy</Link></p>
    <Button type="submit" variant="contact" disabled={sending}>{sending ? "Sending..." : "Send my message"}</Button>
  </form>;
}