import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
function Add() {
  return (
    <div>
       <Helmet>
        <title>add</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div>add</div>

      <Formik
       initialValues={{ name: '', createdAt: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           createdAt: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values) => {
        fetch("https://6634d2069bb0df2359a2d9f8.mockapi.io/product/product/", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
       }}
     >
       <Form>
         {/* <label htmlFor="url">url</label>
         <Field name="avatar" type="url" />
         <ErrorMessage name="avatar" /> */}
 
         <label htmlFor="name">name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="createdAt">createdAt</label>
         <Field name="createdAt" type="text" />
         <ErrorMessage name="createdAt" />

         <button type="submit" >Submit</button>
       </Form>
     </Formik>
    </div>
  )
}

export default Add
