
import './CreateNewMessage.css'

const CreateNewMessage = ({createNewMessage}) => {

    const handleSubmit = (event) => {

        event.preventDefault()
        const formulario = event.target
        const message_value = formulario.message.value
        console.log('Nuevo mensaje:', message_value)
        createNewMessage(message_value)
        formulario.reset()
    }

    return (
        <form className='form-group' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message">Nuevo Mensaje:</label>
                <textarea className='message-input' name="message" id="message" placeholder='Ingrese su mensaje'/>
            </div>
            <button className='submit-button' type='submit'>Enviar</button>
        </form>
    )
}

export default CreateNewMessage