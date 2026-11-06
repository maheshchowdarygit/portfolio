import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/20 mt-20 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Info & Pitch */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-foreground text-background font-mono font-bold text-xs">
                M
              </span>
              <span className="font-semibold text-sm">Mahesh</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Final-year B.Tech CS at ICFAI Tech, Hyderabad. Building high-throughput backend services, ML retrieval pipelines, and actionable data analytics.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for full-time startup roles (2025/2026)
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3 text-xs">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                  All Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="space-y-3 text-xs">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Connect & Source
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/maheshchowdarygit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/maheshchowdary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:mahesh@example.com"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>mahesh@example.com</span>
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mahesh. Built with Next.js & Tailwind CSS.</p>
          <p className="font-mono text-[11px]">Hyderabad, Telangana, India</p>
        </div>
      </div>
    </footer>
  );
}
