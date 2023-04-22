import React from "react";
import PropTypes from 'prop-types';
import s from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
    const filterSearch = (e) => {
        onChange(e.currentTarget.value)
    }

    return (
        <div>
            <label className={s.FilterLabel}>
                Find contact by name:
                <input
                    className={s.FilterInput}
                    type='text'
                    value={value}
                    onChange={filterSearch} />
            </label>
        </div>
    )

}

Filter.protoTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}

export default Filter;