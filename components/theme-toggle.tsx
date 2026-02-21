"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";
  const label = mounted ? (isDark ? "Light" : "Dark") : "Theme";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="surface px-3 py-1.5 text-xs font-medium text-muted transition hover:-translate-y-0.5 hover:text-ink"
    >
      {label}
    </button>
  );
}
