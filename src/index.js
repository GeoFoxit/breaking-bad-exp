import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { DEFAULT_THEME } from "./utils/theming";
import { Provider } from "react-redux";
import { store } from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Provide MUI theme context */}
    <ThemeProvider theme={DEFAULT_THEME}>
      {/* MUI css boilerplate */}
      <CssBaseline />
      {/* Redux store provider */}
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
