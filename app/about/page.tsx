import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Target,
  FileText,
  Mail,
  MapPin,
  CheckCircle2,
  Code2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn about Mahesh: final-year B.Tech CS student at ICFAI Tech Hyderabad, engineering background, internships, and target roles in Data Analytics and Applied ML.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
      {/* Bio Header */}
      <section className="space-y-4 border-b border-border/40 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span>Candidate Profile</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          About Mahesh
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-foreground/70" />
            Hyderabad, Telangana, India
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-foreground/70" />
            B.Tech Computer Science (Final Year)
          </span>
        </div>
        <div className="pt-2 text-base text-muted-foreground leading-relaxed space-y-4">
          <p>
            I am a final-year Computer Science undergraduate at <strong className="text-foreground">ICFAI Tech, Hyderabad</strong>. I bridge the intersection of backend systems engineering and practical machine learning: building resilient backend architectures that ingest, process, and query high-volume data, and applying modern ML/RAG techniques to turn unstructured data into high-signal software.
          </p>
          <p>
            I prefer deterministic performance over buzzwords. Whether building a custom inverted search index from scratch in Go to understand BM25 probabilistic ranking at the byte level, or engineering AST-aware code retrieval pipelines for generative AI developer tools, I focus on measurable throughput, low latency, and production maintainability.
          </p>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs">
        <div className="flex items-center gap-2.5 text-foreground">
          <div className="p-2 rounded-lg bg-foreground/5 border border-foreground/10">
            <Target className="h-5 w-5 text-emerald-500" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            What I&apos;m Looking For
          </h2>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I am actively targeting full-time roles and high-impact internships at early-to-growth stage startups where individual contribution moves core company metrics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Data Analyst
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Product analytics, cohort retention, SQL pipelines, executive BI reporting, and predictive statistical modeling.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Applied ML Engineer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              RAG architectures, semantic vector retrieval, LLM evaluation pipelines, fine-tuning, and embedding search infrastructure.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Backend / AI-Adjacent
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Concurrent APIs in Go/Python, ETL data pipelines, distributed queues, and production AI system wrappers.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Environment fit:</span>
          <span>Fast-moving teams • High autonomy • Code reviews that teach • Direct customer feedback loops</span>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-5">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-foreground/5 border border-foreground/10">
            <GraduationCap className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              ICFAI Tech (Faculty of Science & Technology)
            </h3>
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
              Hyderabad, India • 2021 – 2025 (Final Year)
            </span>
          </div>
          <p className="text-sm font-medium text-foreground/80">
            Bachelor of Technology (B.Tech) in Computer Science and Engineering
          </p>
          <div className="pt-2 text-xs text-muted-foreground space-y-1.5 border-t border-border/40">
            <p>
              <strong className="text-foreground">Relevant Coursework:</strong> Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Machine Learning, Information Retrieval, Object-Oriented Software Design.
            </p>
            <p>
              <strong className="text-foreground">Activities & Leadership:</strong> Tech club mentor, active participant in algorithmic coding challenges and hackathons.
            </p>
          </div>
        </div>
      </section>

      {/* Experience & Internships Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-foreground/5 border border-foreground/10">
            <Briefcase className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Experience & Internships
          </h2>
        </div>

        <div className="relative border-l border-border/80 pl-6 ml-3 space-y-8">
          {/* Internship 1 */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-foreground bg-background" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base font-bold text-foreground">
                Software Engineering & Analytics Intern
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                June 2024 – August 2024
              </span>
            </div>
            <p className="text-xs font-semibold text-primary">
              [ADD: Company Name / Stealth Startup] • Hyderabad / Hybrid
            </p>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 pt-1 leading-relaxed">
              <li>
                Engineered automated Python data processing pipelines to clean and normalize high-frequency transactional data, reducing ingestion errors by 30%.
              </li>
              <li>
                Designed analytical SQL views and materialized query aggregates in PostgreSQL to power real-time performance KPI dashboards.
              </li>
              <li>
                Collaborated with senior engineers to implement REST endpoints in FastAPI, reducing latency for reporting services.
              </li>
            </ul>
          </div>

          {/* Academic Capstone / Project Lead */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-background" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base font-bold text-foreground">
                Capstone Systems Engineer & Project Lead
              </h3>
              <span className="text-xs font-mono text-muted-foreground">
                January 2024 – May 2024
              </span>
            </div>
            <p className="text-xs font-semibold text-primary">
              ICFAI Tech Engineering Labs • Hyderabad
            </p>
            <ul className="text-xs text-muted-foreground space-y-1.5 list-disc pl-4 pt-1 leading-relaxed">
              <li>
                Spearheaded the design and implementation of an in-memory inverted search engine in Go using BM25 probabilistic ranking.
              </li>
              <li>
                Benchmarked concurrency models across goroutine worker pools, achieving sub-15ms p99 query latency over a 100K-document corpus.
              </li>
              <li>
                Documented comprehensive architectural specifications, unit tests, and CI workflows.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Want a copy of my formal 1-page PDF resume?
        </p>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background hover:bg-foreground/90 transition-all shadow-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-all"
          >
            <span>Contact Me</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
