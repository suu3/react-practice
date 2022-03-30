import React, { useState } from "react";
import MenuRow from "./menuRow";
import MenuAddForm from "./menuAddForm";
import styles from "../../css/Menu/menuBoard.module.css";

const MenuBoard = (props) => {
  const [menus, setMenus] = useState({
    1: {
      id: 1,
      name: "hamburger",
      price: "5000",
      quantity: 0,
    },
    2: {
      id: 2,
      name: "coke",
      price: "2000",
      quantity: 0,
    },
  });
  const handleAdd = (menu) => {
    setMenus((menus) => {
      const updated = { ...menus };
      updated[menu.id] = menu;
      return updated;
    });
  };
  return (
    <>
      <MenuAddForm onAdd={handleAdd} />
      <ul className={styles.menus}>
        {Object.keys(menus).map((key) => (
          <MenuRow key={key} menu={menus[key]} />
        ))}
      </ul>
    </>
  );
};

export default MenuBoard;
