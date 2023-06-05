import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReduser from './contacts-reducer';

const rootReduser = combineReducers({
    contacts: contactsReduser,
})

const store = configureStore({
    reducer: rootReduser,
    // devTools: process.env.NODE_ENV === 'development',
})

export default store;