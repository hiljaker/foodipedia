import { TypographyOptions } from "@mui/material/styles/createTypography";
import { CSSProperties } from "react";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    karla12: true;
    karla14: true;
    karla16: true;
    karla18: true;
    karla20: true;
    karla24: true;

    ojuju18: true;
    ojuju20: true;
    ojuju24: true;
    ojuju28: true;
    ojuju32: true;
    ojuju36: true;

    madimi28: true;
    madimi32: true;
    madimi36: true;
    madimi40: true;
    madimi42: true;
    madimi48: true;
    madimi56: true;
    madimi64: true;
    madimi72: true;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    karla12: CSSProperties;
    karla14: CSSProperties;
    karla16: CSSProperties;
    karla18: CSSProperties;
    karla20: CSSProperties;
    karla24: CSSProperties;

    ojuju18: CSSProperties;
    ojuju20: CSSProperties;
    ojuju24: CSSProperties;
    ojuju28: CSSProperties;
    ojuju32: CSSProperties;
    ojuju36: CSSProperties;

    madimi28: CSSProperties;
    madimi32: CSSProperties;
    madimi36: CSSProperties;
    madimi40: CSSProperties;
    madimi42: CSSProperties;
    madimi48: CSSProperties;
    madimi56: CSSProperties;
    madimi64: CSSProperties;
    madimi72: CSSProperties;
  }

  interface TypographyVariantsOptions {
    karla12: CSSProperties;
    karla14: CSSProperties;
    karla16: CSSProperties;
    karla18: CSSProperties;
    karla20: CSSProperties;
    karla24: CSSProperties;

    ojuju18: CSSProperties;
    ojuju20: CSSProperties;
    ojuju24: CSSProperties;
    ojuju28: CSSProperties;
    ojuju32: CSSProperties;
    ojuju36: CSSProperties;

    madimi28: CSSProperties;
    madimi32: CSSProperties;
    madimi36: CSSProperties;
    madimi40: CSSProperties;
    madimi42: CSSProperties;
    madimi48: CSSProperties;
    madimi56: CSSProperties;
    madimi64: CSSProperties;
    madimi72: CSSProperties;
  }
}

export const customTypography: TypographyOptions = {
  karla12: {
    fontFamily: "Karla, sans-serif",
    fontSize: "12px",
  },
  karla14: {
    fontFamily: "Karla, sans-serif",
    fontSize: "14px",
  },
  karla16: {
    fontFamily: "Karla, sans-serif",
    fontSize: "16px",
  },
  karla18: {
    fontFamily: "Karla, sans-serif",
    fontSize: "18px",
  },
  karla20: {
    fontFamily: "Karla, sans-serif",
    fontSize: "20px",
  },
  karla24: {
    fontFamily: "Karla, sans-serif",
    fontSize: "24px",
  },

  ojuju18: {
    fontFamily: "Ojuju, sans-serif",
    fontSize: "18px",
  },
  ojuju20: {
    fontFamily: "Ojuju, sans-serif",
    fontSize: "20px",
  },
  ojuju24: {
    fontFamily: "Ojuju, sans-serif",
    fontSize: "24px",
  },
  ojuju28: {
    fontFamily: "Ojuju, sans-serif",
    fontSize: "28px",
  },
  ojuju32: {
    fontFamily: "Ojuju, sans-serif",
    fontSize: "32px",
  },
  ojuju36: {
    fontFamily: "Ojuju, sans-serif",
    fontSize: "36px",
  },

  madimi28: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "28px",
  },
  madimi32: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "32px",
  },
  madimi36: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "36px",
  },
  madimi40: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "40px",
  },
  madimi42: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "42px",
  },
  madimi48: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "48px",
  },
  madimi56: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "58px",
  },
  madimi64: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "64px",
  },
  madimi72: {
    fontFamily: "Madimi One, sans-serif",
    fontSize: "72px",
  },
};
