import { fetchAllContacts, addNewContact, deleteContactById } from './contacts-api';
// import { nanoid } from 'nanoid';
import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
} from "./contacts-actions";

// dispatch(fetchAllContactsRequest());

// try {
//     const contacts = await fetchAllContacts();
//     dispatch(fetchAllContactsSuccess(contacts));
// } catch (error) {
//     dispatch(fetchAllContactsError(error));
// }


export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequest());

    try {
        const contacts = await fetchAllContacts();
        return dispatch(fetchContactsSuccess(contacts))
    } catch (error) {
        dispatch(fetchContactsError(error))
    }

}

export const addContacts = ({ name, number }) => async dispatch => {
    dispatch(addContactRequest());
    const contact = {
        // id: nanoid(),
        name: name,
        phone: number,
    }
    try {
        const newContact = await addNewContact(contact);
        return dispatch(addContactSuccess(newContact))
    } catch (error) {
        return dispatch(addContactError(error))
    }


}

export const deleteContacts = contactId => async dispatch => {
    dispatch(deleteContactRequest());
    try {
        const deleteContact = await deleteContactById(contactId);
        return dispatch(deleteContactSuccess(deleteContact));
    } catch (error) {
        return dispatch(deleteContactError(error))
    }

}


