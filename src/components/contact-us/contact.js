import React, { useState } from "react"

import styles from "./contact.module.scss"
import { Form, Field, ErrorMessage, Formik } from "formik"

import axios from "axios"

const ContactUsComponent = props => {
  const title = props.title || "Contact Us Form"
  const subtitle =
    props.subtitle || "Send to us any inquires or questions you have."

  const [shown, setShown] = useState(false)

  return (
    <div className={styles.contact}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        }}
        validate={values => {
          let errors = {}
          if (!values.email) {
            errors.email = "Your email address is required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }

          if (!values.name) {
            errors.name = "Your name is required"
          }

          if (
            values.phoneNumber &&
            !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/.test(
              values.phoneNumber
            )
          ) {
            errors.phoneNumber = "The phone number you entered is invalid"
          }

          if (!values.subject) {
            errors.subject = "A subject is required"
          }

          if (!values.message) {
            errors.message = "The message field is required"
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const {
            name,
            subject,
            message,
            email: senderMail,
            phoneNumber,
          } = values
          axios
            .get(
              "https://us-central1-stemegypt-d0393.cloudfunctions.net/sendMail",
              {
                params: {
                  name,
                  type: props.type || "contact",
                  subject,
                  message,
                  senderMail,
                  phoneNumber,
                },
              }
            )
            .then(result => {
              setSubmitting(false)
              setShown(true)
              resetForm()
              setTimeout(() => setShown(false), 5000)
              console.log(result)
            })
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <label htmlFor="name">Full name</label>
            <Field
              type="text"
              name="name"
              placeholder="Enter your full name"
              className={styles.lineedit}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <label htmlFor="email">Email</label>
            <Field
              type="text"
              name="email"
              placeholder="Enter your email address"
              className={styles.lineedit}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label htmlFor="phbneNumber">Phone Number</label>

            <Field
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className={styles.lineedit}
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className={styles.error}
            />

            <label htmlFor="subject">Subject</label>
            <Field
              type="text"
              name="subject"
              placeholder="Enter the subject of the inquiry"
              className={styles.lineedit}
            />
            <ErrorMessage
              name="subject"
              component="div"
              className={styles.error}
            />

            <label htmlFor="message">Message</label>
            <Field
              as="textarea"
              name="message"
              placeholder="Enter your message"
              className={styles.message}
            />
            <ErrorMessage
              name="message"
              component="div"
              className={styles.error}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={styles.submit}
            >
              Send
            </button>
          </Form>
        )}
      </Formik>
      <div className={`${styles.sent} ${shown ? styles.shown : ""}`}>
        Your Message was sent
      </div>
    </div>
  )
}

export default ContactUsComponent
