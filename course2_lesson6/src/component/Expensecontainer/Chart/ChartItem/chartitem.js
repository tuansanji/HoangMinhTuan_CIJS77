import "./chartitem.css";

function ChartItem(props) {
  return (
    <div className=".container__chart--item">
      <div className="chart__item--bar">
        <div
          className="chart__item--fil"
          style={{ height: `${props.percent}%` }}
        ></div>
      </div>
      <div className="chart__item--month">{props.month}</div>
    </div>
  );
}
export default ChartItem;
