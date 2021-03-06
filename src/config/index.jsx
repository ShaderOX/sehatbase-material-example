import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, style, ...other } = props;
  return (
    <RouterLink
      ref={ref}
      to={href}
      style={{ ...style, textDecoration: "none", color: "inherit" }}
      {...other}
    />
  );
});

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[50],
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export { theme };
