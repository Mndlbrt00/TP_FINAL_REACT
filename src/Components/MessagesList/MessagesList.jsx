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
                    const roleClass = message.author_id === 0 ? 'own-message' : 'contact-message';
                    return (
                        <div key={message.id} className={`message-container ${roleClass}`}>
                            <h3>{message.author_name}</h3>
                            <p>{message.content}</p>
                            <div className="message-meta">
                                <span className="message-time">{message.created_at}</span>
                                <span className="message-status">
                                    {
                                        message.status === 'VIEWED' ? '✓✓' 
                                        : message.status === 'SENT' ? '✓'
                                        : 'enviando...'
                                    }
                                </span>
                            </div>
                        </div>
                    )
                }
            )
            } 
        </div>
  )
}

export default MessagesList