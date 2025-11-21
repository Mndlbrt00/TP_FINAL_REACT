import React, { useEffect } from "react";
import { getContacts } from "../../services/contactService";
import { useState } from "react";
import { Link } from "react-router-dom";
import './ChatList.css'
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import AddNewContact from "../AddNewContact/AddNewContact";
const ChatList = () => {
  const { contacts,  } = useContext(ContactContext);
  return (
    <div className="chat-list-container">
      <Link to="/chat" className="chat-link">
        <h2 className="all-chats-link">INICIO</h2>
      </Link>
      {contacts.map(
        (contact) => {
          return (
            <Link to={'/chat/' + contact.id} key={contact.id} className="chat-link">
              <img className="profile-picture" src={contact.profile_picture} alt={'Foto de ' + contact.name}/>
              <h2 className="profile-name">{contact.name}</h2>
              <span className="last-connection">{contact.last_connection}</span>
            </Link>
            )
          }
        )
      }
    <AddNewContact />
    </div>  
  )
}



export default ChatList