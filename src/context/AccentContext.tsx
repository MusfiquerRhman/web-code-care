import React, { createContext, useState } from "react";

export interface AccentContextType {
    accent: string | null; 
    setAccent: React.Dispatch<React.SetStateAction<string | null>>
}

export const AccentContextAPI = createContext<AccentContextType | null>(null);

export function AccentContextProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [accent, setAccent] = useState(
        localStorage.getItem("currentAccentColor") === null
        ? "teal"
        : localStorage.getItem("currentAccentColor")
    );
    return (
        <AccentContextAPI.Provider value={{ accent, setAccent }}>
            {children}
        </AccentContextAPI.Provider>
    );
}
