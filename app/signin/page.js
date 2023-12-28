"use client"
import '../signin/signin.css'
import {Navigate,useNavigate} from 'react-dom'
import { useState } from 'react'
import AXIOS from 'axios'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login(){
  const [ email,setEmail] =useState()
  const [ password,setPassword] =useState()
  
  // const navigation=useNavigate()
  const rt= useRouter();

  const handleSumbit=(e)=>{
      e.preventDefault();
      AXIOS.post('http://localhost:9000/login',{email,password})
      .then(result =>{
          console.log(result)
          if(result.data.data ==="success"){
            // useEffect(() => {
            //    haii.push('/');
            // })
            rt.push('/home')
          } else{
              alert("email or password incorrect")
          }
      })
      .catch(err =>console.log(err))}
  
    return(
      <form  onSubmit={handleSumbit}>
    <div className="login">
        <div className="login1">
            <div className="login2" >
              <h2> Login </h2> <br /><br />
            <label>email address *</label><br /><br />
            <input type="text" onChange={(e)=>setEmail(e.target.value)}/><br /><br /><br />
            <label>Password *</label><br /><br />
            <input type="text"onChange={(e)=>setPassword(e.target.value)} /><br /><br /><br />
            <button>Log in</button>
          
            </div>

         </div>
       
       </div>
       </form>
    )
}
