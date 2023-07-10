import { createReducer, combineReducers } from "@reduxjs/toolkit";
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
    filterContacts,
} from "./contacts-actions";
// import { addContact, deleteContact } from "./contacts-operations";

const items = createReducer([], {
    [fetchContactsSuccess]: (state, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [payload, ...state],
    [deleteContactSuccess]: (state, { payload }) => state.filter(contact => contact.id !== payload.id),
})

const filter = createReducer('', {
    [filterContacts]: (_, { payload }) => payload,
})

export const isLoadingReduser = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
});

export default combineReducers({
    items,
    filter,
})