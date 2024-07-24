import Todo from "./Todo";
import styles from "./TodoList.module.css";
import React from "react";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
   return (
      <div className={styles.todoListConteiner}>
         {todos.map((todo) => (
            <Todo
               toggleTodo={toggleTodo}
               deleteTodo={deleteTodo}
               key={todo.id}
               todo={todo}
            />
         ))}
      </div>
   );
};

export default TodoList;
