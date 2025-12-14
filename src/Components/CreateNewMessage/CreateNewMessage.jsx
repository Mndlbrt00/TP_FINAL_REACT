
import './CreateNewMessage.css'

const CreateNewMessage = ({createNewMessage}) => {

    const enviarMensaje = (formulario) => {
        const message_value = formulario.message.value
        console.log('Nuevo mensaje:', message_value)
        createNewMessage(message_value)
        formulario.reset()
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        enviarMensaje(event.target)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.ctrlKey) {
            event.preventDefault()
            const form = event.target.closest('form')
            enviarMensaje(form)
        }
    }

    return (
        <form className='form-group' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Nuevo Mensaje:</label>
                <textarea className='message-input' name="message" id="message" placeholder='Ingrese su mensaje' onKeyDown={handleKeyDown}/>
            </div>
            <button className='submit-button' type='submit'>Enviar</button>
        </form>
    )
}

export default CreateNewMessage