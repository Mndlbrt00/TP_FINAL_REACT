import React, { useContext } from 'react'
import './AddNewContact.css'
import { ContactContext } from '../../contexts/ContactContext.jsx'

const AddNewContact = () => {
  const { addNewContact } = useContext(ContactContext);

  const enviarContacto = (formulario) => {
    const name_value = formulario.name.value;
   
    if (name_value !== '') {
      addNewContact(name_value);
       console.log('Nuevo contacto:', name_value);
    } else {
      alert('Ingrese un nombre válido para el nuevo contacto.');
    }
    formulario.reset();
  }

  const handleSubmitNewContact = (event) => {
    event.preventDefault();
    enviarContacto(event.target);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const form = event.target.closest('form');
      enviarContacto(form);
    }
  }

  return (
    <form className='form-group' onSubmit={handleSubmitNewContact}>
      <label htmlFor="name">Nuevo contacto:</label>
      <input className='contact-input' name='name' id='name' placeholder='Ingrese el nombre' onKeyDown={handleKeyDown} />
      <button className='submit-button' type='submit'>Agregar Contacto</button>
    </form>
  )
}

export default AddNewContact