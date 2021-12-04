import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import { Switch, Route } from 'react-router-dom'
import ContactDetail from './components/ContactDetail/ContactDetail';
import getContacts from './services/getContactsService';
import deleteContact from './services/deleteContactService';
import addOneContact from './services/addContactService';
import EditContact from './components/EditContact/EditContact';
import updateContact from './services/updateContact';


function App() {
  const [contacts, setContacts] = useState([])

  const addContactHandler = async (contact) => {
    // console.log(contact);
    try {
      const { data } = await addOneContact(contact);
      setContacts([...contacts, data])
      // console.log(data);

    } catch (error) {

    }
  }
  const editContactHandler = async (contact, id) => {
    await updateContact(id, contact)
    const { data } = await getContacts()
    setContacts(data);
    // console.log(data);
  }
  const deleteContactHandler = async (id) => {
    // console.log("clicked", id);
    try {
      await deleteContact(id)
      const filteredContacts = contacts.filter((c) => c.id !== id)
      setContacts(filteredContacts)
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(() => {
    // const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    // if (savedContacts) setContacts(savedContacts);
    const fetchContacts = async () => {
      const { data } = await getContacts()
      setContacts(data);
    }
    try {
      fetchContacts()
    } catch (error) {

    }
  }, [])

  return (
    <main className="App">
      <h1>Contact App</h1>
      <Switch>
        <Route
          path="/edit/:id"
          render={(props) => <EditContact editContactHandler={editContactHandler} {...props} />}
        />
        <Route
          path="/user/:id"
          component={ContactDetail}
        />
        <Route
          path="/add"
          render={(props) => <AddContact addContactHandler={addContactHandler} {...props} />}
        />
        <Route
          path="/"
          exact={true}
          render={(props) =>
            <ContactList
              contacts={contacts}
              onDelete={deleteContactHandler}
              {...props}
            />}
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