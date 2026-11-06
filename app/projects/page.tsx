import { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { ProjectsView } from "@/components/projects-view";
import { FolderGit2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore projects built by Mahesh: Go search engine, code RAG Q&A, and campus asset portals.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
      {/* Header */}
      <div className="space-y-3 border-b border-border/40 pb-6">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <FolderGit2 className="h-3.5 w-3.5 text-primary" />
          <span>Engineering Portfolio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Projects & Case Studies
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          Deep-dive technical case studies covering systems engineering, retrieval-augmented generation, and full-stack web applications. Click any project to inspect problem statements, architecture, and quantitative outcomes.
        </p>
      </div>

      {/* Interactive Grid & Filters */}
      <ProjectsView initialProjects={projects} />
    </div>
  );
}
