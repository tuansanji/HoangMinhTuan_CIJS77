import { Link } from "react-router-dom";

import { products } from "../../data/products";

import "./style.css";
function Products() {
  return (
    <div className="container__products">
      <h2> Product List</h2>
      {products.map((item) => (
        <Link key={item.id} to={`/products/${item.id}`}>
          <div className="container__product--item">
            <p>{item.title}</p>
            <b>{item.price}</b>
          </div>
        </Link>
      ))}
    </div>
  );
}
export default Products;
