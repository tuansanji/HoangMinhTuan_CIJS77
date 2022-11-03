import "./expenseitem.css";
function ExpenseItem(props) {
  let date = new Date(props.date);
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  const textMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="list-expense__item">
      <div className="date">
        <div className="date__day">{day}</div>
        <div className="date__month">{textMonth[month]}</div>
        <div className="date__year">{year}</div>
      </div>
      <div className="title">{props.title}</div>
      <div className="amount">
        <p>${props.amount}</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
