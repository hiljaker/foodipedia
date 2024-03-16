"use client";

import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Page from "@src/components/Page";
import { TextInput } from "@src/components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { User } from "@src/types/user.types";
import { useRouter } from "next/navigation";
import { register } from "@src/redux/slices/auth";
import { useDispatch } from "@src/redux/store";

const phoneRegExp = /^\d{8,}$/; // Minimum: 8 digit number

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().email().required().label("Email"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase and number"
    )
    .required()
    .label("Password"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone Number is not valid")
    .required()
    .label("Phone Number"),
  address: Yup.string().required().label("Address"),
});

const SignUpView = () => {
  const { push } = useRouter();
  const dispatch = useDispatch();

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
      address: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        dispatch(register(values as User));
        resetForm();
        push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Page bgcolor="neutralBg.main" minHeight="100vh">
      <Container sx={{ py: 5 }}>
        <Typography
          textAlign="center"
          typography="madimi56"
          color="brownBrand.main"
          mb={4}
        >
          Sign up now!
        </Typography>

        <Grid container spacing={2} maxWidth="600px" mx="auto">
          <Grid item md={6}>
            <TextInput
              {...getFieldProps("firstName")}
              error={Boolean(errors.firstName) && touched.firstName}
              helperText={errors.firstName}
              fullWidth
              size="small"
              placeholder="First Name"
            />
          </Grid>
          <Grid item md={6}>
            <TextInput
              {...getFieldProps("lastName")}
              error={Boolean(errors.lastName) && touched.lastName}
              helperText={errors.lastName}
              fullWidth
              size="small"
              placeholder="Last Name"
            />
          </Grid>
          <Grid item md={12}>
            <TextInput
              {...getFieldProps("email")}
              error={Boolean(errors.email) && touched.email}
              helperText={errors.email}
              fullWidth
              size="small"
              placeholder="E-mail"
            />
          </Grid>
          <Grid item md={12}>
            <TextInput
              {...getFieldProps("password")}
              error={Boolean(errors.password) && touched.password}
              helperText={errors.password}
              fullWidth
              size="small"
              placeholder="Password"
              type="password"
            />
          </Grid>
          <Grid item md={12}>
            <TextInput
              {...getFieldProps("phone")}
              error={Boolean(errors.phone) && touched.phone}
              helperText={errors.phone}
              fullWidth
              size="small"
              placeholder="Phone Number"
            />
          </Grid>
          <Grid item md={12}>
            <TextInput
              {...getFieldProps("address")}
              error={Boolean(errors.address) && touched.address}
              helperText={errors.address}
              fullWidth
              size="small"
              placeholder="Address"
              multiline
              rows={3}
            />
          </Grid>
          <Grid item md={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleSubmit()}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default SignUpView;
