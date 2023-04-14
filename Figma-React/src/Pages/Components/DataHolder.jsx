import React, { useState } from "react";
import { DataHolderStyles } from "../../Styles/DataHolder.styled";
import cart from "../../assets/Images/Basket-icon.png";
import data from "../../Data/products.json";

const DataHolder = () => {
  const [count, setCount] = useState(0);
  const handleMinus = () => {
    setCount((count) => count - 1);
  };

  const handlePlus = () => {
    setCount((count) => count + 1);
  };

  return (
    <DataHolderStyles>
      {data.map((product) => {
        const {
          id,
          company,
          title,
          description,
          currentPrice,
          discount,
          originalPrice,
        } = product;

        return (
          <div className="card" key={id}>
            <h3 className="company">{company}</h3>
            <h4 className="title">{title}</h4>
            <h4 className="description">{description}</h4>
            <div className="price-details">
              <h2 className="price">${currentPrice}</h2>
              <h4 className="discount">{discount}</h4>
            </div>
            <h4 className="original-price">${originalPrice}</h4>
            <div className="buttons">
              <div className="quantity">
                <button
                  onClick={handleMinus}
                  disabled={count === 0 ? true : false}
                >
                  -
                </button>

                <div class="values">{count}</div>
                <button onClick={handlePlus}>+</button>
              </div>
              <div className="add-to-cart">
                <img className="basket" src={cart} alt="basket" />
                <button className="cart">Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </DataHolderStyles>
  );
};
export default DataHolder;
