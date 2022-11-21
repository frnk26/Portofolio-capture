import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServiceSection from "../components/ServiceSection";
// import animation
import { motion as m } from "framer-motion";
import { pageAnimation } from "../animation";
const About = () => {
  return (
    <m.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <AboutSection />
      <ServiceSection />
      <FaqSection />
    </m.div>
  );
};

export default About;
