import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./contacts-actions";

const items = createReducer([], {
    [addContact]: (state, { payload }) => [payload, ...state],
    [deleteContact]: (state, { payload }) => state.filter(contact => contact.id !== payload.id),
})

// contacts: prevState.contacts.filter(contact => contact.id !== contactId)

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
})

export default combineReducers({
    items,
    filter,
})