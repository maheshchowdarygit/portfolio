"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`group relative flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-foreground/30 hover:shadow-md ${
        featured ? "bg-gradient-to-br from-card via-card to-muted/20" : ""
      }`}
    >
      <div>
        {/* Top Meta Bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-foreground">
            {project.featured && <Sparkles className="h-3 w-3 text-amber-500" />}
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted"
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
                className="text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-muted"
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
            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground" />
          </h3>
        </Link>

        {/* Tagline / Description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {project.tagline}
        </p>

        {/* Key Metrics / Highlights if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-2 gap-2 rounded-lg bg-muted/40 p-2.5 border border-border/40">
            {project.metrics.slice(0, 2).map((metric, i) => (
              <div key={i} className="text-left">
                <span className="block text-[11px] font-medium text-muted-foreground">
                  {metric.label}
                </span>
                <span className="block text-xs sm:text-sm font-semibold font-mono text-foreground">
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
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground"
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
          className="text-xs font-semibold text-foreground hover:underline underline-offset-4 inline-flex items-center gap-1"
        >
          Case Study
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </motion.article>
  );
}
