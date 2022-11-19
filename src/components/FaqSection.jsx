import React from "react";

const FaqSection = () => {
  return (
    <div>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>Different Payment Method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, hic.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
