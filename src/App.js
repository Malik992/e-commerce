import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "styled-components";
import { muiTheme } from "styles/index";
import { AllRoutes } from "router/index";

const theme = createMuiTheme(muiTheme);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <AllRoutes />
        </MuiThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
