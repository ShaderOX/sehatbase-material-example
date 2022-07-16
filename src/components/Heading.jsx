import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ text, ...props }) => {
  return (
    <Typography variant="h2" align="center" marginY={"4rem"} {...props}>
      {text}
    </Typography>
  );
};

export default Heading;
