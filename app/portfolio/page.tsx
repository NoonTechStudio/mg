import { redirect } from "next/navigation";

// Portfolio section is currently hidden — redirect visitors to homepage
export default function PortfolioPage() {
  redirect("/");
}
