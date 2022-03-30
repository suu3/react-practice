import React from "react";
import MenuRow from "./menuRow";
import styles from "../../css/Menu/menuBoard.module.css";

const MenuBoard = (props) => {
  const onClickDelete = (menu) => {
    props.onDelete(menu);
  };
  const onClickIncrease = (menu) => {
    props.onIncrease(menu);
  };
  const onClickDecrease = (menu) => {
    props.onDecrease(menu);
  };
  return (
    <>
      <ul className={styles.menus}>
        {Object.keys(props.menus).map((key) => (
          <MenuRow
            key={key}
            menu={props.menus[key]}
            onDelete={onClickDelete}
            onIncrease={onClickIncrease}
            onDecrease={onClickDecrease}
          />
        ))}
      </ul>
    </>
  );
};

export default MenuBoard;
