import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#5C6BC0", // soft cavern blue
    },
    secondary: {
      main: "#A1887F", // warm stone brown
    },
    background: {
      default: "#0f1115",
      paper: "#1a1d24",
    },
  },
  typography: {
    fontFamily: `"Raleway", sans-serif`,
    h1: {
      fontFamily: `"Story Script", cursive`,
    },
  },
  shape: {
    borderRadius: 16,
  },
});
