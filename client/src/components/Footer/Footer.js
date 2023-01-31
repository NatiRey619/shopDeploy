import React from "react";
import { Link } from "react-router-dom";
import { BottomNavigationAction } from "@mui/material";
import { BottomNavigation } from "@mui/material";
import "./Footer.css";

// using link creating navigation bar with links to components

const Footer = () => {
  return (
    <div className="footer">
      <BottomNavigation>
        <BottomNavigationAction label="Recents" />
        <BottomNavigationAction label="Favorites" />
        <BottomNavigationAction label="Nearby" color="red" />
      </BottomNavigation>
    </div>
  );
};

export default Footer;
