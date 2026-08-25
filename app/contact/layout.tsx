import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MeridianGrid's engineering team for a free consultation on web design, custom software, Google Workspace, AppSheet, or cloud & AI projects.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
