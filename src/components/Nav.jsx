import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  padding: 0 10rem;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    position: relative;
    padding-left: 5rem;
  }
`;

export default Nav;
