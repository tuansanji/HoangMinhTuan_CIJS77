import { useState, createContext } from "react";
import "./App.css";

import Header from "./component/Header/header";
import Expense from "./component/Expensecontainer/expense";

export const listExpenseGlobal = createContext();
export const yearFilterGlobal = createContext();
function App() {
  const [listExpense, setListExpense] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const handleListExpense = (item) => setListExpense([...listExpense, item]);
  const handleYearFilter = (item) => {
    let date = new Date(item);
    let year = date.getFullYear();
    setYearFilter([...yearFilter, year]);
  };
  return (
    <listExpenseGlobal.Provider value={listExpense}>
      <yearFilterGlobal.Provider value={handleYearFilter}>
        <div className="App">
          <Header
            handleListExpense={handleListExpense}
            handleYearFilter={handleYearFilter}
          />
          <Expense yearFilter={yearFilter} />
        </div>
      </yearFilterGlobal.Provider>
    </listExpenseGlobal.Provider>
  );
}

export default App;
