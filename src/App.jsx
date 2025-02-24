import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import wiic from './assets/img/logos/wiic.svg'
import chrisdei from './assets/img/logos/chrisdei.png'
import Home from "./page/Home";
import Error404 from "./page/Error404";
import Printer from "./page/Printer";
import FinishSystem from "./page/FinishSystem";
import cambiarImageTitle from "./hooks/imageTitle";

function App() {
  const empresaId = Number(import.meta.env.VITE_EMPRESA_NUMBER)
  
  if (empresaId == 1) {
    cambiarImageTitle(wiic)
  } else {
    cambiarImageTitle(chrisdei)
  }

  return (
    <Router>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              empresaId={empresaId}
            />
          }
        />
        <Route path="/finishsystem" element={<FinishSystem />} />
        <Route
          path="/home"
          element={
            <Home
              empresaId={empresaId}
            />}
        />
        <Route path="/printer" element={<Printer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </Router>
  )
}

export default App
