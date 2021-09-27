import React from 'react';

let estudiante = {
    nombre: "Sebastian",
    edad: 18
};

var color = "azul";

const NuevoElemento = (props) => (
    <div className="contenedor">
        <h3>Estudiante</h3>
        <h4>{ props.nombre }</h4>
        <p>Edad: { estudiante.edad } </p>
        <span>{ color }</span>
    </div>
)

export default NuevoElemento; 