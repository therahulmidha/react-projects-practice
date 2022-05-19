import React from "react";

export const Image = ({ image }) => {
  return <img className="single-photo" src={image.urls.thumb} alt="" />;
};
