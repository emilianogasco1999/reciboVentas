import React, { useEffect } from "react";
import { useForm } from "react-hook-form"
import Container from "../components/gen/container/Container"
import Input from "../components/gen/input/Input.jsx";
import { fromReciboVentas, selectPagos, selectEmpresa } from '../data/dataForm.js';
import useBootstrapValidation from '../hooks/useBootstrapValidation.js'
import Select from "../components/gen/select/Select.jsx";

const Home = () => {
  const { register, handleSubmit } = useForm()
  useBootstrapValidation();
  const onSubmit = (data) => console.log(data)
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
          titulo={'Metodo de pago '}
          errorText={'elige metodo'}
          required={true}
          options={selectPagos}
           register={register}
          name={'pago'}
        />
        <div className="col-12 d-flex justify-content-end">
          <button className="btn btn-secondary" type="submit">Imprimir <i className="bi bi-printer"></i> </button>
        </div>
      </form>

 
    </Container>
  )
}

export default Home