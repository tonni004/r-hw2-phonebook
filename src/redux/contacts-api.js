// import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PROJECT_TOKEN = '64826ff4f2e76ae1b95b3f40';

axios.defaults.baseURL = `https://${PROJECT_TOKEN}.mockapi.io/contacts/contacts`;

export const fetchAllContacts = () => {
    return axios.get('').then(res => res.data);
}

// export const fetchAllContacts = createAsyncThunk('contacts/fetchContacts', async () => {
//     const { data } = axios.get('');
//     return data;
// });

export const addNewContact = (contact) => {
    return axios.post('', contact).then(res => res.data);
};

export const deleteContactById = (contactId) => {
    return axios.delete(`/${contactId}`)

};


