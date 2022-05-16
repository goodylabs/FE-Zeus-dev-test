import classes from "./HistoricalDataChartElem.module.css";

const HistoricalDataChartElem = (props) => {
  return (
    <div className={classes.chartElemContainer}>
      <div
        style={{
          height: `${(props.temperature / 50) * 100}%`,
        }}
        className={classes.chartElem}
      ></div>
    </div>
  );
};

export default HistoricalDataChartElem;
