import React from 'react'
import './AddNewContact.css'

const AddNewContact = ({addNewContact}) => {
    const handleSubmitNewContact = (event) => {
        event.preventDefault();
        const formulario = event.target;
        const name_value = formulario.name.value;
        console.log('Nuevo contacto:', name_value);

        addNewContact(name_value);
    }
  return (
    <form onSubmit={handleSubmitNewContact}>
        <div className='form-group'>
            <label htmlFor="name">Nombre:</label>
            <input name='name' id='name' placeholder='Ingrese el nombre de su nuevo contacto' />
        </div>
        <button className='submit-button' type='submit'>Agregar Contacto</button>
    </form>
  )
}

export default AddNewContact