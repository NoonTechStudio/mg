"use client";

import { useState, useEffect } from "react";

export default function GreetingToast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const dismissTimer = setTimeout(() => setVisible(false), 7000);
    return () => {
      clearTimeout(timer);
      clearTimeout(dismissTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 left-6 z-50 max-w-xs bg-navy border-l-4 border-teal-brand rounded-xl shadow-2xl p-4 flex gap-3 items-start"
      style={{ animation: "slideIn 0.3s ease-out forwards" }}
    >
      <span className="text-xl flex-shrink-0">🌐</span>
      <div className="flex-1">
        <p className="font-heading font-bold text-white text-sm">Welcome to MeridianGrid</p>
        <p className="text-white/50 text-xs mt-0.5 leading-relaxed">
          Connecting Business to Technology — from Vadodara to Europe
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0 ml-1"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
}
