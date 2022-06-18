import React from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "./hooks/useFormulario";
import Button from "@mui/material/Button";

const Formulario = ({ agregarTodo }) => {
  //Agregar Tarea a la lista en base a los valores de useState
  const initialState = {
    nombre: "",
    descripcion: "",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handleChange, reset] = useFormulario(initialState);

  const { nombre, descripcion, estado, prioridad } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      //Si el nombre esta vacio o solo tiene espacios en blanco entonces no se agrega el todo y se muestra un mensaje de error-
      e.target[0].focus(); //-renderizado por la dependencia de sweetalert2
      Swal.fire({
        title: "Error!",
        text: "Nombre Obligatorio!",
        icon: "error",
      });
      return;
    }
    if (!descripcion.trim()) {
      //Si la descripcion esta vacia o solo tiene espacios en blanco entonces no se agrega el todo y se muestra un mensaje de error
      e.target[1].focus();
      Swal.fire({
        title: "Error",
        text: "Descripcion Obligatoria!",
        icon: "error",
      });
      return;
    }
    Swal.fire({
      //Si pasa las validaciones, la tarea se agrega a la lista y se resetea el formulario
      title: "Exito!",
      text: "Tarea Agregada!",
      icon: "success",
    });

    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado === "pendiente" ? false : true,
      prioridad: prioridad,
      id: uuidv4(), //Dependencia uuid para generar un id unico
    });

    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="Nombre"
          value={nombre}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="Ingrese descripción"
          name="descripcion"
          value={descripcion}
          onChange={handleChange}
          className="form-control mb-2"
        />
        <select
          name="estado"
          value={estado}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            id="idCheckbox"
            checked={prioridad}
            onChange={handleChange}
            className="form-check-input mb-2"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar prioridad
          </label>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className="my-2"
        >
          Agregar tarea
        </Button>
      </form>
    </>
  );
};

export default Formulario;
