import React from "react";
import Button from "../UI/Button";
import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";

const TodosActions = ({
   resetTodos,
   deleteCompletedTodos,
   completedTodosExist,
}) => {
   return (
      <>
         <Button onClick={resetTodos} title={"Очистити"}>
            <RiRefreshLine />
         </Button>
         <Button
            onClick={deleteCompletedTodos}
            title={"Видалити виконані задачі"}
            disabled={!completedTodosExist}
         >
            <RiDeleteBin2Line />
         </Button>
         {}
      </>
   );
};

export default TodosActions;
