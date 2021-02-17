import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#80c8a7",
      error: "#ffaaaa",
      highlight: "#f1f1f1",
      contrastText: "#fff",
    },
    secondary: {
      main: "#000",
    },
  },
  colors: {
    primary: "#2E3B80",
    secondary: "#7159f1",
    light: "#8A8A8A",
    background: "#F5F5F5",
    title: "#323232",
    text: "#4B4B4B",
    textLight: "#8a8a8a",
  },
  margin: {
    small: "8px",
    regular: "12px",
    large: "16px",
  },
  typography: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "OpenSans",
    },
    size: {
      smallest: "10px",
      small: "14px",
      regular: "16px",
      large: "18px",
      largest: "20px",
    },
  },
});

export default Theme;
