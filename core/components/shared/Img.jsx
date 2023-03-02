import { useState } from "react";
import { NO_IMAGE_AVAILABLE } from "../../utils/constants";

const Img = ({
  key,
  src,
  fallbackSrc = NO_IMAGE_AVAILABLE,
  alt = "",
  className = "",
  containerClassName = "",
  width = "100%",
  height = "100%",
  animateAppear = false,
  decoding = "async",
  loading = "lazy",
  onClick
}) => {
  const [source, setSource] = useState(src);

  const onError = () => {
    setSource(fallbackSrc);
  };

  return (
    <picture className={containerClassName}>
      <img
        key={key}
        width={width}
        height={height}
        className={`${animateAppear && "animate-fadeIn"} ${className}`}
        loading={loading}
        decoding={decoding}
        src={source || fallbackSrc}
        onError={onError}
        alt={alt}
        onClick={onClick}
      
      />
    </picture>
  );
};

export default Img;
