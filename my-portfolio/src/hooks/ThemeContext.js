import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext = createContext({
  theme: "dim",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Default to "dim", but respect localStorage if present
    if (typeof window === "undefined") return "dim";

    const stored = window.localStorage.getItem("theme");
    if (stored === "emerald" || stored === "dim") return stored;

    return "dim";
  });

  // Apply theme to <html data-theme="..."> and sync to localStorage
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "emerald" ? "dim" : "emerald"));
  };

  const value = { theme, setTheme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// Optional convenience hook
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
