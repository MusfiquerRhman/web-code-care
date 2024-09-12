import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AccentContextProvider } from './context/AccentContext.tsx'
import { FilterContextProvider } from './context/FilterContext.tsx'
import { ThemeContextProvider } from './context/ThemeContext.tsx'
import { ToDoContextProvider } from './context/ToDoContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <FilterContextProvider>
          <AccentContextProvider>
            <ThemeContextProvider>
              <ToDoContextProvider>
                <App />
              </ToDoContextProvider>
            </ThemeContextProvider>
          </AccentContextProvider>
        </FilterContextProvider>
  </StrictMode>,
)
