import React from 'react'
import { Formik, Form, Field, } from 'formik';
import { useLoginMutation } from '../services/uploadApi';
import { useNavigate } from 'react-router-dom';
function Login() {
  var[loginFn]=useLoginMutation();
  var navigate=useNavigate();
  return (
    <div>
        <h1>Login</h1>
        <Formik
       initialValues={{ username: '', password: '' }}
      
       onSubmit={(values) => {
         loginFn(values).then(function(res){
          if(res.data.msg ==="loginsuccess"){
            window.localStorage.setItem("token",res.data.token)
            navigate("/dashboard")
          }
          else{
            navigate("/login")
          }
         })
       
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

export default Login