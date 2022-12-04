import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation("content");

  return (
    <div className="signup">
      <h1 className="signup-heading">{t("login")}</h1>
      <div className="signup-or">
        <span>{t("orsign2")}</span>
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
            id="Name"
            className="signup-input"
            placeholder=" "
            maxLength={24}
          />
          <label htmlFor="fullname" className="signup-label">
            {t("name-email")}
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

        <div className="form__submit">{t("signin")}</div>
      </form>

      <p className="signup-already">
        {/* <NavLink to="/register" className="login">
          {t("signup")}
        </NavLink> */}
      </p>
    </div>
  );
}

export default Login;
