"use client"
import '../signup/signup.css'
import { useState } from 'react'
import AXIOS from 'axios'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp(){
const [username,setUsername]= useState()
const [email, setEmail] =useState()
const [password,setPassword] =useState()

// const Navigate=useNavigate()
const rt= useRouter();



const handleSumbit=(e)=>{
   e.preventDefault();
   AXIOS.post('http://localhost:9000/userregister',{username,email,password})
   .then(result =>{console.log(result)
     rt.push('/signin')
   })
   .catch(err =>console.log(err))}
      
    return(
      <form onSubmit={handleSumbit}>
    <div className="login">
    
         <div className="login1">
            <div className="login2" >
            <h2>   Sign-Up </h2> <br /><br />
            <label>Username  *</label><br /><br />
            <input type="text" onChange={(e)=> setUsername(e.target.value)} /><br/><br/><br/>
            <label>Email  *</label><br /><br />
            <input type="email"  onChange={(e)=> setEmail(e.target.value)} /><br /><br /><br />
            <label>Password *</label><br /><br />
            <input type="text"  onChange={(e)=> setPassword(e.target.value)} /><br /><br /><br />
            <button type='submit'>SignUp  </button><br/> <br/>
            <p>Already have account <a href="signin">Login</a></p>
          
            </div>

         </div>
       
       </div>
       </form>
   
    )
}
