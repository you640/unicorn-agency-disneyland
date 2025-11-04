import React from "react";
import { useTheme } from "../hooks/useTheme";

const ThemeSwitcher: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="ml-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === "light" ? (
        <span title="Svetlý režim">🌞</span>
      ) : (
        <span title="Tmavý režim">🌙</span>
      )}
    </button>
  );
};

export default ThemeSwitcher;
