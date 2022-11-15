import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../data/products";
function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const item = products.filter((item) => item.id == params.id);
    setProduct(item);
  }, [params.id]);

  return (
    <div className="container__item ">
      {product ? (
        <div className="product-item">
          <h1>{product[0].title}</h1>
          <b>{product[0].price}</b>
          <p className="description">{product[0].description}</p>
          <img src={product[0].image} alt="" />
          <div className="product-raiting">
            <span>{product[0].rating.rate}</span>
            <span>{product[0].rating.count}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Product;
