import React, {useState} from 'react';
import Header from './Header'
import AddContact from './addContact';
import ContactList from './contactList';
import './App.css'
const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: '1',
      name:'nikhik',
      phone:786378
    }
  ]);

    return (
      <div className='App'>
        <h1 align='center'> Contact Manager </h1>
        <Header />
        <AddContact setContacts={setContacts}/>
        <ContactList contacts={contacts} />
      </div>
    )
}

export default App;
