import { createContext, useEffect, useState } from 'react';

const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
    return <ContactContext.Provider
    value={
        {
            contacts: [],
            setContacts: () => {},
            loading: false,
            setLoading: () => {}
            
        }}>
        {children}
    </ContactContext.Provider>
}   

export default ContactContextProvider 

