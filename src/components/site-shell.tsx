import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import penpixelLogo from "../assets/penpixel-full-logo.png.asset.json";
import { WhatsAppWidget } from "./whatsapp-widget";
import { Button } from "./ui/button";
import { WHATSAPP_URL } from "../lib/website-content";

const NAV_PAGES = [{ to: "/" as const, label: "Home" }, { to: "/services" as const, label: "Services" }, { to: "/about" as const, label: "About" }, { to: "/contact" as const, label: "Contact" }];
function BrandMark() {
  return <Link to="/" className="inline-flex shrink-0 items-center rounded-sm bg-surface-light px-2 py-1.5 sm:px-3" aria-label="PenPixel Digital Press home"><img src={penpixelLogo.url} alt="PenPixel Digital Press" className="h-6 w-auto sm:h-7" /></Link>;
}
export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: state => state.location.pathname });
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  return <div className="flex min-h-screen flex-col bg-background text-foreground">
    <header className="sticky top-0 z-30 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <BrandMark />
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">{NAV_PAGES.map(page => <Link key={page.to} to={page.to} className="text-base font-semibold text-muted-foreground hover:text-foreground" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{page.label}</Link>)}</nav>
        <div className="flex items-center gap-1"><Button asChild variant="contact" className="px-3 text-sm sm:px-4 sm:text-base"><Link to="/contact">Contact us</Link></Button><Button variant="ghost" className="h-11 gap-1 px-1 md:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(open => !open)}>{menuOpen ? <X /> : <Menu />}<span>Menu</span></Button></div>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="mx-auto grid max-w-5xl grid-cols-2 gap-1 border-t border-border px-4 py-3 md:hidden">{NAV_PAGES.map(page => <Link key={page.to} to={page.to} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-base font-semibold hover:bg-accent" activeProps={{ className: "text-primary" }} activeOptions={{ exact: true }}>{page.label}</Link>)}</nav>}
    </header>
    <main className="flex-1">{children}</main>
    <footer className="border-t border-border bg-background"><div className="mx-auto max-w-5xl px-6 pt-12 pb-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><BrandMark /><nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer navigation">{NAV_PAGES.map(page => <Link key={page.to} to={page.to} className="text-base font-semibold text-muted-foreground hover:text-foreground">{page.label}</Link>)}</nav></div>
      <p className="mt-8 text-base">PenPixel · Personal branding for business owners</p>
      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-base text-muted-foreground"><a href="mailto:info@penpixeldp.com" className="hover:text-foreground">info@penpixeldp.com</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-whatsapp">+44 7925 171979</a></div>
      <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-base text-muted-foreground sm:flex-row sm:justify-between"><p>© 2026 PenPixel Digital Press Ltd</p><Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link></div>
    </div></footer><WhatsAppWidget />
  </div>;
}
