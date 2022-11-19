import React from "react";
// import assets
import clock from "../img/clock.svg";
import gear from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";

const ServiceSection = () => {
  return (
    <div>
      <div className="Image">
        <img src={home2} alt="" />
      </div>
      <div className="description">
        <div className="title">
          <h2>
            High <span>Quality</span>
            service.
          </h2>
        </div>
        <div className="grid">
          <div className="grid-items">
            <div className="icons">
              <img src={clock} alt="" />
              <h4>Efficient</h4>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
          <div className="grid-items">
            <div className="icons">
              <img src={money} alt="" />
              <h4>Afforable</h4>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
          <div className="grid-items">
            <div className="icons">
              <img src={gear} alt="" />
              <h4>Pro Grade Gear</h4>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
          <div className="grid-items">
            <div className="icons">
              <img src={teamwork} alt="" />
              <h4>Teamwork</h4>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
              reiciendis!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
