"use client";

import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IRootState } from "@src/redux/rootReducer";
import { useSelector } from "@src/redux/store";
import Link from "next/link";
import { notFound, usePathname, useRouter } from "next/navigation";
import React, { ComponentProps, FC, PropsWithChildren, useEffect } from "react";

interface BoxComponentProps extends ComponentProps<typeof Box> {
  active: boolean;
}

const BoxComponent: FC<BoxComponentProps> = ({ active, ...props }) => (
  <Box {...props} />
);

const MenuItem = styled(BoxComponent)(({ active, theme }) => ({
  backgroundColor: active ? theme.palette.orangeBrand.main : "transparent",
  padding: "8px 16px",
  borderRadius: active ? "16px" : "none",
  color: active ? theme.palette.brownBrand.main : theme.palette.neutralBg.main,
}));

const menus = [
  { name: "User", path: "/user" },
  { name: "Product", path: "/product" },
];

const SIDEBAR_WIDTH = "350px";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const { email, isAdmin } = useSelector(
    (state: IRootState) => state.auth.user
  );

  useEffect(() => {
    if (!email || !isAdmin) {
      notFound();
    }
  }, [email, isAdmin, push]);

  return (
    <Stack direction="row">
      <Box
        bgcolor="redBrand.main"
        width={SIDEBAR_WIDTH}
        height="100vh"
        position="fixed"
      >
        <Box px={3} py={5}>
          <Typography
            typography="madimi32"
            textAlign="center"
            color="yellowBrand.main"
            mb={5}
          >
            Foodipedia Admin
          </Typography>

          <Stack spacing={1}>
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={"/admin".concat(menu.path)}
                style={{ textDecoration: "none", color: "initial" }}
              >
                <MenuItem active={pathname.includes(menu.path)}>
                  <Typography typography="karla20" textAlign="center">
                    {menu.name}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
          </Stack>
        </Box>
      </Box>

      <Stack
        bgcolor="neutralBg.main"
        ml={SIDEBAR_WIDTH}
        width="100%"
        p={5}
        spacing={2}
      >
        <Typography typography="madimi32" color="brownBrand.main">
          {menus.find((menu) => pathname.includes(menu.path))?.name}
        </Typography>
        {children}
      </Stack>
    </Stack>
  );
};

export default AdminLayout;
