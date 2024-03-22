import { Container, Typography } from "@mui/material";
import Page from "@src/components/Page";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Page bgcolor="neutralBg.main" minHeight="100vh">
      <Container>
        <Typography
          textAlign="center"
          typography="madimi32"
          color="brownBrand.main"
          pt={8}
        >
          Page you looked for is not found :(
        </Typography>

        <Link href="/" style={{ color: "initial" }}>
          <Typography
            textAlign="center"
            typography="karla18"
            color="brownBrand"
          >
            Back to home?
          </Typography>
        </Link>
      </Container>
    </Page>
  );
};

export default NotFound;
