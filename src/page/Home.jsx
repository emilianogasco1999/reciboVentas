import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Footer from "../components/spec/footer/Footer"
import Container from "../components/gen/container/Container"
import Input from "../components/gen/input/Input.jsx";
import { fromReciboVentas, selectPagos, selectEmpresa } from '../data/dataForm.js';
import useBootstrapValidation from '../hooks/useBootstrapValidation.js'
import Select from "../components/gen/select/Select.jsx";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificar si hay una preferencia guardada en el localStorage
    const savedPreference = localStorage.getItem("darkMode");
    if (savedPreference !== null) {
      return JSON.parse(savedPreference);
    }
    // Si no hay preferencia guardada, detectar el tema del sistema
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.title = 'Home';
    // Guardar la preferencia en el localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    // Aplicar el tema al body
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-white');
    } else {
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [darkMode]);

  useEffect(() => {
    document.title = 'Home';
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-white');
    } else {
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [darkMode]);
  useEffect(() => {
    document.title = 'Home';
  }, []);
  useBootstrapValidation();
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();

  const handlePrint = (data) => {
    const fecha = new Date().toLocaleString("es-ES");
    const updatedData = { ...data, fecha };
    navigate("/printer", { state: updatedData });
  };

  const onSubmit = (data) => handlePrint(data);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Container className={`mt-3 ${darkMode ? 'bg-dark text-white' : ''}`} >
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-secondary" onClick={toggleDarkMode}>
          {darkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
        </button>
      </div>

      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Select
          titulo={'Empresa'}
          errorText={'elige una empresa'}
          required={true}
          options={selectEmpresa}
          name={'empresa'}
          register={register}
          darkMode={darkMode}
        />
        {fromReciboVentas.map((input, index) => (
          <div
            key={index}
            className="col-6 col-md-4" >
            <Input
              name={input.name}
              register={register}
              titulo={input.titulo}
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              errorText={input.errorText}
              darkMode={darkMode}
            />
          </div>
        ))}

        <Select
          titulo={'Metodo de pago'}
          errorText={'elige metodo'}
          required={true}
          options={selectPagos}
          register={register}
          name={'pago'}
          darkMode={darkMode}
        />
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-secondary" type="submit" >Comprobante  <i className="bi bi-ticket-perforated"></i> </button>
        </div>
      </form>

      <Footer />
    </Container>
  )
}

export default Home