import React, { useState } from 'react'

const AddContact = ({ addContactHandler }) => {
    const [contact, setContact] = useState({
        name: "",
        email: ""
    })

    const changeHandler = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        if (!contact.name || !contact.email) {
            alert("all fildes are mandatory !")
        }
        e.preventDefault()
        addContactHandler(contact)
        setContact({ name: "", email: "" })
    }

    return (
        <form onSubmit={submitForm}>
            <div className="formControl">
                <label>name</label>
                <input
                    type="text"
                    name="name"
                    value={contact.name}
                    onChange={changeHandler}
                />
            </div>
            <div className="formControl">
                <label>email</label>
                <input
                    type="text"
                    name="email"
                    value={contact.email}
                    onChange={changeHandler}
                />
            </div>
            <button>Add Contact</button>
        </form>
    )
}

export default AddContact;