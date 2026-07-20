import type { Metadata } from "next";
import "./globals.css";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "MeridianGrid — Engineering Modern Digital Products & Enterprise Cloud Solutions",
  description:
    "MeridianGrid is a premier technology solutions studio based in Vadodara, India, serving clients across Europe & global markets. Custom software, Google Workspace Enterprise, AppSheet apps, Cloud Infrastructure & AI Automations.",
  keywords:
    "custom software development, Google Cloud Partner, Google Workspace Enterprise, AppSheet, Firebase, AI Automations, Next.js agency, web design, Vadodara, Europe, technology solutions",
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
    url: "https://www.meridiangrid.in",
    siteName: "MeridianGrid Studio",
    locale: "en_US",
    type: "website",
    images: [{ url: "/favicon.png" }],
  },
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
        {children}
      </body>
    </html>
  );
}

