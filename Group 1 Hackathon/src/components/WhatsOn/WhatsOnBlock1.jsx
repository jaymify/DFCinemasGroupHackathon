import Carousel from "./Carousel";
import React from "react";

const WOBlock01 = function () {
  return (
    <>
      <div className="container block" id="Block01">
        <div className="row">
          <div className="col-md-9">
            <Carousel />
          </div>
          <div className="col-md-3">
            <p className="block-text">
              <strong>Now Showing...</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WOBlock01;
