import React from "react";

const Images = ({ src, alt, className, style }) => {
  return <img src={src} alt={alt} className={className} style={style} />;
};

export default Images;
