import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-muted border border-border text-foreground font-mono font-bold text-2xl shadow-inner">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The page or project case study you were looking for does not exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-semibold text-background hover:bg-foreground/90 transition-all shadow-sm"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-all"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
