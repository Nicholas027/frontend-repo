import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Todo = ({ todo, eliminarTodo, editarTodo }) => {
  const { id, nombre, descripcion, estado, prioridad } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-2 bg-light">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {nombre} ({estado ? "Finalizado" : "Pendiente"})
        </div>
        <p>{descripcion}</p>
        <div>
          <Button
            variant="contained"
            startIcon={<DeleteIcon />}
            onClick={() => eliminarTodo(id)}
            className="me-2"
            color="error"
          >
            Eliminar
          </Button>

          <button
            className="btn btn-warning me-2"
            onClick={() => editarTodo(id)}
          >
            Editar
          </button>
        </div>
      </div>
      <span className="badge bg-success rounded-pill">
        {prioridad && "Prioritario"}
      </span>
    </li>
  );
};

export default Todo;
