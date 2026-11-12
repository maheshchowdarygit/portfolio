import Link from "next/link";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-card/60 glass-panel mt-20 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Info & Pitch */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-mono font-bold text-xs shadow-xs">
                MC
              </span>
              <span className="font-bold text-sm text-foreground">Mahesh Chowdary</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Chirumamilla Mahesh Chowdary — Software Engineer specializing in backend architecture, systems programming in Go, and applied AI/ML retrieval systems.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shadow-2xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Software Engineer & Applied AI/ML roles
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
                  Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Connect */}
          <div className="space-y-3 text-xs">
            <span className="font-semibold text-foreground uppercase tracking-wider text-[11px]">
              Direct Contact
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+919573409069"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>+91 9573409069</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:chirumamillamahesh2005@gmail.com"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-mono"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>chirumamillamahesh2005@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/maheshchowdarygit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub</span>
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
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Chirumamilla Mahesh Chowdary. All rights reserved.</p>
          <p className="font-mono text-[11px]">Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
}
