import React from 'react'
import './contactlist.css'
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, onDelete }) => {
    return (
        <section className="ListWrapper">
            <div className="contactList">
                <div className="listHeader">
                    <h2>Contacts</h2>
                    <Link to="/add">
                        <button>Add</button>
                    </Link>
                </div>
                {
                    contacts.map((contact) => {
                        return <Contact contact={contact} onDelete={onDelete} />
                    })
                }
            </div>
        </section>
    )
}

export default ContactList;
