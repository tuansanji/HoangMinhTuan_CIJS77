import { useState, useEffect, useCallback, memo } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Shopping from "../../component/content/store/shopping/Shopping";

import BreadCrumb from "../../component/content/breadCrumb/BreadCrumb";
import Accessories from "../../component/content/store/Accessories";
import { ACCESSORIES_DATA } from "../.././data/api/data";

import "./store.scss";
function Store() {
  const { t } = useTranslation(["content"]);
  const [accessories, setAccessories] = useState([]);
  const [shopping, setShopping] = useState({});
  const [buy, setBuy] = useState(false);
  useEffect(() => {
    axios
      .get(ACCESSORIES_DATA)
      .then((response) => setAccessories(response.data))
      .catch((error) => console.log(error));
  }, []);
  const handleBuy = useCallback((item) => {
    setBuy(true);
    setShopping(item);
  }, []);
  return (
    <div className="container__store">
      {buy && (
        <Shopping
          handleCloseShopping={() => {
            setBuy(false);
            setShopping({});
          }}
          img={shopping.img}
          name={shopping.name}
          price={shopping.price}
          introduce={shopping.introduce}
        />
      )}
      <BreadCrumb
        title1={t("access")}
        title2={t("store")}
        currentpage={t("store")}
      />
      <div className="store__shop">
        <div className="container">
          <div className="row">
            {accessories &&
              accessories.map((item) => (
                <Accessories
                  handleBuy={() => handleBuy(item)}
                  key={item.id}
                  img={item.img}
                  name={item.name}
                  price={item.price}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Store);
