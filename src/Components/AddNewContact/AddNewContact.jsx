import React, { useContext } from 'react'
import './AddNewContact.css'
import { ContactContext } from '../../contexts/ContactContext.jsx'

const AddNewContact = () => {
  const { addNewContact } = useContext(ContactContext);

  const handleSubmitNewContact = (event) => {
    event.preventDefault();
    
    const formulario = event.target;

    const name_value = formulario.name.value;
   

    if (name_value !== '') {
      addNewContact(name_value);
       console.log('Nuevo contacto:', name_value);
    } else {
      alert('Ingrese un nombre válido para el nuevo contacto.');
    }
    formulario.reset();
  }

  return (
    <form onSubmit={handleSubmitNewContact}>
      <div className='form-group'>
        <label htmlFor="name">Nuevo contacto:</label>
        <input name='name' id='name' placeholder='Ingrese el nombre' />
      </div>
      <button className='submit-button' type='submit'>Agregar Contacto</button>
    </form>
  )
}

export default AddNewContact