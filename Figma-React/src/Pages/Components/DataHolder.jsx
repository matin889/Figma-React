import React from "react";
import { DataHolderStyles } from "../../Styles/DataHolder.styled";

export default function DataHolder() {
  return (
    <DataHolderStyles>
      <h3 className="company">Sneaker Company</h3>
      <h4 className="title">Fall Limited Edition Sneakers</h4>
      <h4 className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </h4>
    </DataHolderStyles>
  );
}
