import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { CvProvider } from "@/components/cv-modal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const title = `${site.name} · ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "Alper Karakoyun",
    "Full Stack Developer",
    "Go",
    "Golang",
    "Node.js",
    "TypeScript",
    "Next.js",
    "React",
    "AWS",
  ],
  authors: [{ name: site.name, url: site.social.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description: site.intro,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.intro,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <CvProvider>
            <SiteNav />
            <main>{children}</main>
            <SiteFooter />
          </CvProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
