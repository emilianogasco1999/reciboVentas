import { Link } from "react-router-dom"



const Error404 = () => {
  return (
    <section class="py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <h2 class="d-flex justify-content-center align-items-center gap-2 mb-4">
                <span class="display-1 fw-bold">4</span>
                <i class="bi bi-exclamation-circle-fill text-danger display-4"></i>
                <span class="display-1 fw-bold bsb-flip-h">4</span>
              </h2>
              <h3 class="h2 mb-2">¡Ups! Estás perdido.</h3>
              <p class="mb-5">La página que buscas no fue encontrada.</p>
              <Link class="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0" to='/home' role="button">Volver a Inicio</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Error404