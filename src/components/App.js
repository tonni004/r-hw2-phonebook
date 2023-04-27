import { Component } from "react";
import { nanoid } from 'nanoid'
import Container from "./Container";
import Section from "./Section";
import PhonebookForm from "./PhonebookForm";
import Filter from "./Filter";
import ContactsList from "./ContactsList";

class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contacts);

    if (parsedContact) {
      this.setState({ contacts: parsedContact })
    }

  }

  componentDidUpdate(prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }

  addContact = ({ name, number }) => {
    const contactsList = this.state.contacts;

    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    contactsList.find(item => item.name === name)
      ? alert(`${name} is already in contacts!`)
      : this.setState((prevState) => ({
        contacts: [newContact, ...prevState.contacts],
      }))


  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))

  }

  changeFilter = (filter) => {
    this.setState({ filter })
  }

  visibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
  }


  render() {
    const { filter } = this.state;
    const visibleContact = this.visibleContact();

    return (
      <>
        <Container>
          <Section title="Phonebook">
            <PhonebookForm onSubmit={this.addContact} />
          </Section>

          <Section title='Contacts'>
            <Filter value={filter} onChange={this.changeFilter} />

            <ContactsList
              contacts={visibleContact}
              deleteContact={this.deleteContact} />
          </Section>

        </Container>
      </>

    )
  }
}

export default App;