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
  {
    titulo: 'Obserbacion',
    required: false,
    type: 'text',
    errorText: 'introduce alguna obsevación',
    placeholder: 'Escribe una obsevarción',
    name: 'observacion'
  },
  {
    titulo: 'Numero de Cuota',
    required: true,
    type: 'number',
    errorText: 'introduce la cuota',
    placeholder: 'Escribe la cuota',
    name: 'cuota'
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

export const empresas = [
  {
    id: 1,
    titulo: 'WIIC EGRESADOS',
    name: 'Wiic',
    sucursales: [
      {
        value: 1,
        titulo:'Galeria San Martin 667',
        direccion: 'Galeria San Martin 667, Sector Central - Oficina N°14',
        ciudad: 'San Miguel de Tucumán',
        provincia: 'Tucumán - 4000',
        cel: '+54 9 3813 50-6527',
        mail: 'adminwiicegresados@gmail.com'
      },
    ]
  },
]
export const selectEmpresa = [
  {
    titulo: 'WIIC EGRESADOS',
    value: 1,
    name: 'Wiic',
  }
]

