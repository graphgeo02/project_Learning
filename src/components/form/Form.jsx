import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const Form = () => {
  let [fullName, setFullname] = useState('');
  let [email, setEmail] = useState('');   
  let [password, setPassword] = useState('');
  let [terms, setTerms] = useState('');  
  let [gender, setGender] = useState('Male');  
  let [show, setShow] = useState('password');
  function handleSubmit(e){
           e.preventDefault();
           let toDb ={
            fullName,
            email,
            password,
            terms,
            gender
           }
           console.log(toDb);
  }
  return (
    <div align="center">
         <h2>Form</h2>
         <form onSubmit={(e)=>handleSubmit(e)}>
  <fieldset>
  <label htmlFor="fullName">Full Name </label>
  <input type="text" 
  name="fullName" 
  id="fullName" 
  placeholder="Jhon Doe" 
  value={fullName}
  onChange={(e)=> setFullname(e.target.value)}
  required
  />
</fieldset>
<fieldset>
  <label htmlFor="email">Email </label>
  <input type="email" 
  name="email" 
  id="email" 
  placeholder="JhonDoe@gmail.com" 
  value={email}
  onChange={(e)=> setEmail(e.target.value)}
  required
  />
</fieldset>
<fieldset>
  <label htmlFor="show">Password | <span onClick={()=> setShow(show ==="password"? "text": "password")}>{show === "password"? "show": "hide"}</span> </label>
  <input type={show} 
  name="password" 
  id="password" 
  placeholder="Strong password" 
  value={password}
  onChange={(e)=> setPassword(e.target.value)}
  required
  />
</fieldset>
<fieldset>
 <span>Gender: </span>
  <label htmlFor="male">Male </label>
  <input type="radio"
  value="male"
  name="gender" 
  id="male" 
  onChange={(e) => setGender(e.target.value)}
  required
  />
  <label htmlFor="female">Female</label>
  <input type="radio" 
  value="female"
  name="gender" 
  id="female"
  onChange={(e)=> setGender(e.target.value)}
  required
  />
</fieldset>
<fieldset>
  <input type="checkbox"
  value={terms}
  name="terms" 
  id="terms"  
required
  onChange={(e)=> setTerms(e.target.value)}
  
  />
  <label htmlFor="terms">By clicking you accept our terms <Link >Terms and Conditions</Link></label>
</fieldset>
<fieldset>
  <button type="submit">Submit</button>
</fieldset>
          
</form>    
    </div>
  )
}

export default Form


{/* <form onSubmit={(e)=>handleSubmit(e)}>
<fieldset>
  <label htmlFor="fullName">Full Name</label>
  <input type="text" name="fullName" id="fullName" placeholder="Jhon Doe" />
</fieldset>
<fieldset>
  <label htmlFor="email">Email</label>
  <input type="email" name="email" id="email" placeholder="JhonDoe@gmail.com" />
</fieldset>
<fieldset>
  <label htmlFor="password">Password</label>il.com
  <input type="password" name="password" id="password" placeholder="Strong password" />
</fieldset>
<fieldset>
 <span>Gender</span>
  <label htmlFor="male">Male</label>
  <input type="radio"value='male' name="gender" id="male"  />
  <label htmlFor="female">Female</label>
  <input type="radio" value='female'name="gender" id="female" />
</fieldset>
<fieldset>
  <input type="checkbox"value='male' name="terms" id="terms"  />
  <label htmlFor="terms">By clicking you accept our terms <Link>Terms and Conditions</Link></label>
</fieldset>
</form> */}
 