import { useState } from "react";

const StarRating = ({ initialValue = 0, enabledGestures = false }) => {
  const [rating, setRating] = useState(initialValue);

  const handleRatingUpdate = (idx) => {
    if (!enabledGestures) return;

    setRating(idx);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={`${
              index <= rating ? "text-amber-500" : "text-gray-200"
            } ${enabledGestures ? "cursor-pointer" : "cursor-default"}`}
            onClick={() => handleRatingUpdate(index)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
