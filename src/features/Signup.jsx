import React from 'react'
import { Formik, Form, Field, } from 'formik';
import { useSignupMutation } from '../services/uploadApi';
import { useNavigate } from 'react-router-dom';
function Signup() {
  var[signupFn]=useSignupMutation();
  var navigate=useNavigate();
  return (
    <div>
        <h1>Signup</h1>
         <Formik
       initialValues={{ username: '', password: '' }}
       onSubmit={(values) => {
        console.log(values)
         signupFn(values)
          navigate("/login")
       }}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="username" name="username" />
           <br />
           <Field type="password" name="password" />
           <br />
           <button type="submit">
             Submit
           </button>
         </Form>
       )}
     </Formik>
    </div>
  )
}

export default Signup