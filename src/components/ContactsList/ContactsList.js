import React from "react";
import PropTypes from 'prop-types';
import 'material-icons/iconfont/material-icons.scss';
import styles from './ContactsList.module.scss';

const ContactsList = ({ contacts, deleteContact }) => (

    <ul className={styles.ContactsList}>
        {
            contacts.length === 0
                ? <p className={styles.Notification}>
                    <span className={styles.NotificationTitle}>No contacts</span> Contacts you've added will appear here.</p>

                : contacts.map((contact) => {
                    return (
                        <li className={styles.ContactsItem} key={contact.id}>
                            <div>
                                <span className={styles.ContactName}>{contact.name}:</span>
                                <span>{contact.number}</span>
                            </div>

                            <button
                                className={styles.DeleteBtn}
                                onClick={() => deleteContact(contact.id)}> <span className='material-icons'>delete</span></button></li>)
                })



        }
    </ul>


)

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
}



export default ContactsList;