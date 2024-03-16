"use client";

import React, { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@src/theme";

const MUIThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
