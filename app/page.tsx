import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { CopyButton } from "@/components/copy-button";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Briefcase,
  MapPin,
  Terminal,
  ExternalLink,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 border-b border-border/40 pb-16 bg-grid-pattern overflow-hidden">
        {/* Subtle decorative ambient glow */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-gradient-to-tr from-foreground/5 via-foreground/2 to-transparent blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="max-w-3xl space-y-7">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 backdrop-blur-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Software Engineer • Leaning towards Applied AI/ML & Backend Roles</span>
            </div>

            {/* Names & Title */}
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground">
                  Chirumamilla Mahesh Chowdary
                </p>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                  Mahesh Chowdary
                </h1>
              </div>
              <p className="text-lg sm:text-xl font-medium text-foreground/90">
                Software Engineer — Backend Systems, Data & Applied ML
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl pt-1">
                Computer science undergraduate at <strong className="text-foreground">ICFAI Foundation for Higher Education, Hyderabad</strong>. Hands-on experience building high-performance systems from scratch — from a custom Go inverted index search engine to a RAG codebase exploration tool over the Anthropic API.
              </p>
            </div>

            {/* Direct Contact Pills (HCI accessible quick-action bar) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3 py-1.5 text-foreground shadow-2xs">
                <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                <a
                  href="mailto:chirumamillamahesh2005@gmail.com"
                  className="hover:underline font-mono"
                >
                  chirumamillamahesh2005@gmail.com
                </a>
                <CopyButton text="chirumamillamahesh2005@gmail.com" label="Copy" />
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-card/80 px-3 py-1.5 text-foreground shadow-2xs">
                <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                <a href="tel:+919573409069" className="hover:underline font-mono">
                  +91 9573409069
                </a>
                <CopyButton text="+919573409069" label="Copy" />
              </div>

              <div className="flex items-center gap-1 rounded-lg border border-border bg-card/80 px-3 py-1.5 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-xs sm:text-sm font-semibold text-background shadow-xs hover:bg-foreground/90 transition-all hover:scale-[1.01]"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Resume</span>
              </a>

              <a
                href="https://github.com/maheshchowdarygit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/30"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/maheshchowdary/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/30"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/30"
              >
                <Mail className="h-4 w-4" />
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-border/40 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>Featured Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Engineering Projects
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Real codebases with verified benchmarks across backend systems, AI retrieval, and relational web architectures.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            <span>View all projects</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </section>

      {/* Industry Experience Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full space-y-6">
        <div className="flex items-center justify-between border-b border-border/40 pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
              <Briefcase className="h-3.5 w-3.5 text-foreground" />
              <span>Practical Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Work & Research Experience
            </h2>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <span>More details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VISWAM.AI */}
          <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3 shadow-2xs hover:border-foreground/20 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base text-foreground">
                    AI Research Intern & Tech Lead
                  </h3>
                  <p className="text-xs font-medium text-primary mt-0.5">
                    VISWAM.AI (IIIT Hyderabad × Swecha)
                  </p>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded shrink-0">
                  06/2025 – 08/2025
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Led data quality enforcement for large-scale Telugu audio-text corpus collection across ~200 contributors. Maintained version-controlled workflows in Swecha GitLab and coordinated task milestones as 1 of 10 Tech Leads.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
              {["Data Quality", "GitLab CI", "IIIT Hyderabad", "Audio-Text Corpus"].map((t) => (
                <span key={t} className="text-[10px] font-mono bg-muted/60 text-muted-foreground px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Coincent.ai */}
          <div className="rounded-xl border border-border/70 bg-card p-5 space-y-3 shadow-2xs hover:border-foreground/20 transition-all flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base text-foreground">
                    Machine Learning Intern
                  </h3>
                  <p className="text-xs font-medium text-primary mt-0.5">
                    Coincent.ai
                  </p>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded shrink-0">
                  06/2024 – 08/2024
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                Conducted exploratory analysis and data preprocessing on labelled image datasets using Pandas and NumPy. Iterated on preprocessing pipelines to improve classification accuracy by 20% using TensorFlow/Keras.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
              {["Python", "Pandas", "TensorFlow", "Keras", "Image Preprocessing"].map((t) => (
                <span key={t} className="text-[10px] font-mono bg-muted/60 text-muted-foreground px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <SkillsSection />
      </section>

      {/* Contact CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="rounded-2xl border border-border bg-gradient-to-r from-card via-muted/20 to-card p-8 sm:p-10 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Interested in collaborating or discussing opportunities?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am open to Software Engineering, Backend, and Applied AI/ML roles where I can contribute to building resilient, high-impact systems.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-xs sm:text-sm font-semibold text-background hover:bg-foreground/90 transition-all shadow-xs"
            >
              <span>Contact Mahesh</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919573409069"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-muted transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-muted-foreground" />
              <span>Call (+91 9573409069)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
