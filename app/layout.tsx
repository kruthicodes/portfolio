import type { Metadata } from "next";
import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navigation } from "@/components/navigation";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-website.vercel.app"),
  title: "SDE 2 Portfolio | Full-Stack Engineer & AI Systems Builder",
  description:
    "Portfolio of a full-stack engineer building scalable systems, intelligent AI applications, and impactful technical education experiences.",
  keywords: [
    "SDE 2",
    "full-stack developer",
    "AI systems builder",
    "public speaker",
    "technology tutor",
    "Next.js portfolio"
  ],
  openGraph: {
    title: "Building Scalable Systems & Intelligent AI Applications",
    description:
      "Software engineering portfolio featuring systems architecture, AI products, speaking, and mentorship.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "SDE 2 Portfolio",
    description: "Scalable systems, AI applications, speaking, and mentorship."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${fraunces.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
