"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({ text, label = "Copy", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      aria-label={`Copy ${text}`}
      title={`Copy ${text}`}
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-mono transition-all hover:bg-muted active:scale-95 text-muted-foreground hover:text-foreground ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-500" />
          <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span className="text-[11px]">{label}</span>
        </>
      )}
    </button>
  );
}
