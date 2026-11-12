import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://mahesh-portfolio.vercel.app"
  ),
  title: {
    default: "Mahesh Chowdary | Software Engineer — Backend Systems & Applied ML",
    template: "%s | Mahesh Chowdary",
  },
  description:
    "Portfolio of Chirumamilla Mahesh Chowdary, Software Engineer at ICFAI Foundation for Higher Education, Hyderabad. Specializing in backend systems, custom Go search engine, RAG pipelines, and relational web architectures.",
  keywords: [
    "Chirumamilla Mahesh Chowdary",
    "Mahesh Chowdary",
    "Software Engineer",
    "Backend Systems",
    "Applied Machine Learning",
    "Go",
    "Python",
    "FastAPI",
    "Streamlit",
    "RAG",
    "ChromaDB",
    "Hyderabad",
    "ICFAI",
  ],
  authors: [{ name: "Chirumamilla Mahesh Chowdary" }],
  creator: "Chirumamilla Mahesh Chowdary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mahesh Chowdary | Software Engineer — Backend Systems & Applied ML",
    description:
      "Chirumamilla Mahesh Chowdary — Software Engineer specializing in backend systems, Go, and applied ML retrieval tools.",
    siteName: "Mahesh Chowdary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Chowdary | Software Engineer — Backend Systems & Applied ML",
    description:
      "Chirumamilla Mahesh Chowdary — Software Engineer specializing in backend systems, Go, and applied ML retrieval tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary relative overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Subtle Ambient Radiant Background Glows */}
          <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            <div className="absolute -top-32 left-1/4 h-[500px] w-[600px] rounded-full bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-sky-400/15 blur-[120px] dark:from-indigo-600/20 dark:via-purple-600/15 dark:to-cyan-400/15" />
            <div className="absolute top-[35%] -right-20 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-blue-500/10 via-cyan-400/10 to-transparent blur-[130px] dark:from-blue-600/15 dark:via-cyan-500/10" />
            <div className="absolute -bottom-20 left-10 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-purple-500/10 via-pink-400/10 to-transparent blur-[140px] dark:from-indigo-900/20 dark:via-purple-800/15" />
          </div>

          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
