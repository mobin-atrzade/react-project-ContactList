import React, { useEffect, useState } from 'react'
import getOneContact from '../../services/getOneContact'
// import './addcontact.css'
const EditContact = ({ editContactHandler, history, match }) => {
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
        // addContactHandler(contact)
        editContactHandler(contact, match.params.id)
        setContact({ name: "", email: "" })
        history.push("/")
    }

    useEffect(() => {
        const localFetch = async () => {
            try {
                const { data } = await getOneContact(match.params.id)
                setContact({ name: data.name, email: data.email })
            } catch (error) {

            }
        }
        localFetch()
    }, [])

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
            <button>update Contact</button>
        </form>
    )
}
export default EditContact;