import React from "react";

const SliderImageDesc = () => {
  console.log("rerender");
  return <div className="slider-image-desc"></div>;
};

export default React.memo(SliderImageDesc);
