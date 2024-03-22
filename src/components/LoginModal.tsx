import React, { FC } from "react";
import Modal, { ModalProps } from "./Modal";
import { Box, Button, Stack, Typography } from "@mui/material";
import { TextInput } from "./TextInput";
import { useFormik } from "formik";
import { useDispatch } from "@src/redux/store";
import { login } from "@src/redux/slices/auth";

interface LoginModalProps extends ModalProps {}

const LoginModal: FC<LoginModalProps> = ({ open, onClose }) => {
  const dispatch = useDispatch();

  const { getFieldProps, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(login(values));
        resetForm();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Modal open={open} onClose={onClose} maxWidth="lg">
      <Box width="500px">
        <Typography
          typography="madimi42"
          color="orangeBrand.main"
          textAlign="center"
          mb={3}
        >
          <Typography
            typography="madimi42"
            color="redBrand.main"
            component="span"
          >
            Foodiepedia
          </Typography>
          &nbsp; Login
        </Typography>

        <Stack spacing={2}>
          <TextInput
            {...getFieldProps("email")}
            fullWidth
            placeholder="E-mail"
            size="small"
          />

          <TextInput
            {...getFieldProps("password")}
            fullWidth
            placeholder="Password"
            size="small"
            type="password"
          />

          <Button
            variant="contained"
            onClick={() => handleSubmit()}
            disabled={isSubmitting}
          >
            Log in
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default LoginModal;
