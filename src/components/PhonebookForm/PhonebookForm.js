
import { Component } from "react";
// import PropTypes from 'prop-types';
import styles from './PhonebookForm.module.scss';

class PhonebookForm extends Component {

    state = {
        name: '',
        number: '',
    }

    handleChange = (e) => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state)

        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '' })
    }


    render() {

        return (
            <div className={styles.PhonebookForm} >
                <form onSubmit={this.handleSubmit}>
                    <label
                        className={styles.PhonebookLabel}
                    > Contact name:

                        <input
                            className={styles.PhonebookInput}
                            type="text"
                            name="name"
                            value={this.state.name}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required

                            onChange={this.handleChange}

                        /></label>

                    <label className={styles.PhonebookNumberLabel}>
                        Phone number:

                        <input
                            className={styles.PhonebookInput}
                            type="tel"
                            name="number"
                            value={this.state.number}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required

                            onChange={this.handleChange}
                        />
                    </label>


                    <button
                        className={styles.PhonebookBtn}
                        type="submit"
                        onClick={this.onBtnClick}
                    >Add conctact</button>
                </form>
            </div>
        )

    }

}


export default PhonebookForm;