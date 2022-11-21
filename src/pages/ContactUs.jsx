import React from "react";
// import animation
import { motion as m } from "framer-motion";
import { pageAnimation } from "../animation";
const ContactUs = () => {
  return (
    <m.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h2>Contact</h2>
    </m.div>
  );
};

export default ContactUs;
