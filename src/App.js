import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { Switch, Route } from 'react-router-dom'

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
  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) setContacts(savedContacts);
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])


  return (
    <main className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route
          path="/add"
          component={(props) => <AddContact addContactHandler={addContactHandler} {...props} />}
        />
        <Route
          path="/"
          exact
          component={() =>
            <ContactList
              contacts={contacts}
              onDelete={deleteContactHandler} />}
        />
      </Switch>
      {/* <AddContact
        addContactHandler={addContactHandler}
      /> */}
      {/* <ContactList
        contacts={contacts}
        onDelete={deleteContactHandler}
      /> */}
    </main>
  );
}

export default App;