import { cloneElement, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDot } from "./CarouselDot";

const AppCarousel = ({
  items = [],
  element,
  responsive = {},
  itemClass = "",
  autoPlay = false,
  autoPlaySpeed = 5000,
  activeDotColor,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  return (
    <Carousel
      showDots
      autoPlay={autoPlay}
      autoPlaySpeed={autoPlaySpeed}
      customDot={
        <CustomDot activeColor={activeDotColor} carouselItems={items.length} />
      }
      arrows={false}
      afterChange={(_prevSlide, ref) => {
        setCurrentSlide(ref.currentSlide);
      }}
      className="flex w-full h-h-full"
      itemClass={`pb-5 px-1 ${itemClass}`}
      pauseOnHover
      responsive={responsive}
      ssr
    >
      {items.map((item, key) =>
        cloneElement(element, {
          item,
          current: currentSlide,
          dataKey: key,
          key,
        })
      )}
    </Carousel>
  );
};

export default AppCarousel;
