import logo from "./logo.svg";
import "./App.css";
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import { Eventos, EventosES7, MasSobreEventos } from "./components/Eventos";

let nombre = "Alexis";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" />
          <h1>{nombre} aprendiendo React</h1>
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un componente funcional desde una prop"></Componente>
          <hr />
          <Propiedades
            cadena="esto es una cadena"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: "Alexis",
              apellido: "Recalde",
            }}
          ></Propiedades>
          <hr />
          <Estado></Estado>
          <hr />
          <RenderizadoCondicional></RenderizadoCondicional>
          <hr />
          <RenderizadoElementos> </RenderizadoElementos>
          <hr />
          <Eventos />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
        </section>
      </header>
    </div>
  );
}

export default App;
