import { Clear } from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";

export interface ModalProps extends ComponentProps<typeof Dialog> {
  open: boolean;
  onClose: () => void;
  title?: string;
  action?: ReactNode;
}

const Modal: FC<ModalProps & PropsWithChildren> = ({
  open,
  onClose,
  title,
  action,
  children,
  ...props
}) => {
  return (
    <Dialog open={open} onClose={onClose} {...props}>
      <DialogTitle>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={title ? "space-between" : "flex-end"}
        >
          {Boolean(title) && (
            <Typography typography="karla24" fontWeight={700}>
              {title}
            </Typography>
          )}

          <IconButton onClick={onClose}>
            <Clear />
          </IconButton>
        </Stack>
      </DialogTitle>

      <DialogContent sx={{ p: 3 }}>{children}</DialogContent>

      {Boolean(action) && (
        <DialogActions sx={{ p: "0 24px 16px" }}>{action}</DialogActions>
      )}
    </Dialog>
  );
};

export default Modal;
