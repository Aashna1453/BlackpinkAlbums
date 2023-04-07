import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from "react-router-dom"
import styles from "./Form.module.css";

const validate = values => {
    const errors = {}
    if (!values.firstName) {
      errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
      errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.lastName) {
        errors.lastName = 'Required'
      } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more'
      }
    return errors
  }

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div className={styles.field}>
      <label>{label}</label>
      <div>
        <input placeholder={label} type={type} className="form-control" />
        {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let Form = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={ validate }>
      <div className={styles.formgroup}>
        <Field name="firstName" component={renderField} label="First Name" />
      </div>
      <div className={styles.formgroup}>
        <Field name="lastName" component={renderField} label="Last Name" />
      </div>
      <div className={styles.formgroup}>
        <Field name="email" component={renderField} label="Email" />
      </div>
      <div className={styles.formgroup}>
        <Link className={styles.link} to="/home" type="submit">Submit</Link>
      </div>
    </form>
  )
}
Form = reduxForm({
  store: 'state',
})(Form);

export default Form;