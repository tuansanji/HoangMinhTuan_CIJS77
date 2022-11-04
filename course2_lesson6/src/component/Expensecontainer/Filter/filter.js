import "./filter.css";

function Filter({ yearFilter }) {
  if (yearFilter.length === 0) {
    yearFilter = ["No data"];
  }
  return (
    <div className="container__filter">
      <p>filter by year</p>
      <select>
        {[...new Set(yearFilter)]
          .sort((a, b) => a - b)
          .map((item, index) => (
            <option key={index}>{item}</option>
          ))}
      </select>
    </div>
  );
}
export default Filter;
