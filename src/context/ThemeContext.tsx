import React, { createContext, useState } from "react";

export interface ThemeContextType {
    theme: string | null; 
    setTheme: React.Dispatch<React.SetStateAction<string | null>>
}

export const ThemeContextAPI = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [theme, setTheme] = useState(
        localStorage.getItem("currentTheme") === null
            ? "light"
            : localStorage.getItem("currentTheme")
    );

    return (
        <ThemeContextAPI.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContextAPI.Provider>
    );
}