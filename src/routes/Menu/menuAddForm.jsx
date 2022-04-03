import React, { memo } from "react";
import styles from "../../css/Menu/menuAddForm.module.css";

const MenuAddForm = memo((props) => {
  const nameInputRef = React.createRef();
  const priceInputRef = React.createRef();
  const formRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const price = priceInputRef.current.value;
    const menu = {
      id: Date.now(),
      name,
      price,
      quantity: 0,
    };
    //값이 없으면 alert
    if (name === "" || price === "") {
      alert("Please fill in all inputs");
      return;
    }

    props.onAdd(menu);
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className={styles.add_form} onSubmit={onSubmit}>
      <input
        ref={nameInputRef}
        type="text"
        className={styles.add_input}
        placeholder="Name"
      />
      <input
        ref={priceInputRef}
        type="text"
        className={styles.add_input}
        placeholder="Price"
      />
      <button className={styles.add_button}>Add</button>
    </form>
  );
});

export default MenuAddForm;
