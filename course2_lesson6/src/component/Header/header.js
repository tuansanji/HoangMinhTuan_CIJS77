import { useState } from "react";
import HeaderActive from "./Active/active";
import "./header.css";

function Header(props) {
  const [header, setHeader] = useState(false);

  const handleHeader = () => setHeader(!header);

  return header ? (
    <HeaderActive
      handleChartExpense={props.handleChartExpense}
      handleListExpense={props.handleListExpense}
      handleHeader={handleHeader}
    />
  ) : (
    <div className="header">
      <button className="btn btn-primary" onClick={handleHeader}>
        <p>ADD NEW EXPENSE</p>
      </button>
    </div>
  );
}

export default Header;
