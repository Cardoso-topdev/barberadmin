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
        <Route exact path="/">
          <Redirect to="/barberadmin" />
        </Route>
        <Route exact path="/barberadmin" component={Home} />
        <Route exact path="/barberadmin/overview" component={Overview} />
        <Route
          exact
          path="/barberadmin/servicios"
          component={() => (
            <Servicios service={service} setIdServicio={setIdServicio} />
          )}
        />
        <Route
          exact
          path="/barberadmin/nuevoservicio"
          component={() => <NuevoServicio setConsulta={setConsulta} />}
        />
        <Route
          path="/barberadmin/transacciones/:id"
          component={() => <Transacciones idServicio={idServicio} />}
        />
        <Route
          exact
          path="/barberadmin/salidas"
          component={() => <Salidas />}
        />
        <Route
          exact
          path="/barberadmin/historialventas"
          component={HistorialVentas}
        />
      </Switch>
    </Router>
  );
}

export default App;
