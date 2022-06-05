import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista(props) {
  return (
    <li>
      <a href={props.el.web}>{props.el.name}</a>
    </li>
  );
}
export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estaciones: ["Otoño", "Invierno", "Primavera", "Verano"],
    };
  }

  render() {
    console.log(data);
    return (
      <div>
        <h2>Renderizado de elementos</h2>
        <h3>Estaciones del Año</h3>
        <ul>
          {this.state.estaciones.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
        <h3>Frameworks Frontend JS</h3>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
