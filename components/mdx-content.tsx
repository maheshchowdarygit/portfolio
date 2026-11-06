import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-8 mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-8 mb-4 border-b border-border pb-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-6 mb-3 text-lg font-semibold tracking-tight text-foreground"
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 text-base leading-relaxed text-muted-foreground"
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mb-4 ml-6 list-disc space-y-1.5 text-muted-foreground" {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mb-4 ml-6 list-decimal space-y-1.5 text-muted-foreground" {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="my-4 border-l-4 border-primary/60 bg-muted/40 p-4 rounded-r-lg italic text-muted-foreground text-sm"
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-left text-sm" {...props} />
    </div>
  ),
  thead: ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b border-border bg-muted/60 text-foreground font-semibold" {...props} />
  ),
  th: ({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-4 py-3 text-left font-semibold" {...props} />
  ),
  td: ({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-4 py-3 border-t border-border/40 text-muted-foreground" {...props} />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="my-4 overflow-x-auto rounded-lg bg-zinc-950 p-4 text-zinc-100 border border-zinc-800 text-xs sm:text-sm font-mono leading-relaxed"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    // If inside pre, props.children is code string
    return (
      <code
        className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground font-medium"
        {...props}
      />
    );
  },
  hr: () => <hr className="my-8 border-border" />,
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) {
      return (
        <Link
          href={href}
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          {...props}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        {...props}
      >
        {children}
        <ExternalLink className="h-3 w-3 inline" />
      </a>
    );
  },
};

interface MDXContentProps {
  source: string;
}

export function MDXContent({ source }: MDXContentProps) {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <MDXRemote source={source} components={components} />
    </div>
  );
}
