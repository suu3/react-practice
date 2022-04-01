import React from "react";
import styles from "../../css/Accordion/category.module.css";

const Category = ({ menu, handleBtnClick }) => {
  const onClickBtn = () => {
    handleBtnClick(menu.id);
  };
  return (
    <div className={styles.menu}>
      <div className={styles.title}>
        <span>{menu.title}</span>
        <button onClick={onClickBtn} className={styles.btn}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>
      <div className={styles.content}>{menu.content}</div>
    </div>
  );
};

export default Category;
