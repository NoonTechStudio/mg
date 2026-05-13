interface GridBackgroundProps {
  variant?: "dots" | "lines";
  opacity?: number;
  dark?: boolean;
  className?: string;
}

export default function GridBackground({
  variant = "dots",
  opacity = 0.04,
  dark = false,
  className = "",
}: GridBackgroundProps) {
  const style =
    variant === "dots"
      ? {
          backgroundImage: `radial-gradient(circle, rgba(46,134,222,${opacity * 3}) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }
      : {
          backgroundImage: `linear-gradient(to right, rgba(46,134,222,${dark ? opacity * 1.5 : opacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(46,134,222,${dark ? opacity * 1.5 : opacity}) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        };

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={style}
    />
  );
}
