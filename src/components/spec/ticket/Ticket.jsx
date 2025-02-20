import Style from './Ticket.module.css'
import wiic from '../../../assets/img/logos/wiic.svg'
import chrisdei from '../../../assets/img/logos/chrisdei.png'
import { NumerosALetras } from 'numero-a-letras';
import { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { empresas } from '../../../data/dataForm';
const Ticket = ({ monto, dni, pedido, ticket, pago, fecha, sucursal, observacion, cuota }) => {

  const { ciudad, direccion, email, provincia, telefono } = empresas[0].sucursales[sucursal - 1]


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
              <img src={wiic} alt="" style={{ width: '130px' }} />
            </div>


            <h1 className='text-center'>X</h1>
            <h6 className='text-center'>WIIC EGRESADOS</h6>

            <div className={`${Style.datosEmpresa} mb-3`}>
              <p> <span className='fw-bold'>Razon Social: </span>Jif Indumentaria Sas </p>
              <p> <span className='fw-bold'>C.U.I.T.: </span>30-71.825.031-1 </p>
              <p> <span className='fw-bold'>IVA Responsable Inscripto</span></p>
              <p> <span className='fw-bold'>Inici. de act. 23/08/2023 </span></p>

            </div>
            <h6 className='text-center fw-bold'>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </h6>
            <div className={`${Style.datosEmpresa} mb-3`}>
              <h5 className='text-center'>RV-001-000000{ticket}</h5>
              <p> <span className='fw-bold'>Fecha: </span>{fecha}</p>
              <p> <span className='fw-bold'>Direccion: </span>{direccion} - {ciudad} - {provincia}</p>
              <p> <span className='fw-bold'>Cel: </span>{telefono}</p>
              <p> <span className='fw-bold'>Mail: </span>{email}</p>
              <br />
              <p> <span className='fw-bold'>Sucursal: </span>00{sucursal}</p>

              <p> <span className='fw-bold'>Cliente: </span>{pedido}</p>
              {dni > 0 ?
                <p> <span className='fw-bold'>Documento: </span>{newDni} - Pago Individual </p>
                :
                <p> <span className='fw-bold'>Documento:</span> PAGO GRUPAL</p>
              }
              <p><span className='fw-bold'>Condicion de IVA: </span>Consumidor Final</p>
              <p><span className='fw-bold'>Observacion: </span>{observacion}</p>
              <p><span className='fw-bold'>Detalle: </span> Cuota {cuota} de {NumerosALetras(monto, { plural: "pesos" }).replace(/ 00\/100 M\.N\.$/, "")}</p>
              <br />

              <p><span className='fw-bold'>Medio de Pago: </span>{pago}</p>
              <p> <span className='fw-bold'>TOTAL: </span>{newMonto}</p>
            </div>
            <h6 className='text-center fw-bold'>* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * </h6>

            <p className='text-center'>
              <span className='fw-bold '>DOCUMENTO NO VALIDO COMO FACTURA</span>
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