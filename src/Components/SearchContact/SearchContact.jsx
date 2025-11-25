import React, { useContext } from 'react'
import { Link } from 'react-router'
import './SearchContact.css'
import { useState } from 'react'
import contacts from '../../data/contactData'
import { ContactContext } from '../../contexts/ContactContext'
const SearchContact = () => {
    const {search, setSearch} = useContext(ContactContext)


    return (
        <div className='chatlist-top'>
            <Link to={'/chat'} className='contact-link'>
                <h2>Contactos</h2>
            </Link>
            <div className='SearchForm'>
                <input
                    type="text"
                    placeholder="Buscar contactos..."
                    className='search-input'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
        </div>
    )
}

export default SearchContact
