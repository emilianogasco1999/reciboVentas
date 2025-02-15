export const fromReciboVentas = [
  {
    titulo: 'Numero de Pedido',
    required: true,
    type: 'number',
    errorText: 'Escribe un numero de pedido',
    placeholder: 'N° Pedido',
    name: 'nPedido'
  },
  {
    titulo: 'Numero de Ticket',
    required: true,
    type: 'number',
    errorText: 'Escribe un numero de ticket',
    placeholder: 'N° Ticket',
    name: 'nTicket'
  },
  {
    titulo: 'DNI',
    required: false,
    type: 'number',
    errorText: 'introduce el dni',
    placeholder: 'Escribe el DNI',
    name: 'nDni'
  },
  {
    titulo: 'Monto',
    required: true,
    type: 'number',
    errorText: 'introduce el monto',
    placeholder: 'Escribe el monto',
    name: 'monto'
  },
]


export const selectPagos = [
  {
    titulo: 'Efectivo',
    value: 1,
  },
  {
    titulo: 'Tranferencia',
    value: 2,
  },
  {
    titulo: 'Tarjeta',
    value: 3,
  },

]
export const selectEmpresa = [
  {
    titulo: 'WIIC EGRESADOS',
    value: 1,
    name: 'Wiic',
    img: '../../../assets/img/logos/wiic.svg'
  },
  {
    titulo: 'CHRISDEI EGRESADOS',
    value: 2,
    name: 'Chrisdei',
    img: '../../../assets/img/logos/chrisdei.png'
  },
]

