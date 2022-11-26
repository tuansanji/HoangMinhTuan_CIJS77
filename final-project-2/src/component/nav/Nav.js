import { NavLink } from "react-router-dom";

import ChildGame from "../../pages/games/childGame/ChildGame";
import ChildCommunity from "../../pages/community/childCommunity/childCommunity";

import "./Nav.scss";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__inner">
        <div className="nav__logo">
          <NavLink to="/" className="menu__link">
            <img
              src="https://upload.wikimedia.org/wikipedia/vi/thumb/9/91/FC_Barcelona_logo.svg/1200px-FC_Barcelona_logo.svg.png"
              alt=""
            />
          </NavLink>
        </div>
        <ul className="nav__menu">
          <li className="menu__item">
            <NavLink to="/games" className="menu__link">
              Games
            </NavLink>
            <ChildGame />
          </li>
          <li className="menu__item">
            <NavLink to="/community" className="menu__link">
              Community
            </NavLink>
            <ChildCommunity />
          </li>
          <li className="menu__item">
            <NavLink to="/joinClub" className="menu__link">
              Joinclub
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink to="/contacts" className="menu__link">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="form-group">
          <NavLink to="/register" className="register">
            register
          </NavLink>
          <NavLink to="/login" className="login">
            login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
