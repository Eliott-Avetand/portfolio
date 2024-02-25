import React, { Dispatch, SetStateAction } from "react";
import { createContext, useEffect, useState } from "react";

interface themeProviderProps {
    children: React.ReactNode
}

export interface ThemeContextType {
    setTheme: (newTheme: string) => void,
    theme: string
}

const initialThemeState = {
    setTheme: (() => null) as Dispatch<SetStateAction<string>>,
    theme: "light",
};

export const ThemeContext = createContext<ThemeContextType>(initialThemeState);

export const ThemeContextProvider = ({ children }: themeProviderProps) => {
    const [theme, setTheme] = useState<string>(initialThemeState.theme);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme)
            setTheme(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={`theme--${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
};

export default ThemeContext;