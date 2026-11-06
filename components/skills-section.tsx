import { Server, Brain, Wrench, Database, Cpu, Terminal } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; highlight?: boolean }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems",
    subtitle: "High-performance services, concurrency & distributed primitives",
    icon: <Server className="h-4 w-4 text-emerald-500" />,
    skills: [
      { name: "Go (Golang)", highlight: true },
      { name: "Python", highlight: true },
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "Redis" },
      { name: "REST APIs", highlight: true },
      { name: "Goroutines & Channels" },
      { name: "Inverted Indexes" },
    ],
  },
  {
    title: "ML, Data & Retrieval",
    subtitle: "RAG architectures, predictive modeling & analytics",
    icon: <Brain className="h-4 w-4 text-indigo-500" />,
    skills: [
      { name: "PyTorch" },
      { name: "Scikit-Learn", highlight: true },
      { name: "Pandas & NumPy", highlight: true },
      { name: "XGBoost & LightGBM" },
      { name: "RAG Pipelines", highlight: true },
      { name: "Vector Search (Pinecone)" },
      { name: "BM25 Ranking" },
      { name: "Tree-Sitter AST" },
      { name: "SHAP Explainability" },
      { name: "Data Modeling / ETL" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    subtitle: "Development workflows, deployment & containerization",
    icon: <Wrench className="h-4 w-4 text-amber-500" />,
    skills: [
      { name: "Docker", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Linux / Bash" },
      { name: "Next.js & TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Streamlit" },
      { name: "Vercel" },
      { name: "Postman" },
      { name: "CI / CD Actions" },
    ],
  },
];

export function SkillsSection() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Technical Skills & Stack
        </h2>
        <p className="text-sm text-muted-foreground">
          Core proficiencies spanning backend system architecture, machine learning pipelines, and modern engineering tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm hover:border-foreground/20 transition-colors"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-muted">{cat.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                {cat.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono border transition-all ${
                      skill.highlight
                        ? "bg-foreground/5 text-foreground border-foreground/20 font-medium"
                        : "bg-muted/40 text-muted-foreground border-border/60 hover:text-foreground"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
