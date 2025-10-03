// app/lib/theme/index.ts

import { Theme } from "@mui/material/styles";
import lightTheme from "./light";
import darkTheme from "./dark";

export function getTheme(mode: "light" | "dark"): Theme {
  return mode === "dark" ? darkTheme : lightTheme;
}
