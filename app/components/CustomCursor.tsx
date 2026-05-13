"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovered(
        target.tagName === "A" ||
          target.tagName === "BUTTON" ||
          !!target.closest("a") ||
          !!target.closest("button")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-navy transition-transform duration-75"
        style={{
          width: 8,
          height: 8,
          left: pos.x - 4,
          top: pos.y - 4,
          transform: hovered ? "scale(0)" : "scale(1)",
        }}
      />
      {/* Ring */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full border-2 border-teal-brand transition-all duration-200"
        style={{
          width: hovered ? 40 : 24,
          height: hovered ? 40 : 24,
          left: pos.x - (hovered ? 20 : 12),
          top: pos.y - (hovered ? 20 : 12),
          opacity: hovered ? 0.8 : 0.4,
        }}
      />
    </>
  );
}
