// import { Component } from "react";
import { connect } from "react-redux";
import { addContact, deleteContact, filterContacts } from '../redux/contacts-actions';
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
            deleteContact={id => onDeleteContact(id)}
          />
        </Section>

      </Container>
    </>

  )
}

const mapStateToStore = state => {
  const { contacts } = state;
  const { items, filter } = contacts;
  const normalizedFilter = filter.toLowerCase();

  return {
    contacts: items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)),
    filter: state.contacts.filter,
  }
};

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContact(contact)),
  onDeleteContact: id => dispatch(deleteContact(id)),
  onFilterContacts: value => dispatch(filterContacts(value)),
})

export default connect(mapStateToStore, mapDispatchToProps)(App);