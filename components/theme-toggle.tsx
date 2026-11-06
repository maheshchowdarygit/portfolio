"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg border border-border bg-background/50" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground shadow-sm backdrop-blur-sm transition-all hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 text-amber-400" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-300 rotate-0 scale-100 text-slate-700" />
      )}
    </button>
  );
}
