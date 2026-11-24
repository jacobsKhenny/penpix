import { useState, type FormEvent } from "react";

const SERVICE_OPTIONS = [
  "Pixel — LinkedIn & online visibility",
  "Pen — Ghostwriting & book publishing",
  "Both Pixel & Pen",
];

export function ContactForm({ defaultService }: { defaultService?: string }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [profile, setProfile] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService ?? SERVICE_OPTIONS[0] ?? "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !surname.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-primary/40 bg-card p-6">
        <h3 className="font-display text-xl text-foreground">Message received.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thanks, {firstName}. We&apos;ll reply to {email} shortly—or reach us faster on{" "}
          <a
            href="https://wa.me/447925171979"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            WhatsApp
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setFirstName("");
            setSurname("");
            setProfile("");
            setEmail("");
            setMessage("");
          }}
          className="btn-pill-secondary mt-5"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="cf-first" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          First name <span className="text-destructive">*</span>
        </label>
        <input
          id="cf-first"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="field-input"
          required
        />
      </div>

      <div>
        <label htmlFor="cf-surname" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Surname <span className="text-destructive">*</span>
        </label>
        <input
          id="cf-surname"
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className="field-input"
          required
        />
      </div>

      <div>
        <label htmlFor="cf-profile" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          LinkedIn profile or website
        </label>
        <input
          id="cf-profile"
          type="text"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          className="field-input"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          E-mail <span className="text-destructive">*</span>
        </label>
        <input
          id="cf-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field-input"
          required
        />
      </div>

      <div>
        <label htmlFor="cf-service" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          How can we help?
        </label>
        <select
          id="cf-service"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="field-input"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-medium text-muted-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="field-input resize-y"
          required
        />
      </div>

      {error && <p className="text-xs text-destructive">{error}</p>}

      <button type="submit" className="btn-pill-primary">
        Send
      </button>
    </form>
  );
}