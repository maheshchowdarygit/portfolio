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
  title: "About Me",
  description:
    "About Chirumamilla Mahesh Chowdary: Software Engineer specializing in Backend Systems, Data & Applied ML. Education at ICFAI Foundation for Higher Education Hyderabad.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
      {/* Bio Header */}
      <section className="space-y-6 border-b border-border pb-10 relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1 text-xs font-semibold text-purple-600 dark:text-purple-400">
          <Sparkles className="h-3.5 w-3.5 text-purple-500" />
          <span>Profile & Systems Focus</span>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider font-semibold">
            Chirumamilla Mahesh Chowdary
          </p>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            About Me
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5">
            <MapPin className="h-3.5 w-3.5 text-blue-500" />
            Hyderabad, India
          </span>
          <span className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5">
            <GraduationCap className="h-3.5 w-3.5 text-purple-500" />
            B.Tech Computer Science (2023 – 2027)
          </span>
        </div>
        <div className="pt-2 text-base text-muted-foreground leading-relaxed space-y-4">
          <p>
            I am a Computer Science undergraduate at <strong className="text-foreground">ICFAI Foundation for Higher Education, Hyderabad</strong> with hands-on, end-to-end engineering experience spanning high-throughput backend services, intelligent RAG pipelines, and systems programming.
          </p>
          <p>
            My engineering philosophy centers on building software from first principles — whether implementing an in-memory inverted index and TF-IDF search kernel from scratch in Go to hit sub-10ms query benchmarks, or architecting a complete code-intelligence exploration RAG pipeline over ChromaDB and the Anthropic Claude API.
          </p>
          <p>
            I thrive in environments requiring rigorous data modeling (MySQL/PostgreSQL), concurrency and API design (Go/Python), and modern machine learning frameworks (Pandas, TensorFlow, HuggingFace embeddings).
          </p>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="space-y-5 rounded-3xl border border-border bg-card glass-panel p-6 sm:p-8 shadow-xs relative">
        <div className="flex items-center gap-3 text-foreground">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight">
              Target Roles & Focus
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Software Engineer leaning towards Applied AI/ML and High-Performance Backend Systems
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-2xl border border-border bg-background p-5 space-y-2.5 shadow-2xs hover:border-blue-500/50 transition-colors">
            <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Software Engineer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Core backend architecture, concurrent microservices, type-safe API design, clean algorithms, and systems programming.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 space-y-2.5 shadow-2xs hover:border-purple-500/50 transition-colors">
            <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              Applied AI / ML Engineer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Retrieval-Augmented Generation (RAG), vector embeddings (ChromaDB), LLM reasoning pipelines (Anthropic Claude), and AST code retrieval.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 space-y-2.5 shadow-2xs hover:border-blue-500/50 transition-colors">
            <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              Backend Systems & Data
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Concurrent Go/Python services, relational database schemas (MySQL), automated validation pipelines, and audio-text data curation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Briefcase className="h-5 w-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Experience & Internships
          </h2>
        </div>

        <div className="relative border-l-2 border-indigo-500/30 pl-6 ml-4 space-y-10">
          {/* Internship 1: VISWAM.AI */}
          <div className="relative space-y-3 rounded-2xl border border-border/80 bg-card/80 glass-panel p-6 shadow-md shadow-black/5 hover:border-foreground/30 transition-all">
            <div className="absolute -left-[35px] top-7 h-4 w-4 rounded-full border-2 border-indigo-500 bg-background ring-4 ring-indigo-500/20" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  AI Research Intern & Tech Lead
                </h3>
                <p className="text-xs font-semibold text-primary mt-0.5">
                  VISWAM.AI (IIIT Hyderabad × Swecha)
                </p>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md border border-border/40 shrink-0">
                06/2025 – 08/2025 | Hyderabad
              </span>
            </div>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-2 list-disc pl-4 pt-1 leading-relaxed">
              <li>
                Led data quality enforcement for a large-scale Telugu audio-text corpus collection effort, defining and applying accuracy/relevance benchmarks across ~200 contributors&apos; submissions.
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
          <div className="relative space-y-3 rounded-2xl border border-border/80 bg-card/80 glass-panel p-6 shadow-md shadow-black/5 hover:border-foreground/30 transition-all">
            <div className="absolute -left-[35px] top-7 h-4 w-4 rounded-full border-2 border-sky-500 bg-background ring-4 ring-sky-500/20" />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  Machine Learning Intern
                </h3>
                <p className="text-xs font-semibold text-primary mt-0.5">
                  Coincent.ai
                </p>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md border border-border/40 shrink-0">
                06/2024 – 08/2024 | Remote
              </span>
            </div>
            <ul className="text-xs sm:text-sm text-muted-foreground space-y-2 list-disc pl-4 pt-1 leading-relaxed">
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
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
            <GraduationCap className="h-5 w-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Education
          </h2>
        </div>

        <div className="rounded-2xl border border-border/80 bg-card/80 glass-panel p-6 sm:p-7 shadow-md shadow-black/5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                ICFAI Foundation for Higher Education, Hyderabad
              </h3>
              <p className="text-sm font-semibold text-primary mt-0.5">
                Bachelor of Technology (B.Tech) in Computer Science & Engineering
              </p>
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-secondary px-3 py-1 rounded-md border border-border/40 shrink-0">
              2023 – 2027
            </span>
          </div>
          <div className="pt-3 text-xs sm:text-sm text-muted-foreground space-y-2 border-t border-border/40">
            <p>
              <strong className="text-foreground">Core Coursework & Foundations:</strong> Data Structures & Algorithms, Systems Programming, Database Management Systems (SQL), Operating Systems, Distributed Systems, Information Retrieval, Machine Learning.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Award className="h-5 w-5" />
          </div>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Certifications
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {[
            { title: "Azure AI Fundamentals", issuer: "Microsoft", badge: "text-blue-500 bg-blue-500/10" },
            { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", badge: "text-amber-500 bg-amber-500/10" },
            { title: "Cybersecurity Fundamentals", issuer: "IBM", badge: "text-indigo-500 bg-indigo-500/10" },
            { title: "LLM Prompt Engineering", issuer: "NVIDIA", badge: "text-emerald-500 bg-emerald-500/10" },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border/80 bg-card/80 glass-panel p-4 flex items-center justify-between text-xs shadow-2xs hover:border-foreground/30 transition-all">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="font-bold text-foreground text-xs sm:text-sm">{c.title}</span>
              </div>
              <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-medium ${c.badge}`}>{c.issuer}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Contact Strip */}
      <section className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-0.5 text-center sm:text-left">
          <p className="text-sm font-bold text-foreground">
            Chirumamilla Mahesh Chowdary
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            chirumamillamahesh2005@gmail.com • +91 9573409069
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:scale-[1.02]"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Download Resume</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-xl border border-border/80 bg-card/80 glass-panel px-4 py-2.5 text-xs font-semibold text-foreground hover:bg-muted transition-all"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
