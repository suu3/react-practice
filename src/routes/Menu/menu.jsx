import React, { useState } from "react";
import styles from "../../css/Menu/menu.module.css";
import MenuBoard from "./menuBoard";
import Header from "./header";
import "@fortawesome/fontawesome-free/js/all.js";

const Menu = (props) => {
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
    <div className={styles.menu_body}>
      <div className={styles.container}>
        <Header />
        <MenuBoard
          menus={menus}
          onAdd={handleAdd}
          onDelete={handleDelete}
          onIncrease={handleIncrement}
          onDecrease={handleDecrement}
        />
      </div>
    </div>
  );
};

export default Menu;
