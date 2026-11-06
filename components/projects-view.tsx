"use client";

import * as React from "react";
import { Project } from "@/lib/projects";
import { ProjectCard } from "@/components/project-card";
import { Search, SlidersHorizontal } from "lucide-react";

interface ProjectsViewProps {
  initialProjects: Project[];
}

const CATEGORIES = [
  "All",
  "Backend",
  "Machine Learning",
  "Data Analytics",
  "Full Stack",
] as const;

export function ProjectsView({ initialProjects }: ProjectsViewProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const filteredProjects = React.useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Controls: Search & Category Filter Pills */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                  isSelected
                    ? "bg-foreground text-background font-semibold shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[220px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search Go, RAG, Python..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      {/* Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-12 text-center space-y-3">
          <p className="text-sm font-semibold text-foreground">
            No projects found matching your criteria.
          </p>
          <p className="text-xs text-muted-foreground">
            Try adjusting your search query or selecting a different category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="text-xs underline underline-offset-4 text-foreground font-medium"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
