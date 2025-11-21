import React from 'react'
import './ChatDetail.css'
import MessagesList from '../MessagesList/MessagesList'
import CreateNewMessage from '../CreateNewMessage/CreateNewMessage'

 const ChatDetail = ({ chatDetail, createNewMessage, onBack }) => {
    if (!chatDetail) {
        return (
            <div>
                <h2>Cargando chat...</h2>
            </div>
        )
    }
    return (
        <div>
            <button className="back-button" onClick={onBack}>Contactos</button>
            <h2>{chatDetail?.name}</h2>

            <MessagesList messages={chatDetail.messages}/>
            <CreateNewMessage createNewMessage={createNewMessage}/>
           
        </div>
    )
}

export default ChatDetail