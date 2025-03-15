"use client";

import { useThemeStore } from "@/store/use-theme";
import React, { useEffect } from "react";

const ThemeSwitcher = () => {
  const { isDark, toggleDarkMode } = useThemeStore();

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "";
  }, [isDark]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 cursor-pointer"
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
};

export default ThemeSwitcher;
