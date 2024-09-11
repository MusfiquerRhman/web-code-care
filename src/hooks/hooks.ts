import { useContext } from "react";
import { AccentContextAPI, AccentContextType } from "../context/AccentContext";
import { FilterContextAPI, FilterContextType } from "../context/FilterContext";
import { ThemeContextAPI, ThemeContextType } from "../context/ThemeContext";

export const useTheme = () => useContext(ThemeContextAPI) as ThemeContextType;

export const useAccent = () => useContext(AccentContextAPI) as AccentContextType;

export const useFilter = () =>  useContext(FilterContextAPI) as FilterContextType;
