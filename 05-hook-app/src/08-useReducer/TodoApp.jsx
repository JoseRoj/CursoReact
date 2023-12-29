//import { useEffect, useReducer } from "react";
//import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../Hooks/useTodos";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    todosPending,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodos();
  return (
    <>
      <h1>
        TodoApp: {todosCount},<small> pendientes : {todosPending}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={(id) => handleToggleTodo(id)}
          />
        </div>
        <div className="col-5">
          <h4> Agregar TODO</h4>
          <hr></hr>
          {<TodoAdd onNewTodo={(todo) => handleNewTodo(todo)} />}
        </div>
      </div>
    </>
  );
};
