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
      2000
    )
  }
  
  useEffect(
    loadContacts,
    []
  )
 console.log( loading, contacts)
  return (
    <div>{ loading ?
      <span>Cargando...</span>
      : contacts &&
        <ChatList contacts={contacts}/>
      }
    </div>
    )
}




export default ChatScreen