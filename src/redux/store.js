import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

import contactsReduser from './contacts-reducer';

// import {
//     FLUSH,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//     REHYDRATE,
// } from 'redux-persist/es/constants';




const rootReduser = combineReducers({
    contacts: contactsReduser,
})

const store = configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV === 'development',
})

export default store;