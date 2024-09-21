import React from "react";
import classNames from "classnames";

const StarRating = ({ rating }) => {
  const renderStars = () => {
    return [...Array(5)].map((_, index) => {
      const starValue = index + 1;
      const filled = starValue <= (rating);
      const halfFilled = rating >= starValue - 0.5 && rating < starValue;

      return (
        <span key={index} className={classNames("text-2xl cursor-pointer", filled ? "text-orange" : "text-gray-300")}>
          {halfFilled ? "★" : filled ? "★" : "☆"}
        </span>
      );
    });
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
