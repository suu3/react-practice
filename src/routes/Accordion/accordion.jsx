import React, { useState } from "react";
import styles from "../../css/Accordion/accordion.module.css";
import Category from "./category";
import "@fortawesome/fontawesome-free/js/all.js";

const Accordion = (props) => {
  const [isOpen, setIsOpen] = useState({
    1: false,
    2: false,
    3: false,
  });
  const menus = {
    1: {
      id: 1,
      title: "Category A",
      content: "Content of Category A",
    },
    2: {
      id: 2,
      title: "Category B",
      content: "Content of Category B",
    },
    3: {
      id: 3,
      title: "Category C",
      content: "Content of Category C",
    },
  };
  const handleBtnClick = (key) => {
    console.log(key);

    setIsOpen((key) => {
      const update = { ...isOpen };
      update[key] = true;
      return update;
    });
  };
  return (
    <div className={styles.container}>
      <ul>
        {Object.keys(menus).map((key) => {
          return (
            <Category
              key={key}
              handleBtnClick={handleBtnClick}
              menu={menus[key]}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
