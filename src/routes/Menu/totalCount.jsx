import React, { useMemo } from "react";
import styles from "../../css/Menu/totalCount.module.css";

const TotalCount = ({ selectedMenus }) => {
  const calTotalCount = (selectedMenus) => {
    return Object.values(selectedMenus).reduce(function (prev, next) {
      return prev + next.quantity * next.price;
    }, 0);
  };
  const totalCount = useMemo(
    () => calTotalCount(selectedMenus),
    [selectedMenus]
  );

  return (
    <div className={styles.footer}>
      <span className={styles.title}>Selected List</span>
      {Object.keys(selectedMenus).map((key) => (
        <p key={key} className={styles.row}>
          <span>{selectedMenus[key].name}</span>
          <span>
            {selectedMenus[key].quantity * selectedMenus[key].price} Won
          </span>
        </p>
      ))}
      <div className={styles.total}>
        <span>Total Count</span>
        <span>{totalCount} Won</span>
      </div>
    </div>
  );
};

export default React.memo(TotalCount);
