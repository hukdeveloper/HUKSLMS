"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme, { darkTheme, lightTheme } from "./theme";
import { useSelector } from "react-redux";
const ThemeProviders = ({ children }) => {
  const mode = useSelector((data) => data.mode);
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default ThemeProviders;
