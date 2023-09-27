// import { useState } from "react";
import { Slider } from "./Slider";
import { SliderNavlinks } from "./SliderNavlinks";
import { Button } from "./Button";
import { productInfo, productsList } from "../data/products";

export const ProductCard = () => {
  // const [isActive, setIsActive] = useState(true);

  // console.log(productsList.color);

  return (
    <div className="product-card">
      <Slider products={productsList} />
      <div className="product-card__info-box">
        <p className="product-card__category">{productInfo.category}</p>
        <h1 className="product-card__title">{productInfo.title}</h1>
        <p className="product-card__desc">{productInfo.desc}</p>
        <SliderNavlinks title="Color" products={productsList} />
        <div className="product-card__price">
          <h2 className="product-card__price--new">{productInfo.new_price}</h2>
          {productInfo.old_price ? (
            <h4 className="product-card__price--old">
              {productInfo.old_price}
            </h4>
          ) : null}
        </div>
        <Button type="button" title="Add to cart" styles="--product-card" />
      </div>
    </div>
  );
};
