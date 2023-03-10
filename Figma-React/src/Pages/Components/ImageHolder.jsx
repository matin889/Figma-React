import React from "react";
import { ImageHolderStyles } from "../../Styles/ImageHolder.styled";
import product from "../../assets/Images/Rectangle.png";
import icon1 from "../../assets/Images/Icon-1.png";
import icon2 from "../../assets/Images/Icon-2.png";
import icon3 from "../../assets/Images/Icon-3.png";
import icon4 from "../../assets/Images/Icon-4.png";

export default function ImageHolder() {
  return (
    <ImageHolderStyles>
      <img className="product" src={product} alt="shoe" />
      <div className="icons">
        <img className="icon" src={icon1} alt="shoe" />
        <img className="icon" src={icon2} alt="shoe" />
        <img className="icon" src={icon3} alt="shoe" />
        <img className="icon" src={icon4} alt="shoe" />
      </div>
    </ImageHolderStyles>
  );
}
