const techStack = [
  "Next.js", "React", "Node.js", "Python", "TypeScript",
  "PostgreSQL", "Flutter", "AWS", "Supabase", "Tailwind CSS",
  "FastAPI", "Firebase", "Google Cloud", "AppSheet",
  "Google Workspace", "Framer Motion",
];

export default function TrustBar() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-10 bg-surface border-y border-blue-brand/10 overflow-hidden">
      <div className="relative">
        <div className="flex marquee-track gap-0 w-max">
          {doubled.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-2.5 mx-2 border border-blue-brand/15 rounded-full bg-white whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-brand flex-shrink-0" />
              <span className="text-mid-text text-sm font-medium font-heading">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
