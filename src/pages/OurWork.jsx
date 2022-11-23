import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Hide } from "../style";
// import imagees
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
// import animation
import { motion as m } from "framer-motion";
import { imageMotion, pageAnimation } from "../animation";
const OurWork = () => {
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffff", color: "#202124" }}
    >
      <StyledMovie>
        <h2>The Athele</h2>
        <div className="line"></div>
        <Hide variants={imageMotion}>
          <Link to="/work/the-athlete">
            <m.img variants={imageMotion} src={athlete} alt="" />
          </Link>
        </Hide>
      </StyledMovie>
      <StyledMovie>
        <h2>The Goodtimes</h2>
        <div className="line"></div>
        <Hide variants={imageMotion}>
          <Link to="/work/good-times">
            <m.img variants={imageMotion} src={goodtimes} alt="" />
          </Link>
        </Hide>
      </StyledMovie>
      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Hide>
          <Link to="/work/the-racer">
            <m.img variants={imageMotion} src={theracer} alt="" />
          </Link>
        </Hide>
      </StyledMovie>
    </StyledWork>
  );
};
const StyledWork = styled(m.div)`
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
