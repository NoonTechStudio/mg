import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "MeridianGrid — Connecting Business to Technology",
  description:
    "MeridianGrid is a full-service technology solutions company based in Vadodara, India. Custom software, Google Workspace, AppSheet apps, cloud infrastructure, and AI integrations — serving clients globally.",
  keywords:
    "custom software development, Google Workspace, AppSheet, Firebase, GCP, web design, Vadodara, India, technology solutions",
  openGraph: {
    title: "MeridianGrid — Connecting Business to Technology",
    description:
      "Your A to Z technology partner — from Vadodara to Europe.",
    url: "https://meridiangrid.in",
    siteName: "MeridianGrid",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full scroll-smooth", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
