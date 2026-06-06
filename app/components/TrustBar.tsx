import { Separator } from "@/components/ui/separator";

const techStack = [
  "Next.js", "React", "Node.js", "Python", "TypeScript",
  "PostgreSQL", "Flutter", "AWS", "Supabase", "Tailwind CSS",
  "FastAPI", "Firebase", "Google Cloud", "AppSheet",
  "Google Workspace", "Framer Motion",
];

export default function TrustBar() {
  const doubled = [...techStack, ...techStack];
  return (
    <section className="relative bg-white overflow-hidden py-0">
      <Separator className="bg-blue-brand/10" />
      <div className="py-5 overflow-hidden">
        <div className="flex marquee-track gap-0 w-max">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2 mx-2 border border-slate-200 rounded-full bg-white whitespace-nowrap select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-brand flex-shrink-0" />
              <span className="text-mid-text text-sm font-medium font-heading">{tech}</span>
            </div>
          ))}
        </div>
      </div>
      <Separator className="bg-blue-brand/10" />
    </section>
  );
}
