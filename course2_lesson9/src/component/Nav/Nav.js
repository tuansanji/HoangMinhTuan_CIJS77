import { NavLink } from "react-router-dom";

function Nav() {
  const activeClass = (params) => {
    return params.isActive ? "active" : "";
  };
  return (
    <div className="container__nav">
      <ul>
        <li>
          <NavLink to="./auth" className={activeClass}>
            Auth
          </NavLink>
        </li>
        <li>
          <NavLink to="./products" className={activeClass}>
            products
          </NavLink>
        </li>
        <li>
          <NavLink to="./cart" className={activeClass}>
            cart
          </NavLink>
        </li>
        <li>
          <NavLink to="./about" className={activeClass}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="./invoices" className={activeClass}>
            invoices
          </NavLink>
        </li>
        <li>
          <NavLink to="./profile" className={activeClass}>
            profile
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Nav;
