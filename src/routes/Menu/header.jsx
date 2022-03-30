import React from "react";
import styles from "../../css/Menu/header.module.css";
const Header = (props) => {
  return (
    <div className={styles.header}>
      <i className="fas fa-utensils"></i>
      <span>Menu</span>
    </div>
  );
};

export default Header;
