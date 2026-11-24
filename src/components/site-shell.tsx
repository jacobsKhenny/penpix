import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import penpixelLogo from "../assets/penpixel-logo.png.asset.json";
import { WhatsAppWidget } from "./whatsapp-widget";

const NAV_PAGES = [
  {
    to: "/" as const,
    label: "Home",
    description: "Visibility, authority, and how we work.",
  },
  {
    to: "/services" as const,
    label: "Services",
    description: "Pixel (growth & LinkedIn) and Pen (books & publishing).",
  },
  {
    to: "/about" as const,
    label: "About",
    description: "Meet Aanu and the story behind PenPixel Digital Press.",
  },
  {
    to: "/contact" as const,
    label: "Contact",
    description: "Start a conversation by form, email, or WhatsApp.",
  },
];

function BrandMark() {
  return (
    <Link
      to="/"
      className="inline-flex items-center"
      aria-label="PenPixel Digital Press home"
    >
      <img src={penpixelLogo.url} alt="PenPixel Digital Press" className="h-8 w-auto" />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <BrandMark />

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_PAGES.filter((p) => p.to !== "/").map((page) => (
              <Link
                key={page.to}
                to={page.to}
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {page.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary"
            aria-label="Open pages drawer"
            aria-expanded={drawerOpen}
          >
            <Menu className="h-3.5 w-3.5" />
            <span>Pages</span>
          </button>
        </div>
      </header>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Pages menu">
          <button
            type="button"
            className="fixed inset-0 bg-background/75 backdrop-blur-xs"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close pages drawer"
          />
          <aside className="relative z-10 flex h-full w-full max-w-sm flex-col justify-between border-l border-border bg-card p-6 shadow-2xl">
            <div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  PenPixel · Pages
                </span>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label="Close drawer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2" aria-label="Drawer navigation">
                {NAV_PAGES.map((page) => {
                  const active = pathname === page.to;
                  return (
                    <Link
                      key={page.to}
                      to={page.to}
                      className={`group rounded-lg border px-4 py-3.5 transition-colors ${
                        active
                          ? "border-primary bg-accent"
                          : "border-transparent hover:border-border hover:bg-accent/60"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-display text-lg text-foreground">{page.label}</span>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{page.description}</p>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="border-t border-border pt-5 text-xs text-muted-foreground space-y-2">
              <p className="font-semibold uppercase tracking-wider text-foreground">Direct contact</p>
              <p>
                <a href="mailto:info@penpixeldp.com" className="hover:text-primary">
                  info@penpixeldp.com
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/447925171979"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  WhatsApp +44 7925 171979 →
                </a>
              </p>
            </div>
          </aside>
        </div>
      )}

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <BrandMark />
            <nav className="flex flex-wrap gap-6" aria-label="Footer navigation">
              {NAV_PAGES.map((page) => (
                <Link
                  key={page.to}
                  to={page.to}
                  className="text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
                >
                  {page.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-8 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PenPixel Digital Press Ltd · Leicester, United Kingdom</p>
            <p>
              <a href="mailto:info@penpixeldp.com" className="hover:text-foreground">
                info@penpixeldp.com
              </a>
              {" · "}
              <a
                href="https://wa.me/447925171979"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp +44 7925 171979
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  );
}