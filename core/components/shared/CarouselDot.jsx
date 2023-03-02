import { Children } from "react";

export const CustomDot = ({
  carouselItems,
  onClick,
  className,
  activeColor = "bg-gray-800",
  ...rest
}) => {
  const {
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;

  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button
      className={`w-1.5 h-1.5 rounded-full mr-2 text-xs text-transparent ${
        active ? activeColor : "bg-gray-400"
      } ${className}`}
      onClick={() => onClick()}
    >
      {Children.toArray(carouselItems)[index]}
    </button>
  );
};
