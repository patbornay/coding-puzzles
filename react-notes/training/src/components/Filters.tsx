import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles["filters"]}>
      <h4>Filters</h4>
      <div className="hourly-rate-section">
        <h5>Hourly rate</h5>
        <a>Clear</a>
        <div className="min-max-container">
          <div>min</div>
          <div>to</div>
          <div>max</div>
        </div>
      </div>
      <div className="countries-section">
        <h5>Countries</h5>
        <a href="">Clear</a>
        <input />
      </div>
    </div>
  );
};
