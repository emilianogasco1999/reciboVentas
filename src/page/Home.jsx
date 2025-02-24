import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { fromReciboVentas, selectMetodoDePago, empresas, selectTipoDePago } from '../data/dataForm.js';
import useBootstrapValidation from '../hooks/useBootstrapValidation.js'
import Footer from "../components/spec/footer/Footer"
import Container from "../components/gen/container/Container"
import Input from "../components/gen/input/Input.jsx";
import Select from "../components/gen/select/Select.jsx";

const Home = () => {
  const fecha = new Date('2025-03-31T00:00:00')

  const [darkMode, setDarkMode] = useState(() => {
    const savedPreference = localStorage.getItem("darkMode");
    return savedPreference ? JSON.parse(savedPreference) : false;
  });

  useEffect(() => {
    document.title = 'Wiic Recibos - Home';
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('bg-dark', 'text-white');
    } else {
      document.body.classList.remove('bg-dark', 'text-white');
    }
  }, [darkMode]);

  useBootstrapValidation();

  const { register, handleSubmit } = useForm()
  const navigate = useNavigate();

  const handlePrint = (data) => {
    const fecha = new Date().toLocaleDateString("es-ES");
    const updatedData = { ...data, fecha };
    document.body.classList.remove('bg-dark', 'text-white');
    navigate("/printer", { state: updatedData });
  };

  const onSubmit = (data) => handlePrint(data);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <Container className={`mt-3 ${darkMode ? 'bg-dark text-white' : ''}`} >
      <div className="d-flex justify-content-between mb-3">
        <span className="fw-bold">WIIC EGRESADOS</span>
        <button className="btn btn-secondary" onClick={toggleDarkMode}>
          {darkMode ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>}
        </button>
      </div>

      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="col-12">
          <Select
            titulo={'Sucursal'}
            errorText={'elige una sucursal'}
            required={true}
            options={empresas[0].sucursales}
            name={'sucursal'}
            register={register}
            darkMode={darkMode}
          />
        </div>
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
        <div className="col-6 col-md-4">
          <Select
            titulo={'Forma de Pago'}
            errorText={'Elige una forma de pago'}
            required={true}
            options={selectTipoDePago}
            register={register}
            name={'tipoDePago'}
            darkMode={darkMode}
          />
        </div>
        <div className="col-6 col-md-4">
          <Select
            titulo={'Metodo de pago'}
            errorText={'elige metodo'}
            required={true}
            options={selectMetodoDePago}
            register={register}
            name={'pago'}
            darkMode={darkMode}
          />
        </div>


        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-secondary" type="submit" >Comprobante  <i className="bi bi-ticket-perforated"></i> </button>
        </div>
      </form>

      <Footer
        fecha={fecha}
        darkMode={darkMode}
      />
    </Container>
  )
}

export default Home