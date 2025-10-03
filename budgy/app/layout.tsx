"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { getTheme } from "@/app/lib/theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, Bold
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // İlk açılışta sistem temasını yakala
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setMode(prefersDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <ThemeProvider theme={getTheme(mode)}>
          <CssBaseline />
          {/* Tema toggle butonu */}
          <div style={{ position: "fixed", top: 16, right: 16, zIndex: 9999 }}>
            <IconButton onClick={toggleTheme} color="inherit">
              {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </div>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
