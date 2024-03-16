"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import useNavbarHeight from "@src/hooks/useNavbarHeight";
import React from "react";

const Navbar = () => {
  const NAVBAR_HEIGHT = useNavbarHeight();

  return (
    <Box bgcolor="redBrand.main" position="fixed" width="100%" zIndex={99}>
      <Container>
        <Stack
          direction="row"
          height={NAVBAR_HEIGHT}
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography typography="madimi32" color="yellowBrand.main">
            Foodiepedia
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
