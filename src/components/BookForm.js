import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ initialValues, onSubmit, buttonText }) => {
  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required').nullable(), // Ensure it's a date
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values); // Call the onSubmit function passed as a prop
        resetForm(); // Reset the form after submission
      }}
      enableReinitialize={true} // Reinitialize form values when switching between Add/Edit
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>
          <div>
            <label>Author</label>
            <Field name="author" type="text" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>
          <div>
            <label>ISBN</label>
            <Field name="isbn" type="text" />
            <ErrorMessage name="isbn" component="div" className="error" />
          </div>
          <div>
            <label>Publication Date</label>
            <Field name="publicationDate" type="date" />
            <ErrorMessage name="publicationDate" component="div" className="error" />
          </div>
          <button type="submit">{buttonText} Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;