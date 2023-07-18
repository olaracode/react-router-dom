import React from "react";
import TodoList from "../component/TodoList.jsx";
const Todo = () => {
  return (
    <div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
      <div className="card w-75">
        <div className="card-header">Mi todo list</div>
        <div className="card-body">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Todo;
