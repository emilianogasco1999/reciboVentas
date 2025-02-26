import Style from './Ticket.module.css'
import wiic from '../../../assets/img/logos/wiic.svg'
import chrisdei from '../../../assets/img/logos/chrisdei.png'
import { NumerosALetras } from 'numero-a-letras';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Ticket = ({ monto, dni, pedido, ticket, pago, fecha, sucursal, observacion, cuota, referente, colegio, tipoDePago, dataEmpresa, cobrador }) => {


  console.log(dataEmpresa)
  const { razonSocial, CUIT, IVA, InDeAct } = dataEmpresa
  const { ciudad, direccion, email, provincia, telefono } = dataEmpresa.sucursales[sucursal - 1]

  useEffect(() => {
    document.title = `RV-001-000000${ticket}`;
  }, []);

  const newMonto = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(monto)

  // const newDni = new Intl.NumberFormat('es-AR').format(dni)
  const newDni = dni.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
                dataEmpresa.id == 1 ? wiic : chrisdei

              } alt="" style={{ width: '130px' }} />
            </div>
            {/* <h1 className='text-center'>X</h1> */}

            <h6 className='text-center'>{dataEmpresa.titulo}</h6>

            <div className={`${Style.datosEmpresa} mb-3`}>
              {razonSocial ? <p> <span className='fw-bold'>Razon Social: </span>{razonSocial} </p> : ''}
              {CUIT ? <p> <span className='fw-bold'>C.U.I.T.: </span>{CUIT} </p> : ''}
              {IVA ? <p> <span className='fw-bold'>IVA {IVA}</span></p> : ''}
              {InDeAct ? <p> <span className='fw-bold'>Inici. de act. {InDeAct} </span></p> : ''}
            </div>

            <h6 className='text-center fw-bold'>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </h6>
            <div className={`${Style.datosEmpresa} mb-3`}>
              <h5 className='text-center'>RV-00{sucursal}-000000{ticket}</h5>
              <p> <span className='fw-bold'>Fecha: </span>{fecha}</p>
              <p> <span className='fw-bold'>Direccion: </span>{direccion} - {ciudad} - {provincia}</p>
              <p> <span className='fw-bold'>Cel: </span>{telefono}</p>
              <p> <span className='fw-bold'>Mail: </span>{email}</p>
              <br />
              <p> <span className='fw-bold'>Sucursal: </span>00{sucursal}</p>
              <p> <span className='fw-bold'>Cliente: </span>{pedido}</p>
              <p> <span className='fw-bold'>Colegio: </span>{colegio}</p>
              <p> <span className='fw-bold'>Referente: </span>{newDni} {referente} -
                {tipoDePago == 1 ?
                  ' Pago Grupal'
                  :
                  ' Pago Individual'
                }
              </p>


              <p><span className='fw-bold'>Condicion de IVA: </span>Consumidor Final</p>
              <p><span className='fw-bold'>Observacion: </span>{observacion}</p>
              <p><span className='fw-bold'>Detalle: </span> Cuota N° {cuota} de {NumerosALetras(monto, { plural: "pesos" }).replace(/ 00\/100 M\.N\.$/, "")}</p>
              <br />

              {cobrador ? <p><span className='fw-bold'>Cobrador: </span>{cobrador}</p> : ''}
              <p><span className='fw-bold'>Medio de Pago: </span>{pago}</p>
              <p> <span className='fw-bold'>TOTAL: </span>{newMonto}</p>

            </div>
            <h6 className='text-center fw-bold'>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </h6>

            <p className='text-center' style={{ fontSize: '8px' }}>
              DOCUMENTO NO VALIDO COMO FACTURA
            </p>

          </div>
          <div className="d-flex justify-content-between" >
            <Link to={'/home'} className={`btn btn-primary ${Style.noPrint}`} type="buton"><i className="bi bi-arrow-90deg-left"></i> ir al Home </Link>
            <button className={`btn btn-secondary ${Style.noPrint}`} type="buton" onClick={handlePrint} >Imprimir  <i className="bi bi-printer"></i> </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Ticket