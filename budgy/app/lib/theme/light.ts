// app/lib/theme/light.ts

import { createTheme } from "@mui/material/styles";
import { primitives } from "./constants";

const { colors } = primitives;

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
      dark: colors.primary.dark,
      contrastText: colors.base.white,
    },
    secondary: {
      main: colors.secondary.main,
      light: colors.secondary.light,
      dark: colors.secondary.dark,
      contrastText: colors.neutral.main,
    },
    background: {
      default: colors.secondary.main, // krem
      paper: colors.base.white,
    },
    text: {
      primary: colors.text.light, // koyu gri yazı
      secondary: "#666666",
      disabled: "#999999",
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
    divider: "#e0e0e0",
  },
});

export default lightTheme;
