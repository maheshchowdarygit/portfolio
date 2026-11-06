import { Server, Brain, Wrench, Award, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; highlight?: boolean }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    subtitle: "Primary programming languages, backend systems & systems design",
    icon: <Server className="h-4 w-4 text-emerald-500" />,
    skills: [
      { name: "Python (Pandas, NumPy)", highlight: true },
      { name: "Go (Golang)", highlight: true },
      { name: "SQL (MySQL)", highlight: true },
      { name: "Backend & API Design", highlight: true },
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "System Design", highlight: true },
    ],
  },
  {
    title: "AI, ML & Libraries",
    subtitle: "RAG architectures, vector embeddings & deep learning frameworks",
    icon: <Brain className="h-4 w-4 text-indigo-500" />,
    skills: [
      { name: "RAG Systems", highlight: true },
      { name: "ChromaDB (Vector Search)", highlight: true },
      { name: "Sentence-Transformers", highlight: true },
      { name: "Anthropic API", highlight: true },
      { name: "TensorFlow & Keras" },
      { name: "OpenCV" },
      { name: "TF-IDF & Inverted Index" },
    ],
  },
  {
    title: "Tools & Other Stack",
    subtitle: "Version control, containerization & complementary languages",
    icon: <Wrench className="h-4 w-4 text-amber-500" />,
    skills: [
      { name: "Git & GitLab", highlight: true },
      { name: "Linux / Bash", highlight: true },
      { name: "Streamlit", highlight: true },
      { name: "SQLite" },
      { name: "Java" },
      { name: "PHP" },
      { name: "JavaScript" },
      { name: "HTML5 / CSS3" },
      { name: "C" },
    ],
  },
];

const certifications = [
  {
    title: "Azure AI Fundamentals",
    issuer: "Microsoft",
    tag: "AI / Cloud",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    tag: "Cloud",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    tag: "Security",
  },
  {
    title: "LLM Prompt Engineering",
    issuer: "NVIDIA",
    tag: "Generative AI",
  },
];

export function SkillsSection() {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-1">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Technical Skills & Certifications
        </h2>
        <p className="text-sm text-muted-foreground">
          Skills spanning backend architecture, applied machine learning retrieval, and foundational systems programming.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="flex flex-col justify-between rounded-xl border border-border/70 bg-card p-5 shadow-2xs hover:border-foreground/20 transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <div className="p-1.5 rounded-lg bg-muted text-foreground">{cat.icon}</div>
                <h3 className="font-semibold text-sm sm:text-base text-foreground">
                  {cat.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                {cat.subtitle}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`text-xs px-2.5 py-1 rounded-md font-mono border transition-all ${
                      skill.highlight
                        ? "bg-foreground/5 text-foreground border-foreground/20 font-medium"
                        : "bg-muted/40 text-muted-foreground border-border/50 hover:text-foreground"
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

      {/* Certifications Block */}
      <div className="rounded-xl border border-border/70 bg-card/60 p-5 space-y-4">
        <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
          <Award className="h-4 w-4 text-amber-500" />
          <span>Industry Certifications</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-lg border border-border/60 bg-background/80 p-3 flex flex-col justify-between gap-2 shadow-2xs hover:border-foreground/20 transition-colors"
            >
              <div>
                <span className="inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground mb-1">
                  {cert.tag}
                </span>
                <h4 className="text-xs font-semibold text-foreground leading-snug">
                  {cert.title}
                </h4>
              </div>
              <span className="text-[11px] text-muted-foreground font-mono">
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
