import { useState, createContext, useEffect } from "react";
import "./App.css";
import "../src/fontawesome";

import Header from "./component/Header/header";
import Expense from "./component/Expensecontainer/expense";

export const listExpenseGlobal = createContext();
export const yearFilterGlobal = createContext();
function App() {
  const [listExpense, setListExpense] = useState([]);
  const [yearFilter, setYearFilter] = useState([]);
  const [yearChart, setYearChart] = useState([]);
  const [yearDataChart, setYearDataChart] = useState([]);

  // list expense
  const handleListExpense = (item) => setListExpense([...listExpense, item]);
  //filter year
  const handleYearFilter = (item) => {
    let date = new Date(item);
    let year = date.getFullYear();
    setYearFilter([...yearFilter, year]);
  };
  // handle year chart
  // const handleChartExpense = (item) => {
  //   const date = new Date(item.date);
  //   let getYearChart = date.getFullYear();
  //   let getMonthChart = date.getMonth() + 1;
  //   setYearChart([...yearChart, getYearChart]);
  //   setYearDataChart([
  //     ...yearDataChart,
  //     {
  //       [getYearChart]: {
  //         [getMonthChart]: item.amount,
  //       },
  //     },
  //   ]);
  // };
  // const newTest = yearDataChart.map((item, index) => {
  //   console.log([...item]);
  // });
  // useEffect(() => {
  //   console.log(newTest);
  // }, [yearDataChart]);
  return (
    <listExpenseGlobal.Provider value={listExpense}>
      <yearFilterGlobal.Provider value={handleYearFilter}>
        <div className="App">
          <Header
            // handleChartExpense={handleChartExpense}
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
