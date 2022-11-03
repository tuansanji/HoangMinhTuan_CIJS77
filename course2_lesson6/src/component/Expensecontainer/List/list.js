import { useContext } from "react";
import ExpenseItem from "./ExpenseItem/expenseitem";
import { listExpenseGlobal } from "../../../App";

import "./list.css";

function ListExpense() {
  const ListExpense = useContext(listExpenseGlobal);
  return (
    <div className="container__list-expense">
      {ListExpense.map((item, index) => (
        <ExpenseItem
          key={index}
          title={item.name}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default ListExpense;
