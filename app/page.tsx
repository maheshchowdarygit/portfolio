import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 border-b border-border/40 pb-16 bg-grid-pattern">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-6">
            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Data Analyst, Applied ML & Backend Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                Hi, I&apos;m <span className="underline decoration-border decoration-wavy underline-offset-8">Mahesh</span>.
              </h1>
              {/* Recruiter One-Line Pitch */}
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-normal">
                Final-year B.Tech CS student at <strong className="font-semibold text-foreground">ICFAI Tech, Hyderabad</strong>. Backend-strong, ML-literate engineer building high-throughput systems, vector retrieval pipelines, and predictive analytics tools.
              </p>
            </div>

            {/* Recruiter 30-Second Quick Scan Strip */}
            <div className="rounded-xl border border-border bg-card/90 backdrop-blur-sm p-4 text-xs sm:text-sm text-muted-foreground space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-foreground font-semibold text-xs uppercase tracking-wider">
                <Zap className="h-3.5 w-3.5 text-amber-500" />
                <span>Recruiter 30-Second Skim:</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Backend & Systems:</strong> Custom Go BM25 engine (&lt;15ms p99 latency)
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Applied ML / RAG:</strong> AST-aware codebase Q&A with hybrid dense+sparse retrieval
                  </span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Full-Stack & DB:</strong> Campus asset recovery platform with relational schema & security
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Links & Resume CTA */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-semibold text-background shadow hover:bg-foreground/90 transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://github.com/maheshchowdarygit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all shadow-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/maheshchowdary/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all shadow-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:mahesh@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all shadow-sm"
              >
                <Mail className="h-4 w-4" />
                <span>Email Me</span>
              </a>
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
              <span>Technical Showcase</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Featured Projects
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Production-oriented implementations focusing on systems programming, applied ML, and data intelligence.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
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

      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <SkillsSection />
      </section>

      {/* Contact CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="rounded-2xl border border-border bg-gradient-to-r from-card via-muted/30 to-card p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Hiring for an early-stage startup or high-growth engineering team?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am actively looking for full-time opportunities or high-impact internships in Data Analytics, Applied ML, and Backend Engineering. Let&apos;s build together.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:bg-foreground/90 transition-all shadow"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all"
            >
              <span>Read About Me</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
