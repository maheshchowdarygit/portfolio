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
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background font-bold text-xs group-hover:scale-105 transition-transform">
            M
          </span>
          <span className="font-semibold tracking-normal">Mahesh</span>
          <span className="hidden sm:inline-block text-xs text-muted-foreground font-normal border-l border-border pl-2">
            CS @ ICFAI Tech
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
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
                  "px-3.5 py-1.5 rounded-md transition-colors text-sm",
                  isActive
                    ? "bg-secondary text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
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
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-all shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
          </a>

          <ThemeToggle />

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground hover:bg-muted"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background px-4 py-4 space-y-2">
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
                  "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
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
              className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-foreground bg-muted hover:bg-secondary"
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Download Resume
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
