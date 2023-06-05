import { createAction } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const addContact = createAction('contacts/add', ({ name, number }) => ({
    payload: {
        id: nanoid(),
        name: name,
        number: number,
    }
}));

export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/changeFilter');