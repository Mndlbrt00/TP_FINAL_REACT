
import { Link } from "react-router-dom";
import './ChatList.css'
import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext.jsx";
import AddNewContact from "../AddNewContact/AddNewContact";
import SearchContact from "../SearchContact/SearchContact.jsx";
import AnimatedList from "../AnimatedList/AnimatedList.jsx";

const ChatList = () => {
  const { contacts, contactosFiltrados } = useContext(ContactContext);

  if (!contacts) return null;

  const listToRender = Array.isArray(contactosFiltrados) 
    ? contactosFiltrados
    : contacts;

  return (
    <div className="chat-list-full-side">
      <div className="chat-list-container">
        <SearchContact />
        {listToRender.length === 0 ? (
          <div className="no-results">No hay contactos con ese nombre</div>
        ) : (

          <AnimatedList
            items={listToRender.map(
            (contact) => (
              <Link to={'/chat/' + contact.id} key={contact.id} className="chat-link">
                <img className="profile-picture" src={contact.profile_picture} alt={'Foto de ' + contact.name} />
                <h2 className="profile-name">{contact.name}</h2>
                <span className="last-connection">{contact.last_connection}</span>
              </Link>
            )
          )}
            onItemSelect={(item, index) => console.log(item, index)}
            showGradients={false}
            enableArrowNavigation={true}
            displayScrollbar={false}
          />
         /*  listToRender.map(
            (contact) => (
              <Link to={'/chat/' + contact.id} key={contact.id} className="chat-link">
                <img className="profile-picture" src={contact.profile_picture} alt={'Foto de ' + contact.name} />
                <h2 className="profile-name">{contact.name}</h2>
                <span className="last-connection">{contact.last_connection}</span>
              </Link>
            )
          ) */
        )}
        {/* Add form inside the scroll container so it can stick to bottom when list grows */}
        <div className="add-new-wrapper">
          <AddNewContact />
        </div>
      </div>
      
    </div>
  );
};



export default ChatList