import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Target,
  FileText,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Code2,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { CopyButton } from "@/components/copy-button";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Chirumamilla Mahesh Chowdary: Software Engineer specializing in Backend Systems, Data & Applied ML. Education at ICFAI Foundation for Higher Education Hyderabad.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
      {/* Bio Header */}
      <section className="space-y-4 border-b border-border/40 pb-8">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          <span>Profile & Background</span>
        </div>
        <div className="space-y-1">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Chirumamilla Mahesh Chowdary
          </p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            About Mahesh
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-foreground/70" />
            Hyderabad, India
          </span>
          <span className="flex items-center gap-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-foreground/70" />
            B.Tech Computer Science & Engineering (2023 – 2027)
          </span>
        </div>
        <div className="pt-2 text-base text-muted-foreground leading-relaxed space-y-4">
          <p>
            I am a Computer Science undergraduate at <strong className="text-foreground">ICFAI Foundation for Higher Education, Hyderabad</strong> with hands-on, end-to-end engineering experience spanning backend systems, data pipelines, and applied machine learning.
          </p>
          <p>
            My work focuses on building reliable, fast software from fundamentals — whether engineering a custom in-memory inverted index and TF-IDF search engine from scratch in Go achieving sub-10ms query latencies, or developing a full-stack code-exploration RAG system over the Anthropic Claude API and ChromaDB.
          </p>
          <p>
            I am equally comfortable across backend architecture, relational database design (SQL/MySQL), and Python-based data pipelines (Pandas, NumPy, TensorFlow).
          </p>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="space-y-5 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-2xs">
        <div className="flex items-center gap-2.5 text-foreground">
          <div className="p-2 rounded-lg bg-foreground/5 border border-foreground/10">
            <Target className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
              Target Roles & Focus
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Software Engineer leaning towards Applied AI/ML and Backend Systems
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Software Engineer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Core software engineering, backend services, clean architecture, high-efficiency API design, and systems programming.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Applied AI / ML Engineer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              RAG architectures, semantic vector retrieval (ChromaDB), LLM application integration (Anthropic Claude), and embeddings.
            </p>
          </div>

          <div className="rounded-xl border border-border/80 bg-background/60 p-4 space-y-2">
            <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              Backend Systems & Data
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Concurrent Go & Python services, relational database modeling (MySQL/PostgreSQL), and ETL data pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
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
          {/* Internship 1: VISWAM.AI */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-foreground bg-background" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base font-bold text-foreground">
                AI Research Intern & Tech Lead
              </h3>
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                06/2025 – 08/2025 | Hyderabad
              </span>
            </div>
            <p className="text-xs font-semibold text-primary">
              VISWAM.AI (IIIT Hyderabad × Swecha)
            </p>
            <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4 pt-1 leading-relaxed">
              <li>
                Led data quality enforcement for a large-scale Telugu audio-text corpus collection effort, defining and applying accuracy/relevance benchmarks across ~200 contributors&apos; submissions, and flagging inconsistent samples before they entered the training pipeline.
              </li>
              <li>
                Built and maintained a version-controlled contribution-tracking workflow (Swecha GitLab) for full audit visibility into data provenance across the residency.
              </li>
              <li>
                Coordinated task allocation and milestone tracking as 1 of 10 Tech Leads, delivering 100% on-time completion across all deliverables.
              </li>
            </ul>
          </div>

          {/* Internship 2: Coincent.ai */}
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-background" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <h3 className="text-base font-bold text-foreground">
                Machine Learning Intern
              </h3>
              <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">
                06/2024 – 08/2024 | Remote
              </span>
            </div>
            <p className="text-xs font-semibold text-primary">
              Coincent.ai
            </p>
            <ul className="text-xs text-muted-foreground space-y-2 list-disc pl-4 pt-1 leading-relaxed">
              <li>
                Performed data cleaning, preprocessing, and exploratory analysis on labelled image datasets using Pandas and NumPy prior to model training.
              </li>
              <li>
                Evaluated model outputs against ground truth, iterating on preprocessing to improve classification accuracy by 20%, using TensorFlow/Keras for downstream training.
              </li>
            </ul>
          </div>
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

        <div className="rounded-xl border border-border bg-card p-6 shadow-2xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 className="text-base sm:text-lg font-bold text-foreground">
              ICFAI Foundation for Higher Education, Hyderabad
            </h3>
            <span className="text-xs font-mono text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
              2023 – 2027
            </span>
          </div>
          <p className="text-sm font-medium text-foreground/85">
            Bachelor of Technology (B.Tech) in Computer Science & Engineering
          </p>
          <div className="pt-2 text-xs text-muted-foreground space-y-1.5 border-t border-border/40">
            <p>
              <strong className="text-foreground">Foundations:</strong> Data Structures & Algorithms, Systems Programming, Database Management Systems, Information Retrieval, Machine Learning, Operating Systems.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-foreground/5 border border-foreground/10">
            <Award className="h-5 w-5 text-foreground" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Certifications
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Azure AI Fundamentals", issuer: "Microsoft" },
            { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services" },
            { title: "Cybersecurity Fundamentals", issuer: "IBM" },
            { title: "LLM Prompt Engineering", issuer: "NVIDIA" },
          ].map((c) => (
            <div key={c.title} className="rounded-lg border border-border bg-card p-3.5 flex items-center justify-between text-xs">
              <span className="font-semibold text-foreground">{c.title}</span>
              <span className="font-mono text-muted-foreground text-[11px]">{c.issuer}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Contact Strip */}
      <section className="pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5 text-center sm:text-left">
          <p className="text-sm font-semibold text-foreground">
            Chirumamilla Mahesh Chowdary
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            chirumamillamahesh2005@gmail.com • +91 9573409069
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background hover:bg-foreground/90 transition-all shadow-xs"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
