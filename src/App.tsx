import styled, { ThemeProvider } from 'styled-components';
import { HeroSection, Tabs, Task } from './components';
import { useAccent, useTheme } from './hooks/hooks';
import { GlobalStyles, darkTheme, lightTheme } from './style/theme';
const StyledApp = styled.div``

function App() {
  const { theme } = useTheme();
    const { accent } = useAccent();

  return (
    <StyledApp>
      <ThemeProvider theme={theme === "light" ? lightTheme(accent!) : darkTheme(accent!)}>
      <GlobalStyles />
        <main className='w-full p-2'>
          <HeroSection />
          <Tabs />
          <Task />
        </main>
      </ThemeProvider>
    </StyledApp>
  )
}

export default App
