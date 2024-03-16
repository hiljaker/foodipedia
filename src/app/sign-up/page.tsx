import SignUpView from "@src/views/sign-up";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUp = () => {
  return <SignUpView />;
};

export default SignUp;
