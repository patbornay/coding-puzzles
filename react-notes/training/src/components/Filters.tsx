import styles from "./Filters.module.css";

export const Filters = () => {
  return (
    <div className={styles["filters"]}>
      <h4>Filters</h4>
      <div className={styles["hourly-rate-section"]}>
        <div className={styles["hourly-rate__heading"]}>
          <h5>Hourly rate</h5>
          <p>
            <a href="">Clear</a>
          </p>
        </div>
        <div className={styles["hourly-rate__min-max-controls"]}>
          <div>
            <input placeholder="$0" />
          </div>
          <div>to</div>
          <div>
            <input placeholder="$80+"/>
          </div>
        </div>
      </div>
      <div className={styles["countries-section"]}>
        <div className={styles["countries__heading"]}>
          <h5>Countries</h5>
          <p>
            <a href="">Clear</a>
          </p>
        </div>
        <input placeholder="search countries" />
      </div>
    </div>
  );
};
