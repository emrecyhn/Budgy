// app/lib/theme/dark.ts

import { createTheme } from "@mui/material/styles";
import { primitives } from "./constants";

const { colors } = primitives;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.base.black,
    },
    secondary: {
      main: colors.secondary.dark, // daha koyu krem
      light: colors.secondary.main, // açık krem
      dark: "#cfc6a3",
      contrastText: colors.base.black,
    },
    background: {
      default: colors.neutral.dark, // koyu gri
      paper: colors.neutral.main, // orta gri
    },
    text: {
      primary: colors.text.dark, // açık yazı
      secondary: "#b3b3b3",
      disabled: "#7a7a7a",
    },
    error: {
      main: colors.error.main,
      light: colors.error.light,
      dark: colors.error.dark,
    },
    warning: {
      main: colors.warning.main,
      light: colors.warning.light,
      dark: colors.warning.dark,
    },
    success: {
      main: colors.success.main,
      light: colors.success.light,
      dark: colors.success.dark,
    },
    divider: "#333333",
  },
});

export default darkTheme;
