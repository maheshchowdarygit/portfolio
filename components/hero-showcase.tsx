"use client";

import * as React from "react";
import { Terminal, Brain, Activity, Zap, Check, Sparkles, Play, Code, Database } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = React.useState<"search" | "rag" | "stats">("search");
  const [searchQuery, setSearchQuery] = React.useState("concurrency");
  const [isRunning, setIsRunning] = React.useState(false);
  const [latency, setLatency] = React.useState(3.8);

  const searchDemos: Record<string, { docs: string[]; score: number; count: number }> = {
    concurrency: {
      docs: ["pkg/engine/worker_pool.go", "internal/indexer/pipeline.go"],
      score: 0.942,
      count: 142,
    },
    goroutine: {
      docs: ["pkg/engine/dispatcher.go", "internal/search/parallel.go"],
      score: 0.915,
      count: 98,
    },
    inverted_index: {
      docs: ["internal/index/trie.go", "pkg/index/postings_list.go"],
      score: 0.988,
      count: 312,
    },
  };

  const handleQueryChange = (q: string) => {
    setIsRunning(true);
    setSearchQuery(q);
    setTimeout(() => {
      setLatency(Number((2.5 + Math.random() * 2.5).toFixed(2)));
      setIsRunning(false);
    }, 180);
  };

  const activeData = searchDemos[searchQuery] || searchDemos.concurrency;

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-card/70 glass-panel shadow-xl shadow-indigo-500/5 overflow-hidden transition-all">
      {/* Window Titlebar */}
      <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
            <Terminal className="h-3 w-3 text-primary" />
            <span>systems-playground.sh</span>
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-background/80 p-0.5 rounded-lg border border-border/50 text-xs">
          <button
            onClick={() => setActiveTab("search")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium text-[11px] ${
              activeTab === "search"
                ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Zap className="h-3 w-3" />
            <span>Go Engine</span>
          </button>
          <button
            onClick={() => setActiveTab("rag")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium text-[11px] ${
              activeTab === "rag"
                ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Brain className="h-3 w-3" />
            <span>AI RAG</span>
          </button>
          <button
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all font-medium text-[11px] ${
              activeTab === "stats"
                ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Activity className="h-3 w-3" />
            <span>Telemetry</span>
          </button>
        </div>
      </div>

      {/* Tab Contents */}
      <div className="p-4 sm:p-5 font-mono text-xs">
        <AnimatePresence mode="wait">
          {activeTab === "search" && (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="space-y-4"
            >
              {/* Interactive Query Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-muted-foreground font-sans">Try Query:</span>
                {["concurrency", "goroutine", "inverted_index"].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQueryChange(q)}
                    className={`px-2.5 py-1 rounded-md border text-[11px] transition-all flex items-center gap-1 ${
                      searchQuery === q
                        ? "border-sky-500 bg-sky-500/10 text-sky-600 dark:text-sky-300 font-semibold"
                        : "border-border bg-muted/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{q}</span>
                    {searchQuery === q && <Check className="h-3 w-3" />}
                  </button>
                ))}
              </div>

              {/* Terminal Code Preview */}
              <div className="rounded-xl bg-zinc-950 p-4 text-zinc-100 border border-zinc-800 space-y-2.5 shadow-inner">
                <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-2 border-b border-zinc-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">$</span>
                    <span>go run ./cmd/engine --query=&quot;{searchQuery}&quot;</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                    <Zap className="h-2.5 w-2.5" />
                    <span>{latency}ms</span>
                  </span>
                </div>

                <div className="space-y-1 text-[11px] text-zinc-300 leading-relaxed">
                  <p className="text-zinc-500">
                    // Parsed tokenizer tokens: [{searchQuery}], TF-IDF postings: {activeData.count} entries
                  </p>
                  <p className="text-sky-400 font-semibold">
                    ✓ Top Postings Ranked (Cosine Similarity / Okapi BM25):
                  </p>
                  {activeData.docs.map((doc, idx) => (
                    <div key={doc} className="flex items-center justify-between pl-2 border-l border-sky-500/40">
                      <span className="text-zinc-200">
                        [{idx + 1}] {doc}
                      </span>
                      <span className="text-amber-400 text-[10px]">
                        score: {(activeData.score - idx * 0.04).toFixed(3)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground font-sans pt-1">
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <Check className="h-3.5 w-3.5" /> Zero external dependencies • Custom Go Inverted Index
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Go 1.22</span>
              </div>
            </motion.div>
          )}

          {activeTab === "rag" && (
            <motion.div
              key="rag"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="space-y-3.5"
            >
              <div className="rounded-xl bg-zinc-950 p-4 text-zinc-100 border border-zinc-800 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-[11px] text-zinc-400 pb-2 border-b border-zinc-800/80">
                  <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                    <Brain className="h-3 w-3" />
                    <span>RAG Pipeline Trace (ChromaDB + Claude 3.5 Sonnet)</span>
                  </span>
                  <span className="text-zinc-500 text-[10px]">k=3 chunks</span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <div className="flex items-start gap-2 text-zinc-300">
                    <span className="text-purple-400 font-bold shrink-0">1. Query:</span>
                    <span className="text-zinc-100 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
                      &quot;How does the session authentication middleware handle token refresh?&quot;
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <span className="text-indigo-400 font-bold shrink-0">2. Vector Search:</span>
                    <span className="text-zinc-400">
                      Embedded via <code className="text-indigo-300">all-MiniLM-L6-v2</code> → retrieved 3 relevant AST chunks in <span className="text-emerald-400">142ms</span>
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-zinc-300">
                    <span className="text-emerald-400 font-bold shrink-0">3. Generation:</span>
                    <span className="text-zinc-300 leading-relaxed">
                      Claude synthesizes grounded answer with exact line citations to <code className="text-amber-300">auth/middleware.py:42-68</code>.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-muted-foreground font-sans pt-1">
                <span className="flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium">
                  <Sparkles className="h-3.5 w-3.5" /> Anthropic Claude API • ChromaDB Vector Store • Streamlit
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">Python 3.11</span>
              </div>
            </motion.div>
          )}

          {activeTab === "stats" && (
            <motion.div
              key="stats"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
              className="space-y-3"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <div className="rounded-xl border border-border/60 bg-background/80 p-3 space-y-1">
                  <span className="text-[10px] text-muted-foreground font-mono">Query Latency</span>
                  <p className="text-lg font-bold font-mono text-emerald-500">&lt; 10ms</p>
                  <span className="text-[10px] text-muted-foreground">Custom Go Inverted Index</span>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/80 p-3 space-y-1">
                  <span className="text-[10px] text-muted-foreground font-mono">Team Leadership</span>
                  <p className="text-lg font-bold font-mono text-indigo-500">200+ Peers</p>
                  <span className="text-[10px] text-muted-foreground">Tech Lead (IIIT-H / Swecha)</span>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/80 p-3 space-y-1">
                  <span className="text-[10px] text-muted-foreground font-mono">Delivery Rate</span>
                  <p className="text-lg font-bold font-mono text-sky-500">100%</p>
                  <span className="text-[10px] text-muted-foreground">On-Time Sprint Milestones</span>
                </div>
                <div className="rounded-xl border border-border/60 bg-background/80 p-3 space-y-1">
                  <span className="text-[10px] text-muted-foreground font-mono">B.Tech Degree</span>
                  <p className="text-lg font-bold font-mono text-amber-500">2023–27</p>
                  <span className="text-[10px] text-muted-foreground">ICFAI Hyderabad CSE</span>
                </div>
              </div>

              <div className="rounded-xl bg-muted/40 p-3 border border-border/40 text-[11px] text-muted-foreground font-sans">
                <p>
                  🚀 Ready for high-impact production contributions in <strong className="text-foreground">Backend Architecture</strong>, <strong className="text-foreground">Systems in Go/Python</strong>, and <strong className="text-foreground">Applied Machine Learning</strong>.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}