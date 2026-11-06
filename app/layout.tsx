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
    default: "Mahesh | Backend, Data & Applied ML Engineer",
    template: "%s | Mahesh Portfolio",
  },
  description:
    "Portfolio of Mahesh, final-year B.Tech CS at ICFAI Tech, Hyderabad. High-performance backend systems, ML retrieval pipelines, and data analytics dashboards.",
  keywords: [
    "Mahesh",
    "Software Engineer",
    "Backend Developer",
    "Data Analyst",
    "Applied Machine Learning",
    "Go",
    "Python",
    "FastAPI",
    "RAG",
    "Hyderabad",
    "ICFAI Tech",
  ],
  authors: [{ name: "Mahesh" }],
  creator: "Mahesh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Mahesh | Backend, Data & Applied ML Engineer",
    description:
      "Final-year B.Tech CS at ICFAI Tech, Hyderabad. Building high-throughput backend services, ML retrieval pipelines, and actionable data analytics.",
    siteName: "Mahesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh | Backend, Data & Applied ML Engineer",
    description:
      "Backend-strong, ML-literate CS senior targeting Data Analyst and Applied ML software roles at startups.",
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
      <body className="min-h-screen bg-background font-sans antialiased text-foreground flex flex-col justify-between selection:bg-foreground selection:text-background">
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
