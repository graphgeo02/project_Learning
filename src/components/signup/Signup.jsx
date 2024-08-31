import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import MyAlert from '../myAlert/MyAlert';
import ConfirmModal from '../confirmModal/ConfirmModal';
import Blognav from '../blogNav/Blognav';
//import ConfirmModal from '../confirmModal/ConfirmModal';


const Schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    fullName: Yup.string().min(2, "Too Short").required('Required'),
password: Yup.string()
    .min(8, "Must Contain 8 Characters")
    .required()
    .matches(/^(?=.*[a-z])/,  " Must Contain One Lowercase Character")
    .matches( /^(?=.*[A-Z])/, "  Must Contain One Uppercase Character")
    .matches(/^(?=.*[0-9])/,"  Must Contain One Number Character")
    .matches(/^(?=.*[!@#\$%\^&\*])/,"  Must Contain  One Special Case Character"),
    gender: Yup.string().required('Required'),
    terms: Yup.string().matches(/true/, "accept and continue").required('Required'),
  });


 const Signup = () => {

   let[isShow, setIshow] = useState(true);
   let [showModal, setShowModal] = useState(false);
   function handleDelete(){
  
   }
    return(
  <div>
    < Blognav />
    <h1>Signup</h1>
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        terms: "",
        password: "",
        gender: ""
      }}
      validationSchema={Schema}
      onSubmit={(values) => {
        // same shape as initial values
        setIshow(false)
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <fieldset>
           <label htmlFor="fullName">Full Name </label>
            <Field name="fullName" id="fullName" />
          {touched.fullName && errors.fullName && (
             <div>{errors.fullName}</div>
          )}
         </fieldset>

         <fieldset>
                <label htmlFor="password">Password </label>
            <Field type="password"name="password"  id="password"/>
            {touched.password && errors.password &&  
                 <div>{errors.password}</div>}
            </fieldset>

            <fieldset>
                <label htmlFor="email">Email </label>
            <Field name="email"  id="email"/>
            {touched.email && errors.email &&  
                 <div>{errors.email}</div>}
            </fieldset>
            <fieldset>
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            {touched.gender && errors.gender &&  
                 <div>{errors.gender}</div>}
            </fieldset>
            
         <fieldset>
                <label htmlFor="terms">Terms </label>
            <Field type="checkbox"name="terms"  id="terms"/>
            {touched.terms && errors.terms &&  
                 <div>{errors.password}</div>}
            </fieldset>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
    {/*alert test */}
    {
      isShow && <MyAlert isShow={isShow} msg="Please fill all the fields"/>
    }
     <button onClick={()=>setShowModal(true)}>Delete Blog</button>
   {/*<ConfirmModal setShowModal={setShowModal} ShowModal={ShowModal}/> */}
   <ConfirmModal 
   action={handleDelete}
   setShowModal={setShowModal}
   showModal={showModal}/>
  </div>
);
};

export default Signup;