import React, { createContext, Dispatch, SetStateAction, useState } from "react";

export interface TodoContextType {
    ToDos: [string, boolean, string, string][] | []; 
    setToDos: Dispatch<SetStateAction<[string, boolean, string, string][] | []>>
}

export const ToDoContextAPI = createContext<TodoContextType | null>(null);

export function ToDoContextProvider({children}: Readonly<{children: React.ReactNode}>) {
    const [ToDos, setToDos] = useState(
        JSON.parse(localStorage.getItem('toDos') || '[]')
    );
    return (
        <ToDoContextAPI.Provider value={{ ToDos: ToDos, setToDos: setToDos }}>
            {children}
        </ToDoContextAPI.Provider>
    );
}
