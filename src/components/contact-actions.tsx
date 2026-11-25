import { Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/website-content";
import { Button } from "./ui/button";

export function ContactActions() {
  return (
    <div className="mt-9 flex flex-wrap items-center gap-3">
      <Button asChild variant="contact"><Link to="/contact">Contact us</Link></Button>
      <WhatsAppAction />
    </div>
  );
}

export function WhatsAppAction() {
  return (
    <Button asChild variant="whatsapp">
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle aria-hidden="true" />WhatsApp us</a>
    </Button>
  );
}