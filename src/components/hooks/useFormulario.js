import { useState } from "react";
//Hook personalizado para formularios react
export const useFormulario = (initialState = {}) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = (e) => {
    //handleChange es una funcion que recibe un evento y lo guarda en una variable
    //y luego lo guarda en el estado de inputs con el setInputs y lo guarda en el estado de inputs
    const { name, value, checked, type } = e.target;
    setInputs((old) => ({
      ...old,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  //reset es una funcion de react que resetea el estado de inputs al valor inicial
  const reset = () => {
    setInputs(initialState);
  };

  return [inputs, handleChange, reset];
};
