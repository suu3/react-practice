import React from "react";
import styles from "../../css/Menu/menuRow.module.css";

const MenuRow = ({ menu, onDelete, onIncrease, onDecrease }) => {
  const onClickDelete = () => {
    onDelete(menu);
  };
  const onClickIncrease = () => {
    onIncrease(menu);
  };
  const onClickDecrease = () => {
    onDecrease(menu);
  };
  return (
    <div className={styles.row}>
      <div>
        <span className={styles.name}>{menu.name}</span>
        <span className={styles.price}>{menu.price} Won</span>
        <span className={styles.quantity}>{menu.quantity}</span>
      </div>
      <div className={styles.button_row}>
        <span onClick={onClickIncrease}>
          <i className={`fas fa-plus plus ${styles.plus}`}></i>
        </span>
        <span onClick={onClickDecrease}>
          <i className={`fas fa-minus minus ${styles.minus}`}></i>
        </span>
        <span onClick={onClickDelete}>
          <i className={`fas fa-trash ${styles.trash}`}></i>
        </span>
      </div>
    </div>
  );
};

export default MenuRow;
