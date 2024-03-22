"use client";

import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TextInput = styled(TextField)(({ theme }) => ({
  borderRadius: "16px",

  "& .MuiOutlinedInput-root": {
    backgroundColor: "white",
    ...theme.typography.karla14,
    borderRadius: "16px",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0,0.5)",

    "&.Mui-focused fieldset": {
      borderColor: theme.palette.redBrand.main,
    },

    "& textarea": {
      padding: 0,
    },

    "& .MuiInputBase-inputSizeSmall": {
      padding: "8px 16px",
    },
  },
}));
