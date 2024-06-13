import React from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import muiTheme from "./muiTheme";

/**
 * @typedef {Object} MuiThemeProviderProps
 * @property {JSX.Element} children
 */
/**
 *
 * @param {MuiThemeProviderProps} props
 * @return {JSX.Element}
 */
export default function MuiThemeProvider({ children }) {
  console.log("loaded");
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
