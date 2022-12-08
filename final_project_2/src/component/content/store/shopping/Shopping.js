import React from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Accessories from "../Accessories";
import "./shopping.scss";

function Shopping({
  img,
  name,
  price,
  introduce,
  handleBuy,
  handleCloseShopping,
}) {
  const { t } = useTranslation(["content"]);
  const handleInforGame = (item) => console.log(item);
  return (
    <div className="shopping__modal">
      <div className="modal__overlay"></div>
      <div className="modal__body">
        <div className="modal__inner">
          <FontAwesomeIcon
            className="close-btn btn"
            icon={["fas", "xmark"]}
            onClick={handleCloseShopping}
          />

          <Accessories
            img={img}
            name={name}
            price={price}
            handleBuy={handleBuy}
          />
          <div className="description">
            <h3>
              {t("rating")} :
              <FontAwesomeIcon icon={["fas", "star"]} />
            </h3>
            <h4>{name}</h4>
            <p>{introduce}</p>
            <button onClick={handleInforGame}>{t("buy-now")}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shopping;
