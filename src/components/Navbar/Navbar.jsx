import { AppBar, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import NavItem from "./NavItem";

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
  return (
    <AppBar position="static" sx={{}}>
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
              display: { md: "flex" },
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
            <NavItem key={item.text} text={item.text} href={item.href} />
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
