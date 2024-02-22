import React from "react";
import { createContext, useEffect, useState } from "react";

const defaultContext = {
    toggleDark: () => {},
    isDark: false,
};

const ThemeContext = createContext(defaultContext);

interface props {
    children: React.ReactNode
}

export const ThemeContextProvider: React.FC<props> = ({children}): JSX.Element => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDark = JSON.parse(localStorage.getItem('ThemeContext:isDark') ?? "null");

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches)
            setIsDark(false);
        else setIsDark(isDark !== null);        
    }, []);

    const context = {
        toggleDark: () => {
            localStorage.setItem('ThemeContext:isDark', String(!isDark));
            setIsDark(!isDark);
        },
        isDark,
    };

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;