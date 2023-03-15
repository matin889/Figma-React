import React from "react";
import { Wrapper } from "../Styles/Collections.styled";
import { Menstyle } from "../Styles/Mens.styled";
import Navbar from "./Components/Navbar";

export default function Men() {
  return (
    <Wrapper>
      <Navbar />
      <Menstyle>
        <h1>Men's Products</h1>
      </Menstyle>
    </Wrapper>
  );
}
