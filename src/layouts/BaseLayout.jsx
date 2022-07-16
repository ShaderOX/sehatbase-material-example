import { Container, CssBaseline, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
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
      <Box
        fixed
        component={"footer"}
        sx={{
          background: grey[900],
          marginTop: "1rem",
          width: "100%",
          padding: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="button" color={"secondary"} textAlign="center">
          All Rights Reserved © 2022
        </Typography>
      </Box>
    </CssBaseline>
  );
};

export default BaseLayout;
