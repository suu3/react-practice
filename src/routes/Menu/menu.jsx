import React, { useState } from "react";
import styles from "../../css/Menu/menu.module.css";
import MenuBoard from "./menuBoard";
import Header from "./header";
import TotalCount from "./totalCount";
import "@fortawesome/fontawesome-free/js/all.js";

const Menu = (props) => {
  const [selectedMenus, setSelectedMenus] = useState({});
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
    setSelectedMenus((selectedMenus) => {
      const updated = { ...selectedMenus };
      delete updated[menu.id];
      return updated;
    });
  };

  const handleIncrement = (menu) => {
    const updated = { ...menus };
    const quantity = updated[menu.id].quantity;
    const updatedMenu = { ...menus[menu.id], quantity: quantity + 1 };
    updated[menu.id] = updatedMenu;
    setMenus(updated);

    if (updatedMenu.quantity > 0) {
      const updatedSelectedMenus = { ...selectedMenus };
      updatedSelectedMenus[menu.id] = updatedMenu;
      setSelectedMenus(updatedSelectedMenus);
    }
  };

  const handleDecrement = (menu) => {
    const updated = { ...menus };
    const quantity = updated[menu.id].quantity;
    const updatedMenu = {
      ...menus[menu.id],
      quantity: quantity === 0 ? 0 : quantity - 1,
    };
    updated[menu.id] = updatedMenu;
    setMenus(updated);

    if (updatedMenu.quantity === 0) {
      const updatedSelectedMenus = { ...selectedMenus };
      delete updatedSelectedMenus[menu.id];
      setSelectedMenus(updatedSelectedMenus);
    }
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
        <TotalCount selectedMenus={selectedMenus} />
      </div>
    </div>
  );
};

export default Menu;
