import React from "react";
import styles from "../../css/Menu/totalCount.module.css";

const TotalCount = ({ selectedMenus }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.title}>Selected List</span>
      {Object.keys(selectedMenus).map((key) => (
        <p className={styles.row}>
          <span>{selectedMenus[key].name}</span>
          <span>
            {selectedMenus[key].quantity * selectedMenus[key].price} Won
          </span>
        </p>
      ))}
      <div className={styles.total}>
        <span>Total Count</span>
        <span>
          {Object.values(selectedMenus).reduce(function (prev, next) {
            return prev + next.quantity * next.price;
          }, 0)}{" "}
          Won
        </span>
      </div>
    </div>
  );
};

export default TotalCount;
