import React, { Component } from "react";

export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  restar = (e) => {
    console.log("sumando");

    this.setState({
      contador: this.state.contador - 1,
    });
  };
  sumar = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };
  render() {
    return (
      <div>
        <h2> Eventos en componentes de clase ES6</h2>
        <h3> {this.state.contador}</h3>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </div>
      </div>
    );
  }
}

export class Eventos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }
  restar(e) {
    console.log("sumando");

    this.setState({
      contador: this.state.contador - 1,
    });
  }
  sumar(e) {
    console.log("sumando");

    this.setState({
      contador: this.state.contador + 1,
    });
  }
  render() {
    return (
      <div>
        <h2> Eventos en componentes de clase ES7</h2>
        <h3> {this.state.contador}</h3>
        <div>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </div>
      </div>
    );
  }
}

export class MasSobreEventos extends Component {
  handleClick = (e) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
  };
  render() {
    return (
      <div>
        <h2>Mas sobre eventos</h2>
        <button onClick={this.handleClick}> Saludar</button>
      </div>
    );
  }
}
