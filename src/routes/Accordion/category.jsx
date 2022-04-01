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
        <button onClick={onClickBtn} className={styles.btn}>
          {isOpen ? (
            <i className="fas fa-angle-up"></i>
          ) : (
            <i className="fas fa-angle-down"></i>
          )}
        </button>
      </div>
      <div className={isOpen ? styles.content_open : styles.content_close}>
        {menu.content}
      </div>
    </div>
  );
};

export default Category;
