import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Error404 from "./page/Error404";
import Printer from "./page/Printer";
import Contador from "./components/spec/contador/Contador";

function App() {
  const fecha = new Date('2025-02-20T00:00:00')
  // console.log(new Date('2025-02-20'))
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/homee" element={<Contador fecha={fecha} />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/printer" element={<Printer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </Router>
  )
}

export default App
