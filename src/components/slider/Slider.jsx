import { useEffect, useState } from "react";
import dali1 from "../../assets/images/dali1.jpg";
import dali2 from "../../assets/images/dali2.jpeg";
import dali3 from "../../assets/images/dali3.jpg";
import "./Slider.scss";
import SliderImage from "./slider-image/SliderImage";

const Slider = () => {
  const [images, setImages] = useState([
    { id: 1, src: dali1 },
    { id: 2, src: dali2 },
    { id: 3, src: dali3 },
  ]);

  const [activeImg, setActiveImg] = useState(images[0]); // {id: 1, src: dali1}

  //   useEffect(() => {
  //     console.log(activeImg);
  //   }, [activeImg]);

  return (
    <div className="slider">
      <aside className="slider-images">
        {images &&
          images.map(({ id, src }) => {
            return (
              <div
                className="slider-images-image"
                key={id}
                onClick={() => {
                  setActiveImg({ id, src });
                }}
                style={{ border: id === activeImg.id ? "solid 8px" : "none" }}
              >
                <img src={src} alt={id} />
              </div>
            );
          })}
      </aside>
      <SliderImage activeImg={activeImg} />
    </div>
  );
};

export default Slider;
