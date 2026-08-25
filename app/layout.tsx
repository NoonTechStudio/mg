import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const siteUrl = "https://www.meridiangrid.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MeridianGrid — Engineering Modern Digital Products & Enterprise Cloud Solutions",
    template: "%s | MeridianGrid",
  },
  description:
    "MeridianGrid is a premier technology solutions studio based in Vadodara, India, serving clients across Europe & global markets. Custom software, Google Workspace Enterprise, AppSheet apps, Cloud Infrastructure & AI Automations.",
  keywords:
    "custom software development, Google Cloud Partner, Google Workspace Enterprise, AppSheet, Firebase, AI Automations, Next.js agency, web design, Vadodara, Europe, technology solutions",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  openGraph: {
    title: "MeridianGrid — Engineering Modern Digital Products & Enterprise Cloud Solutions",
    description:
      "Global Engineering Standards, Seamless Timezone Alignment. From Vadodara to Europe & Worldwide.",
    url: siteUrl,
    siteName: "MeridianGrid Studio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/favicon.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MeridianGrid — Engineering Modern Digital Products & Enterprise Cloud Solutions",
    description:
      "Global Engineering Standards, Seamless Timezone Alignment. From Vadodara to Europe & Worldwide.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MeridianGrid",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  image: `${siteUrl}/logo.png`,
  description:
    "MeridianGrid is a premier technology solutions studio based in Vadodara, India, offering custom software development, Google Workspace Enterprise, AppSheet applications, cloud infrastructure, and AI automations.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  telephone: "+91-80004-03090",
  email: "hello@meridiangrid.in",
  areaServed: ["IN", "Europe", "Global"],
  sameAs: ["https://github.com/MeridianGrid"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth dark",
        inter.variable,
        jakarta.variable,
        jetbrainsMono.variable
      )}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-NL0E3105NF" />
    </html>
  );
}

