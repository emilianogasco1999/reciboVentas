import Style from './Ticket.module.css'
import wiic from '../../../assets/img/logos/wiic.svg'
import chrisdei from '../../../assets/img/logos/chrisdei.png'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Ticket = ({ img, empresa, monto, dni, pedido, ticket, pago, fecha }) => {

  useEffect(() => {
    document.title = `RV-001-000000${ticket}`;
  }, []);

  const newMonto = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(monto)

  const newDni = new Intl.NumberFormat('es-AR').format(dni)

  const handlePrint = () => {
    window.print();
  };


  return (

    <>
      <div className={Style.container}>
        <div className={Style.recibo}>
          <div className="row p-0 ">

            <div className="col-12 p-0 d-flex justify-content-center mb-2">
              <img src={
                img == 1 ? wiic : chrisdei

              } alt="" style={{ width: '150px' }} />
            </div>

            <h1 className='text-center'>X</h1>

            <div className="row p-0">
              <div className="col p-0"> <h6 className='text-center'>{empresa}</h6></div>
              <div className="col p-0"> <h6 className='text-center'>{fecha}</h6></div>
            </div>

            <h6 className='text-center'>RV-001-000000{ticket}</h6>

            <h6 className='text-center fw-bold'>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </h6>

            <p> <span className='fw-bold'>N° Pedido: </span>{pedido}</p>
            {dni > 0 ?
              <p> <span className='fw-bold'>N° DNI: </span>{newDni} - Pago Individual </p>
              :
              <p> <span className='fw-bold'>PAGO GRUPAL</span></p>
            }
            <p>
              <span className='fw-bold'>Tipo de Pago: </span>{pago}
            </p>

            <div className="d-flex justify-content-end">
              <p> <span className='fw-bold'>TOTAL: </span>{newMonto}</p>
            </div>

            <h6 className='text-center fw-bold'>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </h6>

          </div>
          <div className="col-12 d-flex  justify-content-between" >
            <Link to={'/home'} className={`btn btn-primary ${Style.noPrint}`} type="buton"><i className="bi bi-arrow-90deg-left"></i> ir al Home </Link>
            <button className={`btn btn-secondary ${Style.noPrint}`} type="buton" onClick={handlePrint} >Imprimir  <i className="bi bi-printer"></i> </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Ticket