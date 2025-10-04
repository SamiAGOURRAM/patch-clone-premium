import { createContext, useContext, useState, ReactNode } from "react";

export type ActivityTheme = 
  | "amenagement"
  | "conseil"
  | "relation"
  | "transmission"
  | "solutions"
  | "default";

interface ThemeContextType {
  activeTheme: ActivityTheme;
  setActiveTheme: (theme: ActivityTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeColors = {
  default: {
    primary: "16 100% 60%", // Orange
    secondary: "0 0% 96%",
    accent: "16 100% 60%",
  },
  amenagement: {
    primary: "142 71% 45%", // Natural green
    secondary: "142 25% 96%",
    accent: "142 71% 45%",
  },
  conseil: {
    primary: "221 83% 53%", // Deep blue
    secondary: "221 30% 96%",
    accent: "221 83% 53%",
  },
  relation: {
    primary: "263 70% 50%", // Violet/Indigo
    secondary: "263 25% 96%",
    accent: "263 70% 50%",
  },
  transmission: {
    primary: "38 92% 50%", // Gold/Warm orange
    secondary: "38 25% 96%",
    accent: "38 92% 50%",
  },
  solutions: {
    primary: "0 0% 45%", // Gray
    secondary: "0 0% 96%",
    accent: "0 0% 45%",
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeTheme, setActiveTheme] = useState<ActivityTheme>("default");

  const updateTheme = (theme: ActivityTheme) => {
    setActiveTheme(theme);
    const colors = themeColors[theme];
    
    // Update CSS variables
    document.documentElement.style.setProperty("--primary", colors.primary);
    document.documentElement.style.setProperty("--secondary", colors.secondary);
    document.documentElement.style.setProperty("--accent", colors.accent);
  };

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
