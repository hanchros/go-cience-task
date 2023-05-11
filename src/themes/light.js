import { createTheme } from "@mui/material/styles";
import { typography } from "./common";

export const light = createTheme({
  typography,
  palette: {
    primary: {
      main: "#3076FF",
      dark: "#032E9B",
      contrastText: "#000",
      mainGradient: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
      drawerDividerGradient:
        "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
    },
    secondary: {
      light: "#42a5f5",
      main: "#1976d2",
      dark: "#1565c0",
      mainGradient: "linear-gradient(195deg, #49a3f1, #1A73E8)",
      contrastText: "#fff",
      heading: "#334155",
      divider: "#E2E8F0",
      date: '#334155'


    },
    danger: {
      light: "#ff2c2c",
      main: "#f01e2c",
      dark: "#d50000",
      contrastText: "#fff",
    },
    success: {
      main: "#008000",
    },
  },
});
