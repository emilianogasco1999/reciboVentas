import React, { useEffect } from "react";
import Container from "./components/gen/container/Container"
import Footer from "./components/spec/footer/Footer"
import Input from "./components/gen/Input/Input";
import { fromReciboVentas } from './data/dataForm.js';


function App() {
  useEffect(() => {
    const forms = document.querySelectorAll('.needs-validation');

    const handleSubmit = (event) => {
      const form = event.target;
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    };

    forms.forEach(form => form.addEventListener('submit', handleSubmit));

    return () => {
      forms.forEach(form => form.removeEventListener('submit', handleSubmit));
    };
  }, []);

  console.log(fromReciboVentas)

  return (
    <Container className={'mt-3'} size={'fluid'}>

      <form class="row g-3 needs-validation" noValidate>
        {fromReciboVentas.map((input, index) => (
          <div class="col-6 col-md-4">
            <Input
              key={index} // Clave única por cada input
              titulo={input.titulo}
              type={input.type}
              placeholder={input.placeholder}
              required={input.required}
              errorText={input.errorText}
            />
          </div>
        ))}
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>

      <Footer />
    </Container>
  )
}

export default App
