import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectMetodoDePago } from '../data/dataForm.js';
import Ticket from "../components/spec/ticket/Ticket.jsx";



const Printer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = location.state.updatedData;
  const dataEmpresa = location.state.dataEmpresa;

  useEffect(() => {
    if (!data) {
      navigate("/home");
    }
  }, [data, navigate]);

  if (!data) return null;
  const { monto, nDni, nPedido, nTicket, pago, fecha, sucursal, observacion, cuota, referente, colegio, tipoDePago, cobrador } = data;

  const metodoDePagoSeleccionado = selectMetodoDePago.find(pag => pag.value == pago)

  return (
    <Ticket
      monto={monto}
      dni={nDni}
      pedido={nPedido}
      ticket={nTicket}
      pago={metodoDePagoSeleccionado.titulo}
      fecha={fecha}
      observacion={observacion}
      sucursal={sucursal}
      cuota={cuota}
      referente={referente}
      colegio={colegio}
      tipoDePago={tipoDePago}
      dataEmpresa={dataEmpresa}
      cobrador={cobrador}
    />
  )
}

export default Printer