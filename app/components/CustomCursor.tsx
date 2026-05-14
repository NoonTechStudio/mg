"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    dot.style.opacity = "1";
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      // transform is GPU-accelerated — no layout recalculation, no jerk
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    window.addEventListener("mousemove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 top-0 left-0 opacity-0"
      style={{ willChange: "transform" }}
    >
      <div className="w-3 h-3 rounded-full bg-teal-brand/70" />
    </div>
  );
}
