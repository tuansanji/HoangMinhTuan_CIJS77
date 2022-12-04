import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, memo, useCallback, useRef, useState } from "react";
import i18next from "i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../assets/img/logo.png";
import Form from "../../pages/form/Form";

import HomeChild from "../../pages/home/homeChild/HomeChild";
import PagesChild from "../../pages/pages/pagesChild/PagesChild";
import "./nav.scss";

function Nav() {
  const navRef = useRef();
  const [openNav, setOpenNav] = useState(false);

  const { i18n, t } = useTranslation(["nav"]);
  const languageCurent = i18n.languages[0];
  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguegeChange = useCallback(
    (e) => {
      i18n.changeLanguage(e);
    },
    [languageCurent]
  );
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className="nav" ref={navRef}>
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className={openNav ? "nav__menu nav__open" : "nav__menu"}>
        <ul onClick={handleOpenNav}>
          <li className="menu__item">
            <NavLink className="a1" to="/">
              {t("home")}
            </NavLink>
            <HomeChild />
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/pages">
              {t("pages")}
            </NavLink>
            <PagesChild />
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/overview">
              {t("overview")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/community">
              {t("community")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/store">
              {t("store")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/blog">
              {t("blog")}
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="a1" to="/contact">
              {t("contact")}
            </NavLink>
          </li>
        </ul>
        <div id="store-icon">
          <span>0</span>
          <FontAwesomeIcon icon={["fas", "store"]} />
        </div>
        <div className="nav__language">
          <span
            className={languageCurent == "vi" ? "language__active" : null}
            value="vi"
            onClick={() => {
              handleLanguegeChange("vi");
            }}
          >
            VI
          </span>
          <span style={{ color: "#e4a101" }}>|</span>
          <span
            className={languageCurent == "en" ? "language__active" : null}
            value="en"
            onClick={(value) => {
              handleLanguegeChange("en");
            }}
          >
            EN
          </span>
        </div>
        <Form></Form>
      </div>

      <div className="nav__close" onClick={handleOpenNav}>
        <FontAwesomeIcon icon={["fas", "bars"]} />
      </div>
    </div>
  );
}

export default memo(Nav);
