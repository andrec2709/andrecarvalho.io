import { createContext, useContext, useEffect, useState } from "react";
import useThemeState from "~/application/theme/useThemeState";
import { isTheme, type Theme } from "~/domain/theme/types";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (next: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export const useTheme = () => {
    const ctx = useContext(ThemeContext);

    if (!ctx) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }

    return ctx;
}

type Props = {
    children: React.ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useThemeState('theme', 'theme-dark');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};