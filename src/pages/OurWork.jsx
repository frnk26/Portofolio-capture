import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import imagees
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";

const OurWork = () => {
  return (
    <StyledWork>
      <StyledMovie>
        <h2>The Athele</h2>
        <div className="line"></div>
        <Link>
          <img src={athlete} alt="" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Goodtimes</h2>
        <div className="line"></div>
        <Link>
          <img src={goodtimes} alt="" />
        </Link>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link>
          <img src={theracer} alt="" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};
const StyledWork = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
`;
const StyledMovie = styled.div`
  padding-bottom: 8rem;
  .line {
    height: 0.5rem;
    width: 100%;
    background: #cccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
