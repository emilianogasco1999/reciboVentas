import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Error404 from "./page/Error404";
import Printer from "./page/Printer";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/printer" element={<Printer/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
     
    </Router>
  )
}

export default App
