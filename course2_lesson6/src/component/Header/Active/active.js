import { useState, useContext } from "react";
import { yearFilterGlobal } from "../../../App";
import "./active.css";

function HeaderActive(props) {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const listYearFilter = useContext(yearFilterGlobal);
  const handleHeaderExit = () => props.handleHeader();
  const handleHeaderSub = () => {
    if (expense.name !== "" && expense.amount !== "" && expense.date !== "") {
      props.handleListExpense(expense);
      props.handleHeader();
      listYearFilter(expense.date);
    } else {
      alert("vui lòng điền đầy đủ thông tin");
    }
  };
  const handeleExpenseChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (value.length === e.target.maxLength) {
      alert("giới hạn kí tự cho phép nhập vào");
    }
    setExpense({
      ...expense,
      [name]: value,
    });
  };
  return (
    <div className="container__header--active">
      <div className="header__input--container">
        <div className="input-group">
          <label>Name</label>
          <input
            maxLength="100"
            type="text"
            value={expense.name}
            placeholder="Enter name here..."
            name="name"
            onChange={handeleExpenseChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Amount</label>
          <input
            maxLength="10"
            type="text"
            value={expense.amount}
            placeholder="Enter amount here..."
            name="amount"
            onChange={handeleExpenseChange}
          ></input>
        </div>
        <div className="input-group">
          <label>Date</label>
          <input
            type="date"
            value={expense.date}
            name="date"
            onChange={handeleExpenseChange}
          ></input>
        </div>
      </div>
      <div className="frame">
        <button className="btn btn-add" onClick={handleHeaderSub}>
          ADD
        </button>
        <button className="btn btn-exit" onClick={handleHeaderExit}>
          CANCEL
        </button>
      </div>
    </div>
  );
}

export default HeaderActive;
