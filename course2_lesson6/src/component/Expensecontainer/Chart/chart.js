import ChartItem from "./ChartItem/chartitem";

import "./chart.css";

function Chart({ ListForChart }) {
  // console.log(ListForChart);
  //   let date = new Date(ListForChart[0].date);
  //   let month = date.getMonth();
  //   console.log(ListForChart);
  //   console.log(month);
  return (
    <div className="container__chart">
      <ChartItem month="Jan" percent="30" />
      <ChartItem month="Feb" percent="50" />
      <ChartItem month="Mar" percent="80" />
      <ChartItem month="Apr" percent="10" />
      <ChartItem month="May" percent="80" />
      <ChartItem month="Jun" percent="10" />
      <ChartItem month="Jul" percent="20" />
      <ChartItem month="Aug" percent="20" />
      <ChartItem month="Sep" percent="30" />
      <ChartItem month="Oct" percent="50" />
      <ChartItem month="Nov" percent="80" />
      <ChartItem month="Dec" percent="10" />
    </div>
  );
}

export default Chart;
