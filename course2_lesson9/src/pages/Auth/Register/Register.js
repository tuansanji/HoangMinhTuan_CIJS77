import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth__form auth__register">
      <h3 className="auth__title">Register</h3>
      <label htmlFor="user-name">Username</label>
      <input id="user-name" type="text" />
      <label htmlFor="user-passwork">Passwork</label>
      <input id="user-passwork" type="text" />
      <label htmlFor="passwork-confirmation">Passwork Confirmation</label>
      <input id="passwork-confirmation" type="text" />
      <button type="submit"> Register</button>
      <button type="submit">
        <Link to="/auth/login">Login</Link>
      </button>
    </div>
  );
}
export default Register;
