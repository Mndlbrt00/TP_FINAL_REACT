import React from 'react'
import ChatList from '../Components/ChatList/ChatList.jsx';
import { useEffect, useState } from 'react';
import { getContacts } from '../services/contactService.js';


const ChatScreen = () => {

  const [contacts, setContacts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function loadContacts() {
    setLoading(true); 
    setTimeout(
      () => {
    const contacts = getContacts();
    setContacts(contacts);
    setLoading(false);
      },
      500
    )
  }
  function AddNewContact(name) {
    const new_contact = {
      id: contacts.length + 1,
      user_id: contacts.length + 1, 
      name: name,
      profile_picture: 'https://hips.hearstapps.com/hmg-prod/images/iw356201-7-67b4783b4a57e.png?crop=1.00xw:1.00xh;0,0&resize=640:*',
      last_connection: 'Ahora mismo',
      is_connected: true,
      messages: []
      }
    setContacts(
      (prev_state) =>
        {
        return[...prev_state, new_contact]
        }
      )
    }

  useEffect(
    loadContacts,
    []
  )
  console.log( loading, contacts)
  return (
    
    <div>
      {/* panel izquierdo: lista de chats */}
      {
        loading 
        ? <span>Cargando...</span>
      : contacts && <ChatList contacts={contacts} addNewContact={AddNewContact}/>
      }
      {/* panel derecho: chat seleccionado */}

    </div>
    )
}




export default ChatScreen