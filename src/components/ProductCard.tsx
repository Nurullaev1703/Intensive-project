import type { FC } from "react";
import { PLATFORMS_ICONS, type ProductCardType } from "../types/types";
import { Button } from "./Button";
import PlusIcon from "../icons/green-plus.svg";

interface Props {
  info: ProductCardType;
}

export const ProductCard: FC<Props> = function ProductCard({ info }) {
  return (
    <div
      className={`card ${info.platforms.length > 0 && info.advantages.length > 0 && "full"}`}
    >
      <img src={info.image} className="product-image" alt="" />

      <div className="content">
        <h3 className="title">{info.title}</h3>
        <p className="description"> {info.description}</p>
        <div className="prices">
          <h2 className="sale-price">{"$ " + info.salePrice}</h2>
          <p className="old-price">{"$ " + info.price}</p>
        </div>
        <Button text="Оформить подписку" mode="orange" />
        {info.advantages.length > 0 && (
          <div className="advantages">
            {info.advantages.map((advantage) => (
              <div className="row">
                <img src={PlusIcon} alt="" />
                <p className="advantage">{advantage}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {info.platforms.length > 0 && (
        <div className="platforms">
          {info.platforms.map((platform) => (
            <img src={PLATFORMS_ICONS[platform]} alt="" />
          ))}
        </div>
      )}
    </div>
  );
};
