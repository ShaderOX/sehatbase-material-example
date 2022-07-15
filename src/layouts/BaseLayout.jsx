import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";

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

const BaseLayout = props => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar />
        <Container>{props.children}</Container>
        <Container fixed component={"footer"}>
          Footer
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default BaseLayout;
