"use client";

import { ExitToApp } from "@mui/icons-material";
import { Avatar, Popover, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { IRootState } from "@src/redux/rootReducer";
import { signOut } from "@src/redux/slices/auth";
import { useDispatch, useSelector } from "@src/redux/store";
import React, {
  ComponentProps,
  FC,
  MouseEvent,
  PropsWithChildren,
  useState,
} from "react";

type MenuItemProps = FC<PropsWithChildren & ComponentProps<typeof Stack>>;
const MenuItem = styled<MenuItemProps>(({ children, ...props }) => (
  <Stack direction="row" alignItems="center" spacing={1} {...props}>
    {children}
  </Stack>
))(({ theme }) => ({
  cursor: "pointer",
  borderRadius: "4px",
  padding: "8px 16px",

  "&:hover": {
    backgroundColor: theme.palette.neutral700.main,
  },
}));

const UserMenu = () => {
  const dispatch = useDispatch();
  const { firstName } = useSelector((state: IRootState) => state.auth.user);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const open = Boolean(anchorEl);
  const handleClose = () => setAnchorEl(null);
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
        onClick={(event) => handleClick(event)}
      >
        <Typography
          typography="karla18"
          fontWeight={700}
          color="neutralBg.main"
        >
          Hi, {firstName}!
        </Typography>

        <Avatar sx={{ width: "32px", height: "32px" }} />
      </Stack>

      <Popover
        sx={{ mt: 1 }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack p={2}>
          <MenuItem onClick={() => dispatch(signOut())}>
            <ExitToApp />
            <Typography typography="karla18">Log out</Typography>
          </MenuItem>
        </Stack>
      </Popover>
    </>
  );
};

export default UserMenu;
