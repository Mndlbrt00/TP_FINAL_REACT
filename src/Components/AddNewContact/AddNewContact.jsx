import React, { useContext } from 'react'
import './AddNewContact.css'
import { ContactContext } from '../../contexts/ContactContext.jsx'

const AddNewContact = () => {
  const { addNewContact } = useContext(ContactContext);

  const handleSubmitNewContact = (event) => {
    event.preventDefault();
    const formulario = event.target;
    const name_value = formulario.name.value;
    console.log('Nuevo contacto:', name_value);

    if (typeof addNewContact === 'function') {
      addNewContact(name_value);
    } else {
      console.warn('addNewContact no está disponible en el contexto');
    }
    formulario.reset();
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