import { useEffect } from "react";
import "./ThemeSwitcher.css";

function ThemeSwitcher({ theme, toggleTheme }) {
  const icon = theme === "light" ? "🌻" : "🌑";

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.replace("dark", "light");
    } else {
      document.body.classList.replace("light", "dark");
    }
  }, [theme]);

  return (
    <span className={`theme-switcher`}>
      <button
        type="button"
        className="theme-switcher__toggle"
        onClick={toggleTheme}
      >
        <span className="theme-switcher__switch" />
        {icon}
      </button>
    </span>
  );
}

export default ThemeSwitcher;
