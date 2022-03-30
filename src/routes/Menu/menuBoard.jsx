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
  const handleDelete = (menu) => {
    setMenus((menus) => {
      const updated = { ...menus };
      delete updated[menu.id];
      return updated;
    });
  };

  const handleIncrement = (menu) => {
    setMenus((menus) => {
      const updated = { ...menus };
      const quantity = updated[menu.id].quantity;
      const updatedMenu = { ...menus[menu.id], quantity: quantity + 1 };
      updated[menu.id] = updatedMenu;
      return updated;
    });
  };
  const handleDecrement = (menu) => {
    setMenus((menus) => {
      const updated = { ...menus };
      const quantity = updated[menu.id].quantity;
      const updatedMenu = {
        ...menus[menu.id],
        quantity: quantity === 0 ? 0 : quantity - 1,
      };
      updated[menu.id] = updatedMenu;
      return updated;
    });
  };

  return (
    <>
      <MenuAddForm onAdd={handleAdd} />
      <ul className={styles.menus}>
        {Object.keys(menus).map((key) => (
          <MenuRow
            key={key}
            menu={menus[key]}
            onDelete={handleDelete}
            onIncrease={handleIncrement}
            onDecrease={handleDecrement}
          />
        ))}
      </ul>
    </>
  );
};

export default MenuBoard;
