import React, { FC, PropsWithChildren } from "react";
import MUIThemeProvider from "@src/components/providers/MUIThemeProvider";
import TanstackQueryProvider from "@src/components/providers/TanstackQueryProvider";
import { Metadata } from "next";
import ReduxProvider from "@src/components/providers/ReduxProvider";
import "@src/styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Foodipedia",
    default: "Foodipedia",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReduxProvider>
      <MUIThemeProvider>
        <TanstackQueryProvider>
          <html lang="en">
            <body>{children}</body>
          </html>
        </TanstackQueryProvider>
      </MUIThemeProvider>
    </ReduxProvider>
  );
};

export default RootLayout;
