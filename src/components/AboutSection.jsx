import React from "react";
import home1 from "../img/home1.png";
// import style
import styled from "styled-components";
import { DescriptionLayout, Hide, Image, LayoutSection } from "../style";
const AboutSection = () => {
  return (
    <LayoutSection>
      <DescriptionLayout>
        <div className="title">
          <Hide>
            <h2>We work to make </h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true. </h2>
          </Hide>
        </div>
        <p>
          Contact us for any Photography or videograpgy ideas that you have
          professionals with amazing skills to help you achieve it
        </p>
        <button>Contact Us</button>
      </DescriptionLayout>
      <Image>
        <img src={home1} alt="" />
      </Image>
    </LayoutSection>
  );
};

export default AboutSection;
