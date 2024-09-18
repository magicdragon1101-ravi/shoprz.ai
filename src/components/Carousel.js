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
        <button
          onClick={scrollLeft}
          className="absolute -left-3 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow z-10"
          aria-label="Scroll Left"
        >
          <div className="w-10 h-10 bg-[url('/public/assets/icons/left_deactive.png')] bg-cover" />
        </button>
      )}

      <div ref={carouselRef} className="flex w-full overflow-x-auto snap-x snap-mandatory gap-3 scrollbar-hide">
        {children}
      </div>

      {showButton && (
        <button
          onClick={scrollRight}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 rounded-full bg-white shadow z-10"
          aria-label="Scroll Right"
        >
          <div className="w-10 h-10 bg-[url('/public/assets/icons/right_active.png')] bg-cover" />
        </button>
      )}
    </div>
  );
};

export default Carousel;
