import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content/projects");

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectMetadata {
  slug: string;
  title: string;
  description: string;
  tagline: string;
  category: "Backend" | "Machine Learning" | "Data Analytics" | "Full Stack";
  tags: string[];
  date: string;
  featured: boolean;
  order: number;
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl?: string;
  role?: string;
  duration?: string;
}

export interface Project extends ProjectMetadata {
  content: string;
}

export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    return [];
  }
  const fileNames = fs.readdirSync(PROJECTS_DIRECTORY);
  return fileNames
    .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
    .map((file) => file.replace(/\.mdx?$/, ""));
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPathMdx = path.join(PROJECTS_DIRECTORY, `${slug}.mdx`);
    const fullPathMd = path.join(PROJECTS_DIRECTORY, `${slug}.md`);
    const fullPath = fs.existsSync(fullPathMdx) ? fullPathMdx : fullPathMd;

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      tagline: data.tagline || data.description || "",
      category: data.category || "Backend",
      tags: data.tags || [],
      date: data.date || "2024",
      featured: Boolean(data.featured),
      order: data.order ?? 99,
      metrics: data.metrics || [],
      githubUrl: data.githubUrl || "https://github.com/maheshchowdarygit",
      liveUrl: data.liveUrl || undefined,
      role: data.role || "Lead Developer",
      duration: data.duration || "4 weeks",
      content,
    };
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error);
    return null;
  }
}

export function getAllProjects(): Project[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is Project => project !== null)
    .sort((a, b) => a.order - b.order);

  return projects;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}
