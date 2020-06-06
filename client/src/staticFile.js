import React from "react";
import mallPic from "./Images/mall.jpg";

export default {
  title: "img",
};

// assume image.png is located in the "public" directory.
export const withAnImage = () => <img src={mallPic} alt="my image" />;
