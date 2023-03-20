import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "styles/Home.module.css";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmpassword: ''
      }}
      
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),

        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),

        email: Yup.string().email('Invalid email address').required('Required'),

        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),

        confirmpassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 100);
      }}
    >
      <Form className={styles.btn}>
        <label htmlFor="firstName" >First Name</label>
        <Field name="firstName" type="text" className={styles.button} />
        <span className={styles.err}><ErrorMessage name="firstName"  /></span>

        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" type="text" className={styles.button}/>
        <span className={styles.err}><ErrorMessage name="lastName" className={styles.err} /></span>

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" className={styles.button} />
        <span className={styles.err}><ErrorMessage name="email" className={styles.err} /></span>

        <label htmlFor="password">password</label>
        <Field name="password" type="password" className={styles.button}/>
        <span className={styles.err}><ErrorMessage name="password" className={styles.err} /></span>

        <label htmlFor="confirmpassword" >confirmpassword</label>
        <Field name="confirmpassword" type="password" className={styles.button}/>
        <span className={styles.err}><ErrorMessage name="confirmpassword" className={styles.err} /></span>

        <button type="submit">Submit</button>
      </Form>

    </Formik>
  );
};
export default SignupForm;