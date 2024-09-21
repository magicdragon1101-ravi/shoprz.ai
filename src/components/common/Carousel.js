import React, { useRef } from "react";
import classNames from "classnames";

const Carousel = ({ showButton, children }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {showButton && (
        <div
          onClick={scrollLeft}
          className="absolute z-10 transform -translate-y-1/2 bg-white rounded-full shadow cursor-pointer w-fit top-1/2 -left-3"
          aria-label="Scroll Left"
        >
          <div
            className={classNames(
              "w-10 h-10 bg-[url('/public/assets/icons/arrow_left.png')] bg-cover bg-center hover:bg-[url('/public/assets/icons/arrow_left_active.png')] transition-all duration-300"
            )}
          />
        </div>
      )}

      <div ref={carouselRef} className="flex w-full gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        {children}
      </div>

      {showButton && (
        <div
          onClick={scrollRight}
          className="absolute z-10 transform -translate-y-1/2 bg-white rounded-full shadow cursor-pointer w-fit top-1/2 -right-3"
          aria-label="Scroll Right"
        >
          <div className="w-10 h-10 bg-[url('/public/assets/icons/arrow_right.png')] bg-cover bg-center hover:bg-[url('/public/assets/icons/arrow_right_active.png')] transition-all duration-300" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
