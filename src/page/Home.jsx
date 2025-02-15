import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Footer from "../components/spec/footer/Footer"
import Container from "../components/gen/container/Container"
import Input from "../components/gen/input/Input.jsx";
import { fromReciboVentas, selectPagos, selectEmpresa } from '../data/dataForm.js';
import useBootstrapValidation from '../hooks/useBootstrapValidation.js'
import Select from "../components/gen/select/Select.jsx";

const Home = () => {
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
  return (
    <Container className={'mt-3'} >

      <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
        <Select
          titulo={'Empresa'}
          errorText={'elige una empresa'}
          required={true}
          options={selectEmpresa}
          name={'empresa'}
          register={register}
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
        />
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-secondary" type="submit" >Imprimir <i className="bi bi-printer"></i> </button>
        </div>
      </form>

      <Footer />
    </Container>
  )
}

export default Home