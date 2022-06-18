import React from "react";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3 text-muted">
        TodoApp{" "}
        <img
          src="https://img.icons8.com/plasticine/100/undefined/to-do.png"
          alt="TodoApp Icon"
        />
      </h1>
      <TodoList />
    </div>
  );
};

export default App;
