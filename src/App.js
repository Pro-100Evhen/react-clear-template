import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodosActions from "./components/Todos/TodosActions";

function App() {
   const [todos, setTodos] = useState([]);
   const addTodoHendler = (text) => {
      const newTodo = {
         id: uuidv4(),
         text,
         isComplited: false,
      };
      setTodos([...todos, newTodo]);
   };

   const deleteTodoHendler = (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
   };

   const toggleTodoHendler = (id) => {
      setTodos(
         todos.map((todo) => {
            return todo.id === id
               ? { ...todo, isComplited: !todo.isComplited }
               : { ...todo };
         })
      );
   };

   const reserTodosHendler = () => {
      setTodos([]);
   };

   const deleteCompletedTodosHendler = () => {
      setTodos(todos.filter((todo) => !todo.isComplited));
   };

   const complitedTodosCount = todos.filter((todo) => todo.isComplited).length;
   return (
      <div className="App">
         <h1>Todo App</h1>
         <TodoForm addTodo={addTodoHendler} />

         {todos.length > 0 && (
            <TodosActions
               completedTodosExist={!!complitedTodosCount}
               resetTodos={reserTodosHendler}
               deleteCompletedTodos={deleteCompletedTodosHendler}
            />
         )}

         {!todos.length ? (
            <h2>Todo list is empty</h2>
         ) : (
            <TodoList
               toggleTodo={toggleTodoHendler}
               deleteTodo={deleteTodoHendler}
               todos={todos}
            />
         )}

         {complitedTodosCount > 0 && (
            <h2>{`You have completed ${complitedTodosCount} ${
               complitedTodosCount > 1 ? "todos" : "todo"
            }!`}</h2>
         )}
      </div>
   );
}

export default App;
