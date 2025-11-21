import React from 'react'
import './MessagesList.css'

const MessagesList = ({messages}) => {
    return (
        <div>
            {
            messages.length === 0 
            ? <span>No hay mensajes en este chat</span>
            : messages.map(
                (message) => {
                    return <div key={message.id} >
                            <div className='message-container' >
                                <h3>{message.author_name}</h3>
                                <p>{message.content}</p>
                                <span>{message.created_at}</span>
                                {/*  aca podemos agregar un icono de visto */}
                                <span>
                                    {
                                        message.status === 'VIEWED' ? '✓✓' 
                                        : message.status === 'SENT' ? '✓'
                                        : 'enviando...'
                                    }    
                                </span>
                            </div>
                        </div>
                }
            )
            } 
        </div>
  )
}

export default MessagesList