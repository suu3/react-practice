import React from "react";
import styles from "../../css/Accordion/category.module.css";

const Category = ({ isOpen, menu, handleBtnClick }) => {
  const onClickBtn = () => {
    handleBtnClick(menu.id);
  };
  return (
    <div className={styles.menu}>
      <div className={styles.title}>
        <span>{menu.title}</span>
        <button key={Math.random()} onClick={onClickBtn} className={styles.btn}>
          <i className={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></i>
        </button>
      </div>
      <div
        className={isOpen ? styles.content_open : styles.content_close}
        style={{
          padding: `${(menu.id - 0.8) * 4}rem 2rem ${
            (menu.id - 0.8) * 2
          }rem 2rem`,
        }}
      >
        {menu.content}
      </div>
    </div>
  );
};

export default Category;
