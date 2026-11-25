import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../lib/website-content";
import { Button } from "./ui/button";

export function WhatsAppWidget() {
  return <Button asChild variant="whatsapp" className="fixed right-5 bottom-5 z-40 h-14 w-14 rounded-full p-0 shadow-lg" size="icon">
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp us" title="WhatsApp us"><MessageCircle className="size-7" aria-hidden="true" /></a>
  </Button>;
}
