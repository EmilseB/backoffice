import { ScopedCssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#933745",
    },
    secondary: {
      main: "#B97F87",
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <ScopedCssBaseline>
        <Component {...pageProps} />
      </ScopedCssBaseline>
    </ThemeProvider>
  );
}
