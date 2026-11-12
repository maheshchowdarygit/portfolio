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
  const isSearchEngine = project.slug.includes("search");
  const isRAG = project.slug.includes("rag");

  const borderAccent = isSearchEngine
    ? "border-t-2 border-t-blue-500"
    : isRAG
    ? "border-t-2 border-t-purple-500"
    : "border-t-2 border-t-zinc-400 dark:border-t-zinc-600";

  const iconStyle = isSearchEngine
    ? "text-blue-500 bg-blue-500/10 border-blue-500/20"
    : isRAG
    ? "text-purple-500 bg-purple-500/10 border-purple-500/20"
    : "text-zinc-500 dark:text-zinc-400 bg-zinc-500/10 border-zinc-500/20";

  const IconComponent = isSearchEngine ? Terminal : isRAG ? Brain : Database;

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={`group relative flex flex-col justify-between rounded-2xl border border-border ${borderAccent} bg-card glass-panel p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded-lg border ${iconStyle}`}>
              <IconComponent className="h-4 w-4" />
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-foreground border border-border">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
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
                className="text-muted-foreground hover:text-foreground transition-colors p-1.5 rounded-lg hover:bg-muted border border-transparent hover:border-border"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.slug}`} className="block group-hover:text-blue-500 transition-colors">
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-blue-500" />
          </h3>
        </Link>

        {/* Tagline / Description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {/* Key Metrics / Highlights if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-muted/60 p-3 border border-border">
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
      <div className="mt-5 pt-4 border-t border-border flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground border border-border"
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
          className="text-xs font-semibold text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:underline underline-offset-4 inline-flex items-center gap-1 group/link"
        >
          Case Study
          <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
