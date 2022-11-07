import { useState } from "react";
import "./nav.css";
function Nav({ login, inforUser }) {
  return (
    <div className="nav">
      <div className="nav__title">
        <p>Mindx</p>
      </div>
      <div className="nav__user">
        {login ? (
          <p>Login</p>
        ) : (
          <p>
            Welcome, <span style={{ color: "red" }}>{inforUser}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Nav;
