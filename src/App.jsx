import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import wiic from "./assets/img/logos/wiic.svg";
import chrisdei from "./assets/img/logos/chrisdei.png";
import Home from "./page/Home";
import Error404 from "./page/Error404";
import Printer from "./page/Printer";
import FinishSystem from "./page/FinishSystem";
import cambiarImageTitle from "./hooks/imageTitle";

function App() {
  const empresaId = Number(import.meta.env.VITE_EMPRESA_NUMBER);
  const active = import.meta.env.VITE_ACTIVE === "true";
  console.log(active);
  // console.log(Boolean(active))
  // active ? console.log('esto es esta activo') : console.log('esto no esta activo')

  // const fecha = new Date('2025-02-01T00:00:00')

  if (empresaId == 1) {
    cambiarImageTitle(wiic);
  } else {
    cambiarImageTitle(chrisdei);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            active ? (
              <Home
                empresaId={empresaId}
                // fecha={fecha}
              />
            ) : (
              <FinishSystem />
            )
          }
        />
        <Route path="/finishsystem" element={<FinishSystem />} />
        <Route
          path="/home"
          element={
            active ? (
              <Home
                empresaId={empresaId}
                // fecha={fecha}
              />
            ) : (
              <FinishSystem />
            )
          }
        />
        <Route path="/printer" element={<Printer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
