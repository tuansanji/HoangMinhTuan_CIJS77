import { useContext, useEffect, useState } from "react";
import ExpenseItem from "./ExpenseItem/expenseitem";
import { listExpenseGlobal } from "../../../App";

import "./list.css";

function ListExpense() {
  const [scroll, setScroll] = useState(false);

  const ListExpense = useContext(listExpenseGlobal);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY >= 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: `smooth`,
    });
  };
  return (
    <div className="container__list-expense">
      {ListExpense.map((item, index) => (
        <ExpenseItem
          ListExpense={ListExpense}
          key={index}
          title={item.name}
          amount={item.amount}
          date={item.date}
        />
      ))}
      {scroll && (
        <button
          onClick={handleScrollToTop}
          style={{
            height: "30px",
            position: "fixed",
            right: "-100px",
            bottom: "100px",
          }}
        >
          go to top
        </button>
      )}
    </div>
  );
}

export default ListExpense;
