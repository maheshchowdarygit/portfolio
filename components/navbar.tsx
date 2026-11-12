"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X, FileText, ArrowUpRight } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 sm:top-3 z-50 w-full px-0 sm:px-4 transition-all">
      <div className="max-w-5xl mx-auto h-16 sm:rounded-2xl glass-panel border-x-0 sm:border-x border-t-0 sm:border-t border-b border-border px-4 sm:px-6 flex items-center justify-between shadow-xs backdrop-blur-xl">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-medium tracking-tight text-foreground transition-all"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-950 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-950 font-mono font-bold text-xs shadow-xs border border-zinc-800 dark:border-zinc-300 group-hover:scale-105 transition-all">
            MC
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500 ring-2 ring-background" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm leading-tight text-foreground group-hover:text-blue-500 transition-colors">
              Mahesh Chowdary
            </span>
            <span className="text-[11px] text-muted-foreground leading-tight hidden sm:block font-mono">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm bg-muted/60 p-1 rounded-xl border border-border">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3.5 py-1.5 rounded-lg transition-all text-xs font-semibold relative",
                  isActive
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/60"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-all hover:scale-[1.02]"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3 opacity-80" />
          </a>

          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-md px-4 py-4 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2 border-t border-border mt-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-foreground bg-secondary/80 hover:bg-secondary"
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-muted-foreground" />
                Download Resume (PDF)
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
