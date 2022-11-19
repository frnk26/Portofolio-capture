import React from "react";
// import assets
import clock from "../img/clock.svg";
import gear from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
// import style components
import styled from "styled-components";
import { DescriptionLayout, Image, LayoutSection } from "../style";

const ServiceSection = () => {
  return (
    <LayoutSection>
      <StyledDescription>
        <div className="title">
          <h2>
            High <span>Quality </span>
            service.
          </h2>
        </div>
        <div className="grid">
          <div className="grid-items">
            <div className="icons">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
          <div className="grid-items">
            <div className="icons">
              <img src={money} alt="" />
              <h3>Afforable</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
          <div className="grid-items">
            <div className="icons">
              <img src={gear} alt="" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
          <div className="grid-items">
            <div className="icons">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
        </div>
      </StyledDescription>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </LayoutSection>
  );
};
const StyledService = styled(LayoutSection)``;

const StyledDescription = styled(DescriptionLayout)`
  .grid {
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    .grid-items {
      flex-basis: 20rem;
    }
    .icons {
      display: flex;
      align-items: center;
      gap: 1rem;
      h3 {
        background: white;
        padding: 1rem;
        color: #000;
      }
    }
  }
`;

export default ServiceSection;
