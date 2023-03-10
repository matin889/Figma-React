import React from "react";
import { ContainerStyle } from "../../Styles/Container.styled";
import DataHolder from "./DataHolder";
import ImageHolder from "./ImageHolder";

export default function Container() {
  return (
    <ContainerStyle>
      <ImageHolder />
      <DataHolder />
    </ContainerStyle>
  );
}
