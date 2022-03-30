import React from "react";
import styles from "../../css/Menu/menu.module.css";
import MenuBoard from "./menuBoard";
import Header from "./header";
import "@fortawesome/fontawesome-free/js/all.js";

const Menu = (props) => {
  return (
    <div className={styles.menu_body}>
      <div className={styles.container}>
        <Header />
        <MenuBoard />
      </div>
    </div>
  );
};

export default Menu;
