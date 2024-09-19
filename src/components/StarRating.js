import React, { useState } from "react";
import classNames from "classnames";

const StarRating = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (value) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (value) => {
    onRatingChange(value);
  };

  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      const filled = starValue <= (hoveredRating || rating);
      const halfFilled = rating >= starValue - 0.5 && rating < starValue;

      return (
        <span
          key={index}
          className={classNames("text-3xl cursor-pointer", filled ? "text-orange" : "text-gray-300")}
          onMouseEnter={() => handleMouseEnter(starValue)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(starValue)}
        >
          {halfFilled ? "★" : filled ? "★" : "☆"}
        </span>
      );
    });
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
