import { useContext } from "react";
import { AccentContextAPI, AccentContextType } from "../context/AccentContext";
import { FilterContextAPI, FilterContextType } from "../context/FilterContext";
import { ThemeContextAPI, ThemeContextType } from "../context/ThemeContext";
import { ToDoContextAPI, TodoContextType } from "../context/ToDoContext";

export const useTheme = () => useContext(ThemeContextAPI) as ThemeContextType;

export const useAccent = () => useContext(AccentContextAPI) as AccentContextType;

export const useFilter = () =>  useContext(FilterContextAPI) as FilterContextType;

export const useToDos = () => useContext(ToDoContextAPI) as TodoContextType;
