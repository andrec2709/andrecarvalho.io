import { createContext, useContext, useEffect, useState } from "react";
import { isTheme, type Theme } from "~/domain/theme/types";

type ThemeContextValue = {
    currentTheme: Theme;
    changeTheme: (newTheme: Theme) => void;
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
    const lastTheme = localStorage.getItem('theme') || 'theme-dark';

    const [currentTheme, setCurrentTheme] = useState<Theme>(isTheme(lastTheme) ? lastTheme : 'theme-dark');

    const changeTheme = (newTheme: Theme) => {
        setCurrentTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.replace(currentTheme, newTheme);
    }

    useEffect(() => {
        document.documentElement.classList.add(currentTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{currentTheme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};