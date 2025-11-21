import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContacts } from '../services/contactService.js';


export const ContactContext = createContext();

function ContactContextProvider ({ children }) {

    const [contacts, setContacts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [chat_id, setChatId] = useState(null);
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
        )
        setTimeout(
        automaticReply,
        2000
        )
    }

    function automaticReply() {
        const new_message = {
            id: Date.now().toString() ,
            content: 'Recibido, gracias!',
            author_id: chatDetail.user_id,
            author_name: chatDetail.name,
            created_at: 'ahora mismo',
            status: 'VIEWED'
        }

        setContacts((prev) =>
            prev.map((chat) =>
            Number(chat.id) === Number(chat_id)
                ? { ...chat, messages: [...(chat.messages || []), new_message] }
                : chat
            )
        )
    }


    function loadChatDetail() {
        console.log( 'chat detail corriendo, loading: ' + loading, contacts)
        if (contacts && !loading && chat_id){
            const chat_selected = contacts.find(contact => Number(contact.id) === Number(chat_id) )
            setChatDetail(chat_selected);
        }
    }


    useEffect(
        loadContacts,
        []
    )

    useEffect(
        loadChatDetail,
        [chat_id, contacts, loading]
    )





    return (
        <ContactContext.Provider
            value={ 
                {
                contacts,
                loading,
                error,
                chatDetail,
                setChatId,
                AddNewContact,
                addNewContact: AddNewContact,
                createNewMessage
                } 
            }
                    
        > 
            {children}
        </ContactContext.Provider>
    )
}   

export default ContactContextProvider 

