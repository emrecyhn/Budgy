import "@/app/style/globals.css";
import { Box } from "@mui/material";
import { JSX, ReactNode } from "react";

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): Promise<JSX.Element> {
  return <Box>{children}</Box>;
}
