import { motion as m } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <m.div layout className="question" onClick={() => setToggle(!toggle)}>
      <m.h4 layout>{title}</m.h4>
      {toggle ? children : ""}
      <m.div className="faq-line"></m.div>
    </m.div>
  );
};

export default Toggle;
