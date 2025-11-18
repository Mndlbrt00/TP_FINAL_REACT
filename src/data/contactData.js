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
      user_id: 1,
      name: "Juan Perez",
      profile_picture: 'https://www.f1lasvegasgp.com/app/uploads/2025/08/F_Colapinto_018_LRG-1.png',
      last_connection: 'hoy, 10:30 AM',
      is_connected: false,
      messages: [
        {
          id: 1,
          content: 'Hola, ¿cómo estás?',
          author_id: 1,
          created_at: 'hoy, 10:30 AM',
          status: 'VIEWED'
        }
      ]
        
    },
    {
      id: 2,
      user_id: 2,
      name: "Hector Gomez",
      profile_picture: 'https://hips.hearstapps.com/hmg-prod/images/iw356201-7-67b4783b4a57e.png?crop=1.00xw:1.00xh;0,0&resize=640:*',
      last_connection: 'ayer, 11:04 PM',
      is_connected: false,
      messages: [
        {
          id: 2,
          content: 'nos vemos!',
          author_id: 2,
          created_at: 'ayer, 06:15 PM',
          status: 'VIEWED'
        }
      ]
        
    }
]

export default contacts;