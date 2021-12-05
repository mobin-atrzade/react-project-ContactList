import React, { useEffect, useState } from 'react'
import './contactlist.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import getContacts from './../../services/getContactsService';
import deleteContact from '../../services/deleteContactService';

const ContactList = () => {
    const [contacts, setContacts] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [allContacts, setAllContacts] = useState(null)

    useEffect(() => {
        const fetchContacts = async () => {
            const { data } = await getContacts();
            setContacts(data)
            setAllContacts(data)
        }
        try {
            fetchContacts()
        } catch (error) {

        }
    }, [])

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
    const searchHandler = (e) => {
        setSearchTerm(e.target.value)
        const search = e.target.value
        //filter contacts
        if (search !== "") {
            const filteredContacts = allContacts.filter((c) => {
                // console.log(Object.values(c).join(" "));
                return Object.values(c).join(" ").toLowerCase().includes(search.toLowerCase())
            });
            setContacts(filteredContacts)
        }
        else {
            setContacts(allContacts)
        }
    }

    return (
        <section className="ListWrapper">
            <div className="contactList">
                <div className="listHeader">
                    <h2>Contacts</h2>
                    <Link to="/add">
                        <button>Add</button>
                    </Link>
                </div>
                <div className="search-Bar">
                    <input type="text" placeholder="search" value={searchTerm} onChange={searchHandler} />
                </div>
                {
                    contacts ? (
                        contacts.map((contact, index) => {
                            return <Contact key={index} contact={contact} onDelete={deleteContactHandler} />
                        })
                    ) : (
                        <p>Loading ...</p>
                    )
                }
            </div>
        </section>
    )
}

export default ContactList;