import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";

//componentes
import NuevoServicio from "./components/NuevoServicio";
import Servicios from "./pages/Servicios";
import Transacciones from "./pages/Transacciones";
import Overview from "./pages/Overview";
import Salidas from "./pages/Salidas";
import Home from "./pages/Home";
import HistorialVentas from "./pages/HistorialVentas";
function App() {
  //State de la aplicacion
  const [service, setService] = useState([]);
  const [consulta, setConsulta] = useState(true);
  const [idServicio, setIdServicio] = useState();

  useEffect(() => {
    if (consulta) {
      const consultarAPI = async () => {
        const { data } = await axios.get(
          "https://ajbarbershop.herokuapp.com/api"
        );
        setService(data);
        setConsulta(false);
      };

      consultarAPI();
    }
  }, [consulta]);

  return (
    <Router>
      <Switch>
       {/*  <Route exact path="/">
          <Redirect to="/barberadmin" />
        </Route>/*/}
        <Route exact path="/" component={Home} />
        <Route exact path="/overview" component={Overview} />
        <Route
          exact
          path="/servicios"
          component={() => (
            <Servicios service={service} setIdServicio={setIdServicio} />
          )}
        />
        <Route
          exact
          path="/nuevoservicio"
          component={() => <NuevoServicio setConsulta={setConsulta} />}
        />
        <Route
          path="/transacciones/:id"
          component={() => <Transacciones idServicio={idServicio} />}
        />
        <Route
          exact
          path="/salidas"
          component={() => <Salidas />}
        />
        <Route
          exact
          path="/historialventas"
          component={HistorialVentas}
        />
      </Switch>
    </Router>
  );
}

export default App;
