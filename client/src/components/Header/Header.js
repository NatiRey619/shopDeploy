import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

// using link creating navigation bar with links to components

const Header = () => {
  const NavUnlisted = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: center;
    margin: 10px;
  `;

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "blue",
  };

  return (
    <div className="header">
      <NavUnlisted>
        <Link to={"/"} style={linkStyle}>
          Home
        </Link>
        <Link to={"about"} style={linkStyle}>
          About{" "}
        </Link>
        <Link to={"termsOfAgreement"} style={linkStyle}>
          Terms
        </Link>
        <Link to={"YesSir"} style={linkStyle}>
          YesSir
        </Link>
      </NavUnlisted>
    </div>
  );
};

export default Header;
