import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import {
  Mail,
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
    "Get in touch with Mahesh for Data Analyst, Applied ML, or Backend software engineering roles and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 border-b border-border/40 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <MessageSquare className="h-3.5 w-3.5 text-primary" />
          <span>Get in Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Let&apos;s Connect
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
          Whether you are exploring candidates for an open position at your startup, have a question about my projects, or just want to discuss ML retrieval architectures, feel free to drop a message.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Left Side: Contact Form (3 cols) */}
        <div className="md:col-span-3 space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs space-y-5">
            <div>
              <h2 className="text-lg font-bold text-foreground">
                Send a Message
              </h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                Delivered straight to my inbox. I usually reply within 24 hours.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>

        {/* Right Side: Direct Links & Response Expectations (2 cols) */}
        <div className="md:col-span-2 space-y-6">
          {/* Direct channels card */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Direct Channels
            </h3>

            <div className="space-y-3 text-xs">
              <a
                href="mailto:mahesh@example.com"
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">Email</span>
                    <span className="block text-[11px] text-muted-foreground">
                      mahesh@example.com
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.linkedin.com/in/maheshchowdary/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">LinkedIn</span>
                    <span className="block text-[11px] text-muted-foreground">
                      /in/maheshchowdary
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/maheshchowdarygit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border bg-background hover:bg-muted transition-colors group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-muted text-foreground">
                    <Github className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-foreground">GitHub</span>
                    <span className="block text-[11px] text-muted-foreground">
                      @maheshchowdarygit
                    </span>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Availability Details */}
          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2 text-foreground font-semibold">
              <Clock className="h-4 w-4 text-emerald-500" />
              <span>Availability & Response Time</span>
            </div>
            <p className="leading-relaxed">
              Based in <strong className="text-foreground">Hyderabad, India (IST / UTC+5:30)</strong>. Open to on-site roles in Hyderabad/Bengaluru or remote roles worldwide.
            </p>
            <div className="pt-2 border-t border-border/40 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-[11px]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Typical response latency: &lt; 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
