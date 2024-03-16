import { Components, Theme } from "@mui/material";

export const ContainerOverride: Components<Theme>["MuiContainer"] = {
  defaultProps: {
    disableGutters: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: "0px 64px",

      [theme.breakpoints.down("md")]: {
        padding: "0px 24px",
      },
    }),
  },
};
