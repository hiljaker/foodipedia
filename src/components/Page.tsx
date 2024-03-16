"use client";

import React, { ComponentProps, FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import { Box } from "@mui/material";
import useNavbarHeight from "@src/hooks/useNavbarHeight";

interface PageProps extends PropsWithChildren, ComponentProps<typeof Box> {}

const Page: FC<PageProps> = ({ children, ...props }) => {
  const NAVBAR_HEIGHT = useNavbarHeight();

  return (
    <>
      <Navbar />

      <Box pt={NAVBAR_HEIGHT} {...props}>
        {children}
      </Box>
    </>
  );
};

export default Page;
