import React from "react";
import styles from "../../css/Menu/menuRow.module.css";

const MenuRow = ({ menu }) => {
  return (
    <div className={styles.row}>
      <div>
        <span className={styles.name}>{menu.name}</span>
        <span className={styles.price}>{menu.price} Won</span>
        <span className={styles.quantity}>{menu.quantity}</span>
      </div>
      <div className={styles.button_row}>
        <i className={`fas fa-plus plus ${styles.plus}`}></i>
        <i className={`fas fa-minus minus ${styles.minus}`}></i>
        <i className={`fas fa-trash ${styles.trash}`}></i>
      </div>
    </div>
  );
};

export default MenuRow;
