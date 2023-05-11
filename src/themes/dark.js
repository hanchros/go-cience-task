import { createTheme } from "@mui/material/styles";
import { typography } from "./common";

export const dark = createTheme({
  typography,
  palette: {
    primary: {
      main: "#3076FF",
      light: "#b2b2b2",
      background: "#081526",
      contrastText: "#ffff",
      mainGradient: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
      drawerDividerGradient:
        "linear-gradient(to right, rgba(255, 255, 255, 0), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
      dark: '#fff'
    },
    secondary: {
      light: "#42a5f5",
      main: "#1976d2",
      dark: "#1565c0",
      mainGradient: "linear-gradient(195deg, #49a3f1, #1A73E8)",
      contrastText: "#fff",
      background: "#122640",
      heading: "#ffff",
      divider: '#081526',
      date: '#64748B'

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
