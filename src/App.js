import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';

function App() {
  const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    // console.log(contact);
    setContacts([...contacts, { id: Math.random() * 100, ...contact }])
  }
  const deleteContactHandler = (id) => {
    // console.log("clicked", id);
    const filteredContacts = contacts.filter((c) => c.id !== id)
    setContacts(filteredContacts)
  }
  return (
    <main className="App">
      <h1>Contact App</h1>
      <AddContact
        addContactHandler={addContactHandler}
      />
      <ContactList
        contacts={contacts}
        onDelete={deleteContactHandler}
      />
    </main>
  );
}

export default App;