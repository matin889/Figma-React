import React, { useState } from "react";
import { DataHolderStyles } from "../../Styles/DataHolder.styled";
import cart from "../../assets/Images/Basket-icon.png";
import data from "../../Data/products.json";

export default function DataHolder() {
  const [count, setCount] = useState(0);
  const handleSubmit = () => {
    console.log("I am clicked");
  };
  return (
    <DataHolderStyles>
      {data.map((product) => {
        return (
          <div className="card" key={product.id}>
            <h3 className="company">{product.company}</h3>
            <h4 className="title">{product.title}</h4>
            <h4 className="description">{product.description}</h4>
            <div className="price-details">
              <h2 className="price">${product.currentPrice}</h2>
              <h4 className="discount">{product.discount}</h4>
            </div>
            <h4 className="original-price">${product.originalPrice}</h4>
            <div className="buttons">
              <div className="quantity">
                <button
                  type="button"
                  onClick={() => setCount((count) => count - 1)}
                >
                  -
                </button>

                <div class="values">{count}</div>
                <button onClick={() => setCount((count) => count + 1)}>
                  +
                </button>
              </div>
              <div className="add-to-cart">
                <img className="basket" src={cart} alt="basket" />
                <button className="cart" onClick={handleSubmit}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* <div className="mb-2">
        <Button variant="primary">
          <img className="basket" src={cart} alt="basket" />
          <h4>Add to cart</h4>
        </Button>
      </div> */}
    </DataHolderStyles>
  );
}
