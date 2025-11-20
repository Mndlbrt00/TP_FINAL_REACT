import React, { use } from 'react'
import { useEffect, useState } from 'react';
import { getContacts } from '../services/contactService.js';
import { useParams } from 'react-router-dom';
import ChatList from '../Components/ChatList/ChatList.jsx';
import ChatDetail from '../Components/ChatDetail/ChatDetail.jsx';
import './ChatScreen.css'

const ChatScreen = () => {
  
  const [contacts, setContacts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {chat_id} = useParams();
  const [chatDetail, setChatDetail] = useState(null);

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

  function createNewMessage(messageText) {
  const new_message = {
    id: Date.now().toString(),
    content: messageText,
    author_id: 0,
    author_name: 'Tu',
    created_at: 'ahora mismo',
    status: 'SENT'
  };

  setContacts((prev) =>
    prev.map((chat) =>
      Number(chat.id) === Number(chat_id)
        ? { ...chat, messages: [...(chat.messages || []), new_message] }
        : chat
    )
  );
}
  
  function loadChatDetail() {
    console.log( loading, contacts)
    if (contacts && !loading && chat_id){
      const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id) )
      setChatDetail(chat_selected);
    }
  }


  useEffect(
    loadContacts,
    []
  )

  useEffect(() => {
    if (contacts && !loading && chat_id) {
      loadChatDetail();
    } 
    else {
      setChatDetail(null);
    }
  }, [chat_id, contacts, loading]);


  
  console.log('chatDetail:', chatDetail)
  return (
    
    <div className='chat-screen'>
      <div className='contact-list'>
        {/* panel izquierdo: lista de chats */}
        {
          loading 
          ? <span>Cargando...</span>
          : contacts && <ChatList contacts={contacts} addNewContact={AddNewContact}/>
        }
      </div>

      {/* panel derecho: chat seleccionado */}
      <div className='chat-detail'>
        {
          !loading && (
            !chat_id
            ? <h2>Seleccione un chat</h2>
            : ( 
              chatDetail
              ? <ChatDetail chatDetail={chatDetail} createNewMessage={createNewMessage}/>
              : <h2>Chat no encontrado</h2>
            )
          )
        }
      </div>
    
    </div>
    )
}




export default ChatScreen