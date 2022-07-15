import { AppBar, Button, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";

const navigationItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "posts",
    href: "/posts",
  },
  {
    text: "Contact Us",
    href: "/contact-us",
  },
];

const Navbar = () => {
  const currentLocation = useLocation();
  return (
    <AppBar position="static" color="primary" sx={{}}>
      <Container
        sx={{
          paddingY: "0.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/">
          <Typography
            color={"primary"}
            variant="h5"
            component={"a"}
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 500,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Blog
          </Typography>
        </Link>
        <Box
          sx={{ display: "flex" }}
          justifyContent={"space-between"}
          width={"30%"}
        >
          {navigationItems.map(item => (
            <Link key={item.text} to={item.href}>
              <Button color={"secondary"}>
                <Typography
                  variant="button"
                  borderBottom={currentLocation.pathname === item.href ? 3 : 0}
                  fontWeight={"600"}
                >
                  {item.text}
                </Typography>
              </Button>
            </Link>
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
