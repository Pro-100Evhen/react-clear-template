import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
   return (
      <div
         className={`${styles.todo} ${
            todo.isComplited ? styles.completedTodo : ""
         }`}
      >
         <RiTodoFill className={styles.todoIcon} />
         <div className={styles.todoText}>{todo.text}</div>
         <RiDeleteBin2Line
            onClick={() => deleteTodo(todo.id)}
            className={styles.deleteIcon}
         />
         <FaCheck
            onClick={() => toggleTodo(todo.id)}
            className={styles.checkIcon}
         />
      </div>
   );
};

export default Todo;
