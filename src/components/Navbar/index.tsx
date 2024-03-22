"use client";

import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import useNavbarHeight from "@src/hooks/useNavbarHeight";
import { IRootState } from "@src/redux/rootReducer";
import { useDispatch, useSelector } from "@src/redux/store";
import Link from "next/link";
import { setLoginModal } from "@src/redux/slices/auth";
import LoginModal from "../LoginModal";
import UserMenu from "./UserMenu";
import useClient from "@src/hooks/useClient";

const Navbar = () => {
  const NAVBAR_HEIGHT = useNavbarHeight();
  const { openModal } = useSelector((state: IRootState) => state.auth);
  const dispatch = useDispatch();
  const { user, tokenChecked } = useSelector((state: IRootState) => state.auth);
  const isClient = useClient();

  return (
    <Box bgcolor="redBrand.main" position="fixed" width="100%" zIndex={99}>
      <Container>
        <Stack
          direction="row"
          height={NAVBAR_HEIGHT}
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Typography
              typography="madimi32"
              color="orangeBrand.main"
              sx={{ userSelect: "none" }}
            >
              Foodiepedia
            </Typography>
          </Link>

          {tokenChecked &&
            isClient &&
            (user.email ? (
              <UserMenu />
            ) : (
              <Stack direction="row" spacing={1}>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(setLoginModal(true))}
                  size="small"
                >
                  Log in
                </Button>

                <Link href="/sign-up">
                  <Button variant="contained" color="secondary" size="small">
                    Sign up
                  </Button>
                </Link>
              </Stack>
            ))}
        </Stack>
      </Container>

      <LoginModal
        open={openModal}
        onClose={() => dispatch(setLoginModal(false))}
      />
    </Box>
  );
};

export default Navbar;
