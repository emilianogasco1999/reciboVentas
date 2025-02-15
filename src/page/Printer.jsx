import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { selectEmpresa, selectPagos } from '../data/dataForm.js';
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
  const { empresa, monto, nDni, nPedido, nTicket, pago, fecha } = data;

  const empresaSeleccionada = selectEmpresa.find(emp => emp.value == empresa)
  const pagoSeleccionado = selectPagos.find(pag => pag.value == pago)
  return (
    <Ticket
      img={empresaSeleccionada.img}
      empresa={empresaSeleccionada.titulo}
      monto={monto}
      dni={nDni}
      pedido={nPedido}
      ticket={nTicket}
      pago={pagoSeleccionado.titulo}
      fecha={fecha}
    />
  )
}

export default Printer