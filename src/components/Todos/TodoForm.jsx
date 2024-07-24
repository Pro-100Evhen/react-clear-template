import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
   const [text, setText] = useState("");
   const onSubmitHendler = (event) => {
      event.preventDefault();
      addTodo(text);
      setText("");
   };
   return (
      <div className={styles.todoFormConteiner}>
         <form onSubmit={onSubmitHendler}>
            <input
               value={text}
               type="text"
               placeholder="Enter new todo"
               onChange={(e) => setText(e.target.value)}
            />
            <Button title="submit">Submit</Button>
         </form>
      </div>
   );
};

export default TodoForm;
