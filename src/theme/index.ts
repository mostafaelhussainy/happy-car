import { createTheme } from "@mui/material/styles";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

const theme = createTheme({
  palette: {
    primary: { main: "#1a73e8" },
    secondary: { main: "#ff5722" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

export default theme;
