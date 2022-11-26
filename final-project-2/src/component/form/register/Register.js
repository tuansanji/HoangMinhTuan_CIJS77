import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./register.scss";

function Register() {
  return (
    <div className="signup">
      <h1 className="signup-heading">Sign up</h1>
      <div className="signup-or">
        <span>Or Sign up with</span>
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
            Full name
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
            Password
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
            Password Confirmation
          </label>
        </div>
        <div className="form__submit">Sign Up</div>
      </form>

      <p className="signup-already">
        <span>Already have an account? </span>
        <NavLink to="/login" className="login">
          login
        </NavLink>
      </p>
    </div>
  );
}

export default Register;
