// This context manages the (dark/light) theme state
import { createContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeContextProps {
  dark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  dark: false,
  toggleTheme: () => {},
}); // Global theme context with default values

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState<boolean>(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: { mode: dark ? "dark" : "light" },
      }),
    [dark]
  ); // useMemo for efficient theme updates

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
