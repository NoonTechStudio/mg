interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span
        className={`inline-block w-6 h-px ${light ? "bg-teal-brand" : "bg-teal-brand"}`}
      />
      <span
        className={`text-xs font-semibold tracking-[0.2em] uppercase font-heading ${
          light ? "text-teal-brand" : "text-teal-brand"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
