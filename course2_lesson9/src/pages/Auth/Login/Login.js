import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth__form auth__login">
      <div className="loggin__form">
        <h3 className="auth__title">Login</h3>
        <label htmlFor="user-name">Username</label>
        <input id="user-name" type="text" />
        <label htmlFor="user-passwork">Passwork</label>
        <input id="user-passwork" type="text" />
      </div>
      <button type="submit"> Login</button>
      <button type="submit">
        <Link to="/auth/register">Register</Link>
      </button>
    </div>
  );
}
export default Login;
