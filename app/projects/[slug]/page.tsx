import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAllProjectSlugs, getProjectBySlug, getAllProjects } from "@/lib/projects";
import { MDXContent } from "@/components/mdx-content";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Clock,
  User,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Back button */}
      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
            {project.featured && <Sparkles className="h-3 w-3 text-amber-500" />}
            {project.category}
          </span>
          <span className="text-xs text-muted-foreground font-mono">
            {project.date}
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Meta Bar (Role, Duration, Links) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/40">
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            {project.role && (
              <div className="flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-foreground/70" />
                <span>{project.role}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-foreground/70" />
                <span>{project.duration}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors shadow-sm"
              >
                <Github className="h-3.5 w-3.5" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-colors shadow-sm"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Key Metrics Chips */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {project.metrics.map((metric, i) => (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-3 shadow-xs"
              >
                <span className="block text-[11px] font-medium text-muted-foreground">
                  {metric.label}
                </span>
                <span className="block text-sm sm:text-base font-bold font-mono text-foreground mt-0.5">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Case Study Content (MDX Rendered) */}
      <section className="case-study-content">
        <MDXContent source={project.content} />
      </section>

      {/* Project Navigation Footer */}
      <footer className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevProject ? (
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex flex-col items-start gap-1 p-3 rounded-lg border border-border/60 hover:bg-muted/40 transition-colors w-full sm:w-auto"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
              Previous Project
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              ← {prevProject.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex flex-col items-end gap-1 p-3 rounded-lg border border-border/60 hover:bg-muted/40 transition-colors w-full sm:w-auto text-right"
          >
            <span className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
              Next Project
            </span>
            <span className="text-xs sm:text-sm font-semibold text-foreground">
              {nextProject.title} →
            </span>
          </Link>
        ) : (
          <div />
        )}
      </footer>
    </article>
  );
}
