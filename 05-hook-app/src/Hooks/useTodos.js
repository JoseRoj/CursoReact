import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todosCount = todos.length;
  const todosPending = todos.filter((todo) => !todo.done).length;
  const handleNewTodo = (todo) => {
    /*e.preventDefault();
      const newTodo = {
        id: new Date().getTime(),
        desc: "Nueva tarea",
        done: false,
      };*/
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (todoId) => {
    const action = {
      type: "[TODO] Delete Todo",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggleTodo = (todoId) => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: todoId,
    };
    dispatch(action);
  };

  return {
    todos,
    todosCount,
    todosPending,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
