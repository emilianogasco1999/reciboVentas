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
    titulo: 'Colegio',
    required: true,
    type: 'text',
    errorText: 'Escribe el nombre del colegio',
    placeholder: 'Nombre de colegio',
    name: 'colegio'
  },
  {
    titulo: 'DNI',
    required: true,
    type: 'number',
    errorText: 'introduce el dni',
    placeholder: 'Escribe el DNI',
    name: 'nDni'
  },
  {
    titulo: 'Nombre de Referente',
    required: true,
    type: 'text',
    errorText: 'introduce el nombre del referente',
    placeholder: 'Escribe el nombre del referente',
    name: 'referente'
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
  {
    titulo: 'Cobranza',
    required: false,
    type: 'text',
    errorText: 'introduce el cobrador',
    placeholder: 'Escribe el nombre del cobrador',
    name: 'cobrador'
  },
]


export const selectMetodoDePago = [
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
export const selectTipoDePago = [
  {
    titulo: 'Grupal',
    value: 1,
  },
  {
    titulo: 'Individual',
    value: 2,
  },
]

export const empresas = [
  {
    id: 1,
    titulo: 'WIIC EGRESADOS',
    name: 'Wiic',
    razonSocial: 'Jif Indumentaria Sas',
    CUIT: '30-71.825.031-1',
    IVA: 'Responsable Inscripto',
    InDeAct: '23/08/2023',
    sucursales: [
      {
        value: 1,
        titulo: 'Galeria San Martin 667 - Tucuman',
        direccion: 'Galeria San Martin 667, Sector Central - Oficina N°14',
        ciudad: 'San Miguel de Tucumán',
        provincia: 'Tucumán - 4000',
        telefono: '3813 50-6527 (Gerencia) / 3813 48-0927 (Administracion)',
        email: 'adminwiicegresados@gmail.com'
      },
      {
        value: 2,
        titulo: 'Zurita 351 - Catamarca',
        direccion: 'Zurita 351 - Oficina N°3',
        ciudad: 'San Fernando del Valle de Catamarca',
        provincia: 'Catamarca - 4700',
        telefono: '3813 50-6527 (Gerencia) / 3813 48-0927 (Administracion)',
        email: 'adminwiicegresados@gmail.com'
      },
    ]
  },
  {
    id: 2,
    titulo: 'CHRISDEI EGRESADOS',
    name: 'Chrisdei',
    razonSocial: 'Monotributo',
    CUIT: '27-26961676-3',
    // IVA:'Responsable Inscripto',
    // InDeAct:'23/08/2023',
    sucursales: [
      {
        value: 1,
        titulo: 'Calle salta 126, 12 B - Tucuman',
        direccion: 'Calle salta 126, 12 B',
        ciudad: 'San Miguel de Tucumán',
        provincia: 'Tucumán - 4000',
        telefono: '3812 06-1012 (Comercial) / 3812 21-3971 (Administracion)',
        email: 'chrisdeiegresados1977@gmail.com'
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

