import React, { createContext, useState } from "react";

export interface FilterContextType {
    filter: string | null; 
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const FilterContextAPI = createContext<FilterContextType | null>(null);

export function FilterContextProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [filter, setFilter] = useState("all");
    return (
        <FilterContextAPI.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContextAPI.Provider>
    );
}
