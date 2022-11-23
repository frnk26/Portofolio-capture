import React from "react";
// import stlyed components
import styled from "styled-components";
import { LayoutSection } from "../style";
import Toggle from "./Toggle";
// import animation
import { AnimateSharedLayout } from "framer-motion";
const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title=" How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.
            </p>
          </div>
        </Toggle>
        <Toggle title="Different Payment Method">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
};
const StyledFaq = styled(LayoutSection)`
  display: block;
  span {
    display: block;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h4 {
    cursor: pointer;
  }
  .faq-line {
    width: 100%;
    background: white;
    height: 0.3rem;
    margin-bottom: 3rem;
  }
`;

export default FaqSection;
