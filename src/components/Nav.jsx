import React from "react";
import styled from "styled-components";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#" id="logo">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="">1. About Us</a>
        </li>
        <li>
          <a href="">2. Our Work</a>
        </li>
        <li>
          <a href="">3. Contact Us</a>
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
