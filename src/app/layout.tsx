import React, { FC, PropsWithChildren } from "react";
import MUIThemeProvider from "@src/components/providers/MUIThemeProvider";
import TanstackQueryProvider from "@src/components/providers/TanstackQueryProvider";
import { Metadata } from "next";
import ReduxProvider from "@src/components/providers/ReduxProvider";
import AuthProvider from "@src/components/providers/AuthProvider";
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
      <AuthProvider>
        <MUIThemeProvider>
          <TanstackQueryProvider>
            <html lang="en">
              <body>{children}</body>
            </html>
          </TanstackQueryProvider>
        </MUIThemeProvider>
      </AuthProvider>
    </ReduxProvider>
  );
};

export default RootLayout;
