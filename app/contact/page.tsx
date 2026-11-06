import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CopyButton } from "@/components/copy-button";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Clock,
  MapPin,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chirumamilla Mahesh Chowdary — Software Engineer specializing in Backend Systems, Data & Applied ML.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 border-b border-border/40 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MessageSquare className="h-3.5 w-3.5 text-primary" />
          <span>Direct Contact</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Let&apos;s Connect
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
          Have an open software engineering role, an interesting AI/ML backend problem, or a collaboration idea? Reach out via phone, email, or send a direct message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Side: Contact Form (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-2xs space-y-5">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Send a Message
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Delivered straight to my inbox. I typically reply within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>

        {/* Right Side: Direct Channels & Phone (2 cols) */}
        <div className="md:col-span-2 space-y-6">
          {/* Direct channels card */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-2xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Direct Channels
            </h3>

            <div className="space-y-3 text-xs">
              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">Phone</span>
                    <a
                      href="tel:+919573409069"
                      className="block text-[11px] text-muted-foreground hover:underline font-mono"
                    >
                      +91 9573409069
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CopyButton text="+919573409069" label="Copy" />
                  <a
                    href="tel:+919573409069"
                    className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                    title="Call"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">Email</span>
                    <a
                      href="mailto:chirumamillamahesh2005@gmail.com"
                      className="block text-[11px] text-muted-foreground hover:underline font-mono"
                    >
                      chirumamillamahesh2005@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <CopyButton text="chirumamillamahesh2005@gmail.com" label="Copy" />
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/maheshchowdary/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">LinkedIn</span>
                    <span className="block text-[11px] text-muted-foreground">
                      linkedin.com/in/maheshchowdary
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/maheshchowdarygit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">GitHub</span>
                    <span className="block text-[11px] text-muted-foreground">
                      github.com/maheshchowdarygit
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Location & Availability Card */}
          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <MapPin className="h-4 w-4 text-emerald-500" />
              <span>Location & Availability</span>
            </div>
            <p className="leading-relaxed">
              Based in <strong className="text-foreground">Hyderabad, India</strong>. Open to on-site roles in Hyderabad / Bengaluru or remote software engineering positions globally.
            </p>
            <div className="pt-2 border-t border-border/40 flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for 2025/2026 roles & internships</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
