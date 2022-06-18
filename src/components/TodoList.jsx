import React from "react";
import Formulario from "./Formulario";
import { useState, useEffect } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //useEffect para guardar las tareas en localStorage
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);
  //useEffect para cada vez que un todo cambia y guardar en el localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const agregarTodo = (todo) => {
    console.log(todo);
    setTodos((old) => [...old, todo]);
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {
    const editarTodos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );
    setTodos(editarTodos);
  };
  return (
    //Comunicacion de Componentes entre TodoList y Formulario mediante props desestructurados
    <>
      <ul className="list-group list-group-numbered">
        <Formulario agregarTodo={agregarTodo} />
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            eliminarTodo={eliminarTodo}
            editarTodo={editarTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
