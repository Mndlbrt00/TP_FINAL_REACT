import React, { use, useContext, useEffect } from 'react'
import { getContacts } from '../services/contactService.js';
import { useParams } from 'react-router';
import ChatList from '../Components/ChatList/ChatList.jsx';
import ChatDetail from '../Components/ChatDetail/ChatDetail.jsx';
import './ChatScreen.css'
import  { ContactContext } from '../contexts/ContactContext.jsx';

const ChatScreen = () => {
  
 //aca estaban todos los useState y useEffect relacionados a contacts
 //ahora van al ContactContext
  const {chat_id} = useParams()
  const {loading, contacts, chatDetail, setChatId, createNewMessage, AddNewContact} = useContext(ContactContext);
  
  useEffect(
    () => {
      setChatId(chat_id)
    },
    [chat_id]
  )
  
  
  return (
    <div className='chat-screen'>
      <div className='contact-list'>
        {/* panel izquierdo: lista de chats */}
        {
          loading 
          ? <span>Cargando...</span>
          : contacts && <ChatList/>
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