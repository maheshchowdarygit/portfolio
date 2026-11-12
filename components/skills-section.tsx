"use client";

import * as React from "react";
import { Server, Brain, Wrench, Award, CheckCircle2, Sparkles, Shield, Cpu, Cloud, Terminal } from "lucide-react";
import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  borderAccent: string;
  badgeColor: string;
  skills: Array<{ name: string; highlight?: boolean }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies & Systems",
    subtitle: "High-performance backend systems, systems architecture & data structures",
    icon: <Server className="h-5 w-5 text-blue-500" />,
    borderAccent: "border-t-2 border-t-blue-500",
    badgeColor: "border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10",
    skills: [
      { name: "Go (Golang)", highlight: true },
      { name: "Python (Pandas, NumPy)", highlight: true },
      { name: "SQL (MySQL, Relational Design)", highlight: true },
      { name: "Backend API Engineering", highlight: true },
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Concurrent Systems Design", highlight: true },
    ],
  },
  {
    title: "AI, RAG & Machine Learning",
    subtitle: "Dense semantic retrieval, vector search & deep learning pipelines",
    icon: <Brain className="h-5 w-5 text-purple-500" />,
    borderAccent: "border-t-2 border-t-purple-500",
    badgeColor: "border-purple-500/30 text-purple-600 dark:text-purple-400 bg-purple-500/10",
    skills: [
      { name: "RAG Architectures", highlight: true },
      { name: "ChromaDB (Vector Search)", highlight: true },
      { name: "Sentence-Transformers", highlight: true },
      { name: "Anthropic Claude API", highlight: true },
      { name: "TensorFlow & Keras" },
      { name: "OpenCV" },
      { name: "Inverted Index & BM25 / TF-IDF" },
    ],
  },
  {
    title: "Developer Tools & Infrastructure",
    subtitle: "Version control, Linux environments, CI/CD workflows & complementary tech",
    icon: <Wrench className="h-5 w-5 text-zinc-400" />,
    borderAccent: "border-t-2 border-t-zinc-400 dark:border-t-zinc-600",
    badgeColor: "border-zinc-500/30 text-zinc-700 dark:text-zinc-300 bg-zinc-500/10",
    skills: [
      { name: "Git & GitLab CI", highlight: true },
      { name: "Linux / Bash Scripting", highlight: true },
      { name: "Streamlit UI", highlight: true },
      { name: "SQLite" },
      { name: "Java" },
      { name: "PHP" },
      { name: "JavaScript / TypeScript" },
      { name: "HTML5 / Tailwind CSS" },
      { name: "C Programming" },
    ],
  },
];

const certifications = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    tag: "AI / Cloud",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    tag: "Cloud Architecture",
    badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    tag: "Security",
    badgeBg: "bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/20",
  },
  {
    title: "LLM Prompt Engineering",
    issuer: "NVIDIA",
    tag: "Generative AI",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
];

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-1.5 border-b border-border pb-4">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Cpu className="h-3.5 w-3.5 text-blue-500" />
          <span>Technical Stack</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
          Skills & Certifications
        </h2>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Core engineering strengths bridging high-throughput backend services, retrieval-augmented intelligence, and structured data systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className={`flex flex-col justify-between rounded-2xl border border-border ${cat.borderAccent} bg-card glass-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden`}
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-card border border-border shadow-xs">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-base text-foreground leading-snug">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                {cat.subtitle}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-2.5 py-1 rounded-lg font-mono border transition-all ${
                      skill.highlight
                        ? `${cat.badgeColor} font-semibold shadow-2xs hover:scale-[1.02]`
                        : "bg-muted/50 text-muted-foreground border-border hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Block */}
      <div className="rounded-2xl border border-border bg-card glass-panel p-6 sm:p-7 space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-foreground font-bold text-base">
            <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500 border border-blue-500/20">
              <Award className="h-4 w-4" />
            </div>
            <span>Industry Certifications</span>
          </div>
          <span className="text-xs font-mono text-muted-foreground">Verified Credentials</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-1">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="group/cert rounded-xl border border-border bg-background p-4 flex flex-col justify-between gap-3 shadow-2xs hover:border-foreground/30 hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              <div>
                <span className={`inline-block text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md border mb-2 ${cert.badgeBg}`}>
                  {cert.tag}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-foreground leading-snug group-hover/cert:text-blue-500 transition-colors">
                  {cert.title}
                </h4>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-border text-[11px] font-mono text-muted-foreground">
                <span>{cert.issuer}</span>
                <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
