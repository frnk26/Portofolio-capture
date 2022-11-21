import React from "react";
import home1 from "../img/home1.png";
// import style
import styled from "styled-components";
import { DescriptionLayout, Hide, Image, LayoutSection } from "../style";
// import motion
import { motion as m } from "framer-motion";
import { imageMotion, titleMotion } from "../animation";
const AboutSection = () => {
  return (
    <LayoutSection>
      <DescriptionLayout>
        <div className="title">
          <Hide>
            <m.h2 variants={titleMotion}>We work to make </m.h2>
          </Hide>
          <Hide>
            <m.h2 variants={titleMotion}>
              your <span>dreams</span>
            </m.h2>
          </Hide>
          <Hide>
            <m.h2 variants={titleMotion}>come true. </m.h2>
          </Hide>
        </div>
        <p>
          Contact us for any Photography or videograpgy ideas that you have
          professionals with amazing skills to help you achieve it
        </p>
        <button>Contact Us</button>
      </DescriptionLayout>
      <Image>
        <m.img variants={imageMotion} src={home1} alt="" />
      </Image>
    </LayoutSection>
  );
};

export default AboutSection;
