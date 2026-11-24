import { MessageCircle, Send, X } from "lucide-react";
import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "447925171979";

const QUICK_PROMPTS = [
  "Hi Aanu, I'd like help with my LinkedIn profile (Pixel).",
  "Hi Aanu, I'm interested in writing & publishing a book (Pen).",
  "Hi! I'd love to book a quick chat about working together.",
];

function openWhatsApp(text: string) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    openWhatsApp(trimmed);
    setMessage("");
    setOpen(false);
  }

  return (
    <div className="fixed right-5 bottom-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label="WhatsApp chat with PenPixel"
          className="w-80 max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        >
          <div className="flex items-center justify-between bg-whatsapp px-4 py-3 text-whatsapp-foreground">
            <div>
              <p className="text-sm font-semibold">PenPixel Digital Press</p>
              <p className="text-xs opacity-90">Typically replies quickly on WhatsApp</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp chat"
              className="rounded-full p-1 transition-opacity hover:opacity-80"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3 p-4">
            <div className="rounded-xl bg-muted px-3.5 py-2.5 text-xs leading-relaxed text-foreground">
              Hi there! Choose a topic below or type your message to chat directly with us on
              WhatsApp.
            </div>

            <div className="flex flex-col gap-1.5">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => {
                    openWhatsApp(prompt);
                    setOpen(false);
                  }}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-left text-xs text-muted-foreground transition-colors hover:border-whatsapp hover:text-foreground"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                aria-label="WhatsApp message"
                className="flex-1 rounded-full border border-input bg-background px-3.5 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-whatsapp focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Send on WhatsApp"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-105"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close WhatsApp chat" : "Chat on WhatsApp"}
        aria-expanded={open}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-whatsapp focus:ring-offset-2 focus:ring-offset-background"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}