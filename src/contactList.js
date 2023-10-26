import React from 'react';
import ContactCard from './contactCard';

const ContactList  = (props) => {
  console.log(props)
  const renderAllContacts = props.contacts?.map((contact) => {
    return  <ContactCard key={contact.id} contact={contact} />
  })
    return (
      <div className='ui contactList'>
         {props.contacts?.length > 1 && renderAllContacts}
        </div>
    )
}
export default ContactList;