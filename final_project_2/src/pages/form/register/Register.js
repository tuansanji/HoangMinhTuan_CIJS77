import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../../../assets/img/logo.png";

import "./register.scss";

function Register() {
  const { t } = useTranslation("content");
  return (
    <div className="signup">
      <h1 className="signup-heading">{t("signup")}</h1>
      <div className="signup-or">
        <span>{t("orsign")}</span>
      </div>
      <div className="signup-icon">
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "google"]} />
        </span>
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </span>
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </span>
        <span className="signup-social">
          <FontAwesomeIcon icon={["fab", "google"]} />
        </span>
      </div>

      <form action="#" className="form__signup">
        <div className="form-group">
          <input
            type="text"
            id="fullname"
            className="signup-input"
            placeholder=" "
            maxLength={24}
          />
          <label htmlFor="fullname" className="signup-label">
            {t("fullname")}
          </label>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="email"
            className="signup-input"
            placeholder=" "
            maxLength={40}
          />
          <label htmlFor="email" className="signup-label">
            Email
          </label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="signup-input"
            placeholder=" "
            maxLength={20}
          />
          <label htmlFor="password" className="signup-label">
            {t("password")}
          </label>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password_confirmation"
            className="signup-input"
            placeholder=" "
            maxLength={20}
          />
          <label htmlFor="password_confirmation" className="signup-label">
            {t("password_confirmation")}
          </label>
        </div>
        <div className="form__submit">{t("signup")}</div>
      </form>

      <p className="signup-already">
        <span>{t("already")}</span>
        <NavLink to="/login" className="login">
          {t("login")}
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
