"use client";

import React, { FC, PropsWithChildren } from "react";
import {
  SnackbarProvider as NotistackProvider,
  SnackbarOrigin,
} from "notistack";
import { SnackbarInitializer } from "@src/utils/snackbar";

const anchorOrigin: SnackbarOrigin = { horizontal: "right", vertical: "top" };

const SnackbarProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <NotistackProvider
      anchorOrigin={anchorOrigin}
      autoHideDuration={3000}
      maxSnack={1}
    >
      <SnackbarInitializer />
      {children}
    </NotistackProvider>
  );
};

export default SnackbarProvider;
