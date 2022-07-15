import { Container, CssBaseline } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

const BaseLayout = ({ children, sx, ...props }) => {
  return (
    <CssBaseline>
      <Navbar />
      <Container {...props} sx={{ ...sx, margin: "1rem auto" }}>
        {children}
      </Container>

      {/* Footer Component */}
      <Container fixed component={"footer"}></Container>
    </CssBaseline>
  );
};

export default BaseLayout;
