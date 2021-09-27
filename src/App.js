import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contenedor from './Contenedor';
import Contacto from './Contacto';
import Header from './Header';
import personajeDetalle from './personajeDetalle';
import MainMenu from './MainMenu';
import DatosApi from './DatosApi';

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={ Header } />
      <Route path="/personajes" exact component={ Contenedor } />
      <Route path="/personajes/:id" exact component={ personajeDetalle } />
      <Route path="/contacto" exact  component={ Contacto } />
      <Route path="/datos_api" exact  component={ DatosApi } />
      <Route component={() => (
        <h1>Pagina no encontrada</h1>
      )} />
    </Switch>
  </Router>
)

export default App;