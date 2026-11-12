"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";
import { ExternalLink, Github, ArrowRight, Sparkles, Terminal, Brain, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  // Dynamic theme colors per project type
  const isSearchEngine = project.slug.includes("search");
  const isRAG = project.slug.includes("rag");
  const isPortal = project.slug.includes("lost");

  const gradientHeader = isSearchEngine
    ? "from-cyan-500 via-blue-500 to-indigo-500"
    : isRAG
    ? "from-purple-500 via-indigo-500 to-pink-500"
    : "from-amber-500 via-emerald-500 to-teal-500";

  const IconComponent = isSearchEngine ? Terminal : isRAG ? Brain : isPortal ? Database : Layers;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card/80 glass-panel p-6 shadow-md shadow-black/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
    >
      {/* Top Gradient Highlight Bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientHeader} opacity-80 group-hover:opacity-100 group-hover:h-1.5 transition-all`}
      />

      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
              <IconComponent className="h-4 w-4" />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-foreground border border-border/40">
              {project.featured && <Sparkles className="h-3 w-3 text-amber-500" />}
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted/80 border border-transparent hover:border-border/60"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted/80 border border-transparent hover:border-border/60"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.slug}`} className="block group-hover:text-primary transition-colors">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
          </h3>
        </Link>

        {/* Tagline / Description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {/* Key Metrics / Highlights if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-muted/40 p-3 border border-border/50">
            {project.metrics.slice(0, 2).map((metric, i) => (
              <div key={i} className="text-left">
                <span className="block text-[11px] font-medium text-muted-foreground truncate">
                  {metric.label}
                </span>
                <span className="block text-xs sm:text-sm font-bold font-mono text-foreground mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Tags & CTA */}
      <div className="mt-5 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border/40"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-muted-foreground">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-semibold text-primary hover:underline underline-offset-4 inline-flex items-center gap-1 group/link"
        >
          Case Study
          <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
