import { Button, Link, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const NavItem = ({ text, href }) => {
  const currentLocation = useLocation();

  return (
    <Link key={text} to={href}>
      <Button color={"secondary"}>
        <Typography
          variant="button"
          borderBottom={currentLocation.pathname === href ? 3 : 0}
          fontWeight={"600"}
        >
          {text}
        </Typography>
      </Button>
    </Link>
  );
};

export default NavItem;
