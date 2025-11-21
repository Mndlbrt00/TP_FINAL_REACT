import React from 'react'
import './ChatDetail.css'
import MessagesList from '../MessagesList/MessagesList'
import CreateNewMessage from '../CreateNewMessage/CreateNewMessage'

const ChatDetail = ({ chatDetail, createNewMessage }) => {
    if (!chatDetail) {
        return (
            <div>
                <h2>Cargando chat...</h2>
            </div>
        )
    }

/* messages: 
        [
          {
            id
            content
            author_id
            created_at
            status: VIEWED | DELIVERED | SENT
          }
        ]
 */
    return (
        <div>
            <h2>{chatDetail?.name}</h2>

            <MessagesList messages={chatDetail.messages}/>
            <CreateNewMessage createNewMessage={createNewMessage}/>
           {/*  <div className='chat-messages-container'>
                {chatDetail?.messages?.length ? (
                    chatDetail.messages.map((message) => (
                        <div
                            key={message.id}
                            className={'chat-message ' + (message.from_me ? 'from-me' : 'from-contact')}
                        >
                            <span className='message-text'>{message.content}</span>
                            <br />
                            <span className='message-timestamp'>{message.created_at}</span>
                        </div>
                    ))
                ) : (
                    <div>No hay mensajes</div>
                )}
            </div> */}
        </div>
    )
}

export default ChatDetail