import { Theme, useMediaQuery } from "@mui/material";
import { theme } from "@src/theme";

const useNavbarHeight = () => {
  const mobile = useMediaQuery(({ breakpoints }: Theme) =>
    theme.breakpoints.down("md")
  );

  return mobile ? "72px" : "64px";
};

export default useNavbarHeight;
