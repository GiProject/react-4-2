import React, { useState } from 'react';
import { Formik } from 'formik';

export default function TrainingAccountingForm({formSubmit}) {

    const initialState = {
        date: '',
        way: 0
    }

    const [values, setValues] = useState(initialState);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setValues(values => ({...values, [name]: value}));
    }

    return <Formik
        initialValues={{date:'', way: 0}}
        validate={values => {
            const errors = {};
            if (!/^\d{2}\.\d{2}\.\d{2}$/.test(values.date)) {
                errors.date = 'Невалидная дата'
            }
            return errors;
        }}
        onSubmit={values => {
            formSubmit(values);
        }}
    >
        {({
            values,
            errors,
            handleChange,
            handleSubmit
        }) => (
            <div>
                <div className='errors'>{errors.date}</div>
                <form onSubmit={handleSubmit}>
                    <div className='form-input'>
                        <label htmlFor="name">Дата(дд.мм.гг)</label>
                        <input
                            type="text"
                            name="date"
                            onChange={handleChange}
                            value={values.date}
                        />
                    </div>
                    <div className='form-input'>
                        <label htmlFor="name">Пройдено км</label>
                        <input
                            type="number"
                            name="way"
                            onChange={handleChange}
                            value={values.way}
                        />
                    </div>
                    <button type="submit">Ok</button>
                </form>
            </div>
        )}
    </Formik>
}