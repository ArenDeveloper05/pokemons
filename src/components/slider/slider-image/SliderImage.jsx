import SliderImageDesc from "./slider-image-desc/SliderImageDesc";

const SliderImage = ({ activeImg }) => {
  return (
    <div className="slider-image">
      <img src={activeImg && activeImg.src} alt="slider-img" />
      <SliderImageDesc />
    </div>
  );
};

export default SliderImage;
