import { useState } from "react";
import "./nav.css";
function Nav({ login, inforUser, languageContent }) {
  return (
    <div className="nav">
      <div className="nav__title">
        <p>Mindx</p>
      </div>
      <div className="nav__user">
        {login ? (
          <p>{languageContent === "vie" ? "Đăng nhập" : "Login"}</p>
        ) : (
          <p>
            {languageContent === "vie" ? "Chào mừng" : "Welcome"},{" "}
            <span style={{ color: "red" }}>{inforUser}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Nav;
