import { useState } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Slider } from "./Slider";
import { SliderNavlinks } from "./SliderNavlinks";
import { Button } from "./Button";
import { productInfo, productsList } from "../data/products";

export const ProductCard = () => {
  const [activeColor, setActiveColor] = useState("1");

  const selectedColor = () => {
    const selected = productsList.find(
      (product) => product.color === activeColor
    );
    return selected;
  };

  const productColors = () => {
    const colors = productsList.map((product) => product.color);
    return colors;
  };

  const handleColorClick = (color) => {
    setActiveColor(color);
  };

  const handleAddToCartClick = () => {
    Notify.success(
      `You have added a Wallet in the ${
        selectedColor().color_name
      } color to Your cart.`
    );
  };

  return (
    <div className="product-card">
      <Slider product={selectedColor()} />
      <div className="product-card__metadata">
        <p className="product-card__category">{productInfo.category}</p>
        <h1 className="product-card__title">{productInfo.title}</h1>
        <p className="product-card__desc">{productInfo.desc}</p>
        <SliderNavlinks
          onClick={handleColorClick}
          title="Color"
          colors={productColors()}
          activeColor={activeColor}
        />
        <div className="product-card__price-details">
          <h2 className="product-card__price-details--new-price">
            {productInfo.new_price} $
          </h2>
          {productInfo.old_price ? (
            <h4 className="product-card__price-details--old-price">
              {productInfo.old_price} $
            </h4>
          ) : null}
        </div>
        <Button
          onClick={handleAddToCartClick}
          type="button"
          title="Add to cart"
          styles="product-card"
        />
      </div>
    </div>
  );
};
