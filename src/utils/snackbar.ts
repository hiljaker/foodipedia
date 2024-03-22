import { ProviderContext, useSnackbar } from "notistack";

let useSnackbarRef: ProviderContext;

export const SnackbarInitializer = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

const Snackbar = {
  success: (message: string) => {
    useSnackbarRef.enqueueSnackbar(message ?? "Success", {
      variant: "success",
    });
  },
  warning: (message: string) => {
    useSnackbarRef.enqueueSnackbar(message ?? "Warning", {
      variant: "warning",
    });
  },
  error(error: any, defaultMessage = undefined) {
    useSnackbarRef.enqueueSnackbar(
      typeof error !== "string"
        ? error?.response?.data?.message ||
            error?.response?.data ||
            error?.message ||
            defaultMessage ||
            "Something Went Wrong"
        : error,
      { variant: "error" }
    );
  },
};

export default Snackbar;
