import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectPagos } from '../data/dataForm.js';
import Ticket from "../components/spec/ticket/Ticket.jsx";



const Printer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  useEffect(() => {
    if (!data) {
      navigate("/home");
    }
  }, [data, navigate]);

  if (!data) return null;
  const { monto, nDni, nPedido, nTicket, pago, fecha, sucursal, observacion, cuota, referente, colegio } = data;

  const pagoSeleccionado = selectPagos.find(pag => pag.value == pago)

  return (
    <Ticket
      monto={monto}
      dni={nDni}
      pedido={nPedido}
      ticket={nTicket}
      pago={pagoSeleccionado.titulo}
      fecha={fecha}
      observacion={observacion}
      sucursal={sucursal}
      cuota={cuota}
      referente={referente}
      colegio={colegio}
    />
  )
}

export default Printer