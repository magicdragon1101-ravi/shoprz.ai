import React, { useRef } from "react";

const Carousel = ({ showButton, children }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: "smooth", });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {showButton && (
        <div
          onClick={scrollLeft}
          className="absolute w-fit top-1/2 -left-3 transform -translate-y-1/2 bg-white rounded-full cursor-pointer shadow z-10"
          aria-label="Scroll Left"
        >
          <div className="w-10 h-10 bg-[url('/public/assets/icons/left_deactive.png')] bg-cover bg-center" />
        </div>
      )}

      <div ref={carouselRef} className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 scrollbar-hide">
        {children}
      </div>

      {showButton && (
        <div
          onClick={scrollRight}
          className="absolute w-fit top-1/2 -right-3 transform -translate-y-1/2 bg-white rounded-full cursor-pointer shadow z-10"
          aria-label="Scroll Right"
        >
          <div className="w-10 h-10 bg-[url('/public/assets/icons/right_active.png')] bg-cover bg-center" />
        </div>
      )}
    </div>
  );
};

export default Carousel;
