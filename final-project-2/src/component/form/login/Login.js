import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  return (
    <div className="signup">
      <h1 className="signup-heading">Sign In</h1>
      <div className="signup-or">
        <span>Or sign in with</span>
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
            Name or Email
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

        <div className="form__submit">Sign In</div>
      </form>

      <p className="signup-already">
        <span>Already have an account? </span>
        <NavLink to="/register" className="login">
          Sing Up
        </NavLink>
      </p>
    </div>
  );
}

export default Login;
