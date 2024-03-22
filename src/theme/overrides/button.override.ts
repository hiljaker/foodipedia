import { Components, Theme } from "@mui/material/styles";
import { colors } from "../palette.custom";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    ghost: true;
  }
}

export const ButtonOverride: Components<Theme>["MuiButton"] = {
  defaultProps: {
    variant: "primary",
    size: "medium",
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      textTransform: "capitalize",
      fontFamily: "Karla, sans-serif",
      borderRadius: "16px",
      boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.5)",

      "&:hover": {
        boxShadow: "none",
      },
    },
    sizeSmall: {
      padding: "6px 12px",
      fontSize: "12px",
    },
    sizeMedium: {
      padding: "8px 16px",
      fontSize: "14px",
    },
    sizeLarge: {
      padding: "12px 24px",
      fontSize: "16px",
    },
    containedPrimary: {
      backgroundColor: colors.redBrand,

      "&:hover": {
        backgroundColor: colors.orangeBrand,
      },
    },
    containedSecondary: {
      color: colors.brownBrand,
      backgroundColor: colors.orangeBrand,

      "&:hover": {
        backgroundColor: colors.orangeBrand,
      },
    },
    outlinedPrimary: {
      color: colors.orangeBrand,
      borderColor: colors.orangeBrand,

      "&:hover": {
        borderColor: colors.orangeBrand,
      },
    },
  },
};
