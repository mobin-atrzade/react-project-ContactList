import React from 'react'
import { Link } from 'react-router-dom';

const Contact = ({ onDelete, contact }) => {
    const { id, name, email } = contact;
    return (
        <div key={id} className="item">
            <div className="item-left">
                <Link to={{ pathname: `user/${id}`, state: { contact: contact } }}>
                    <div className="user">
                        <p>name : {name}</p>
                        <p>email : {email}</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to={`/edit/${id}`}>
                    <button className="editBtn">
                        Edit
                    </button>
                </Link>
                <button onClick={() => onDelete(id)}>delete</button>
            </div>
        </div >
    )
}
export default Contact;