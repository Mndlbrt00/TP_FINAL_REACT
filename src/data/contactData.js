/* cada contacto tieneuna mensajeria individual
    [
      {
      id
      user_id
      name
      profile_picture
      last_connection
      is_connected
      messages: 
        [
          {
            id
            content
            author_id
            created_at
            status: VIEWED | DELIVERED | SENT
          }
        ]
      }
    ]

*/

const contacts = [
  {
    id: 1,
    user_id: 11,
    name: "Juan Perez",
    profile_picture: 'https://www.f1lasvegasgp.com/app/uploads/2025/08/F_Colapinto_018_LRG-1.png',
    last_connection: 'hoy, 10:30 AM',
    is_connected: false,
    messages: [
      {
        id: 201,
        content: 'Hola, ¿cómo estás?',
        author_id: 11,
        author_name: 'Juan Perez',
        created_at: 'hoy, 09:50 AM',
        status: 'VIEWED'
      }
    ]
  },
  {
    id: 2,
    user_id: 12,
    name: "Hector Gomez",
    profile_picture: 'https://hips.hearstapps.com/hmg-prod/images/iw356201-7-67b4783b4a57e.png?crop=1.00xw:1.00xh;0,0&resize=640:*',
    last_connection: 'ayer, 11:04 PM',
    is_connected: false,
    messages: [
      {
        id: 202,
        content: 'Nos vemos esta noche.',
        author_id: 12,
        author_name: 'Hector Gomez',
        created_at: 'ayer, 09:45 PM',
        status: 'VIEWED'
      }
    ]
  },
  {
    id: 3,
    user_id: 13,
    name: "Esteban Lopez",
    profile_picture: 'https://www.directvsports.com/__export/1751930777366/sites/dsports/img/2025/07/07/03a6ad6acde57c0b2d66dd68438b49.jpg_960464964.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
    last_connection: 'ayer, 10:52 PM',
    is_connected: false,
    messages: [
      {
        id: 203,
        content: 'Perfecto, hablamos mañana.',
        author_id: 13,
        author_name: 'Esteban Lopez',
        created_at: 'ayer, 08:20 PM',
        status: 'VIEWED'
      }
    ]
  },
  {
    id: 4,
    user_id: 14,
    name: "Carlos Ruiz",
    profile_picture: 'https://randomuser.me/api/portraits/men/45.jpg',
    last_connection: 'hace 2 días, 03:15 PM',
    is_connected: false,
    messages: [
      {
        id: 204,
        content: 'Envíame los detalles cuando puedas.',
        author_id: 14,
        author_name: 'Carlos Ruiz',
        created_at: 'hace 2 días, 02:50 PM',
        status: 'DELIVERED'
      }
    ]
  },
  {
    id: 5,
    user_id: 15,
    name: "Mateo Fernández",
    profile_picture: 'https://randomuser.me/api/portraits/men/46.jpg',
    last_connection: 'hace 3 días, 08:20 PM',
    is_connected: false,
    messages: [
      {
        id: 205,
        content: 'Gracias por la info.',
        author_id: 15,
        author_name: 'Mateo Fernández',
        created_at: 'hace 3 días, 07:00 PM',
        status: 'VIEWED'
      }
    ]
  },
  {
    id: 6,
    user_id: 16,
    name: "Diego Morales",
    profile_picture: 'https://randomuser.me/api/portraits/men/47.jpg',
    last_connection: 'hace 2 horas, 01:10 PM',
    is_connected: true,
    messages: [
      {
        id: 206,
        content: '¿Estás disponible ahora?',
        author_id: 16,
        author_name: 'Diego Morales',
        created_at: 'hoy, 11:30 AM',
        status: 'SENT'
      }
    ]
  }
]

export default contacts;