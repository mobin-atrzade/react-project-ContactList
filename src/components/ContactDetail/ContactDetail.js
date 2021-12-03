import React from 'react'
import { Link } from 'react-router-dom';

const ContactDetail = ({ location }) => {
    const { contact } = location.state;
    // console.log(contact);
    return (
        <div>
            <p>user name is : {contact.name}</p>
            <p>user email is : {contact.email}</p>
            <Link to="/">
                go to contact List
            </Link>
        </div>
    )
}

export default ContactDetail;