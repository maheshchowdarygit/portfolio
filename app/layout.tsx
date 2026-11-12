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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col justify-between selection:bg-blue-500/20 selection:text-blue-500 relative overflow-x-hidden bg-dot-pattern">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
