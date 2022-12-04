import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation(["content"]);
  return (
    <div className="form-group">
      <NavLink to="/register" className="register">
        {t("register")}
      </NavLink>
      <NavLink to="/login" className="login">
        {t("login")}
      </NavLink>
    </div>
  );
}

export default Form;
