// import { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { addContacts, deleteContacts, fetchContacts } from '../redux/contacts-operations';
import { filterContacts } from '../redux/contacts-actions';
import { getFilterContacts, getVisibleContacts } from '../redux/contacts-selectors';
// components
import Container from "./Container";
import Section from "./Section";
import PhonebookForm from "./PhonebookForm";
import Filter from "./Filter";
import ContactsList from "./ContactsList";


function App({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onFilterContacts,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(
    ));
  }, [dispatch]);

  return (
    <>
      <Container>
        <Section title="Phonebook">
          <PhonebookForm
            onSubmit={contact => onAddContact(contact)}
          />
        </Section>

        <Section title='Contacts'>
          <Filter
            value={filter} onChange={e => onFilterContacts(e.currentTarget.value)}
          />

          <ContactsList
            contacts={contacts}
            deleteContact={contacts => onDeleteContact(contacts.id)}
          />
        </Section>

      </Container>
    </>

  )
}

const mapStateToStore = state => {
  return {
    contacts: getVisibleContacts(state),
    filter: getFilterContacts(state),
  }
};

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContacts(contact)),
  onDeleteContact: id => dispatch(deleteContacts(id)),
  onFilterContacts: value => dispatch(filterContacts(value)),
})

export default connect(mapStateToStore, mapDispatchToProps)(App);