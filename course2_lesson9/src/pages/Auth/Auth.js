import { Outlet, Link } from "react-router-dom";

function Auth() {
  return (
    <div className="auth test">
      <Link to="/auth/login">Login</Link>
      <Link to="/auth/register">Register</Link>
      <Outlet />
    </div>
  );
}
export default Auth;
