import { useContext } from "react";

import Filter from "./Filter/filter";
import Chart from "./Chart/chart";
import ListExpense from "./List/list";
import { listExpenseGlobal } from "../../App";
import "./expense.css";
function Expense({ yearFilter }) {
  const ListForChart = useContext(listExpenseGlobal);
  return (
    <div className="container">
      <Filter yearFilter={yearFilter} />
      <Chart ListForChart={ListForChart} />
      <ListExpense />
    </div>
  );
}

export default Expense;
