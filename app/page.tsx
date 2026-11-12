import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { HeroShowcase } from "@/components/hero-showcase";
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
  Zap,
  Brain,
  Database,
  ArrowUpRight,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-10 sm:pt-16 pb-14 border-b border-border overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Hero Text & Actions */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status indicator */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400 shadow-2xs">
                <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span>Open for Software Engineer & Applied AI/ML Roles</span>
              </div>

              {/* Names & Title */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Chirumamilla Mahesh Chowdary
                </p>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-foreground leading-[1.08]">
                  Mahesh Chowdary
                </h1>
                <p className="text-lg sm:text-xl font-bold text-foreground/90 pt-1">
                  Software Engineer — <span className="text-purple-600 dark:text-purple-400">Backend Systems</span> & <span className="text-blue-600 dark:text-blue-400">Applied AI</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                Computer science undergraduate at <strong className="text-foreground">ICFAI Foundation for Higher Education, Hyderabad</strong>. Hands-on systems engineer specializing in high-performance Go search engines, RAG pipelines with ChromaDB & Anthropic Claude, and robust relational architectures.
              </p>

              {/* Direct Contact Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <div className="flex items-center gap-1.5 rounded-xl border border-border bg-card glass-panel px-3 py-1.5 text-foreground shadow-2xs">
                  <Mail className="h-3.5 w-3.5 text-blue-500" />
                  <a
                    href="mailto:chirumamillamahesh2005@gmail.com"
                    className="hover:underline font-mono"
                  >
                    chirumamillamahesh2005@gmail.com
                  </a>
                  <CopyButton text="chirumamillamahesh2005@gmail.com" label="Copy" />
                </div>

                <div className="flex items-center gap-1.5 rounded-xl border border-border bg-card glass-panel px-3 py-1.5 text-foreground shadow-2xs">
                  <Phone className="h-3.5 w-3.5 text-purple-500" />
                  <a href="tel:+919573409069" className="hover:underline font-mono">
                    +91 9573409069
                  </a>
                  <CopyButton text="+919573409069" label="Copy" />
                </div>

                <div className="flex items-center gap-1.5 rounded-xl border border-border bg-card glass-panel px-3 py-1.5 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
                  <span>Hyderabad, India</span>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs hover:scale-[1.02] transition-all"
                >
                  <FileText className="h-4 w-4" />
                  <span>View Full Resume</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                </a>

                <a
                  href="https://github.com/maheshchowdarygit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card glass-panel px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/40"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/maheshchowdary/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card glass-panel px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/40"
                >
                  <Linkedin className="h-4 w-4 text-blue-500" />
                  <span>LinkedIn</span>
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card glass-panel px-4 py-2.5 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/40"
                >
                  <Mail className="h-4 w-4 text-purple-500" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Interactive Systems & AI Showcase Playground */}
            <div className="lg:col-span-5">
              <HeroShowcase />
            </div>
          </div>

          {/* Key Metrics / Highlights Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
            <div className="rounded-2xl border border-border bg-card glass-panel p-4 flex items-center gap-3 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shrink-0">
                <Zap className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-black font-mono text-foreground">&lt; 10ms</span>
                <span className="block text-xs text-muted-foreground">Go Search Latency</span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card glass-panel p-4 flex items-center gap-3 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20 shrink-0">
                <Brain className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-black font-mono text-foreground">RAG Pipeline</span>
                <span className="block text-xs text-muted-foreground">ChromaDB + Claude</span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card glass-panel p-4 flex items-center gap-3 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-zinc-500/10 text-zinc-400 border border-zinc-500/20 shrink-0">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-black font-mono text-foreground">200+ Peers</span>
                <span className="block text-xs text-muted-foreground">Tech Lead @ Swecha</span>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card glass-panel p-4 flex items-center gap-3 shadow-2xs">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-black font-mono text-foreground">B.Tech 2027</span>
                <span className="block text-xs text-muted-foreground">ICFAI Hyderabad CSE</span>
              </div>
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
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Engineering Projects
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Production architectures with verified benchmarks across backend systems, AI retrieval, and relational web platforms.
            </p>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors whitespace-nowrap"
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
              <Briefcase className="h-3.5 w-3.5 text-primary" />
              <span>Practical Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              Work & Research Experience
            </h2>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-400 transition-colors"
          >
            <span>About Me</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* VISWAM.AI */}
          <div className="group relative rounded-2xl border border-border border-t-2 border-t-purple-500 bg-card glass-panel p-6 space-y-4 shadow-sm hover:border-purple-400/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground">
                    AI Research Intern & Tech Lead
                  </h3>
                  <p className="text-xs font-semibold text-purple-500 dark:text-purple-400 mt-0.5">
                    VISWAM.AI (IIIT Hyderabad × Swecha)
                  </p>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded-md shrink-0 border border-border">
                  06/2025 – 08/2025
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Led data quality enforcement for large-scale Telugu audio-text corpus collection across ~200 contributors. Maintained version-controlled workflows in Swecha GitLab and coordinated task milestones as 1 of 10 Tech Leads with 100% on-time completion.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
              {["Data Quality", "GitLab CI", "IIIT Hyderabad", "Audio-Text Corpus"].map((t) => (
                <span key={t} className="text-[11px] font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md border border-border">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Coincent.ai */}
          <div className="group relative rounded-2xl border border-border border-t-2 border-t-blue-500 bg-card glass-panel p-6 space-y-4 shadow-sm hover:border-blue-400/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground">
                    Machine Learning Intern
                  </h3>
                  <p className="text-xs font-semibold text-blue-500 dark:text-blue-400 mt-0.5">
                    Coincent.ai
                  </p>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground bg-secondary px-2.5 py-1 rounded-md shrink-0 border border-border">
                  06/2024 – 08/2024
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                Conducted exploratory analysis and data preprocessing on labelled image datasets using Pandas and NumPy. Iterated on preprocessing pipelines to improve classification accuracy by 20% using TensorFlow/Keras.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
              {["Python", "Pandas", "TensorFlow", "Keras", "Image Preprocessing"].map((t) => (
                <span key={t} className="text-[11px] font-mono bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md border border-border">
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
        <div className="relative rounded-3xl border border-border bg-card glass-panel p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-500">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Build Together</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-tight">
              Interested in collaborating or discussing opportunities?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am actively seeking Software Engineering, Backend Architecture, and Applied AI/ML roles where I can contribute to high-performance, resilient systems.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-xs hover:scale-[1.02] transition-all"
            >
              <span>Contact Me</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+919573409069"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-xs sm:text-sm font-semibold text-foreground hover:bg-muted transition-all shadow-2xs hover:border-foreground/40"
            >
              <Phone className="h-3.5 w-3.5 text-blue-500" />
              <span>Call (+91 9573409069)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
