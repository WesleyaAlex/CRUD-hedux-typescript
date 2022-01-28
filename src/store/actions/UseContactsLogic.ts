import { useState } from "react";
import { Contact } from "../interfaces/Contact";
import { v4 as uuid } from 'uuid'

const newContact: Contact = {
    name: '', age: ''
}

export const UseContactsLogic = () => {
    const [contact, setContact] = useState<Contact>(newContact)
    const [contactList, setContactList] = useState<Contact[]>([])

    const addContact = (contact: Contact) => {
        contact.id = uuid()
        setContactList([...contactList, contact])
        setContact(newContact)
    }

    const removeContact = (contact: Contact) => {
        const id = contact.id
        if (id) {
            setContactList([...contactList.filter((c) => c.id !== id)])
        }
    }

    return {
        contact,
        addContact,
        contactList,
        removeContact
    }
}