"use client"
import { useEffect, useState } from 'react'
import '../home/home.css'
import AXIOS from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useParams } from "react-router-dom";
import { useRouter } from 'next/navigation';



export default function Home1(){
    const {id} =useParams()
    const [title,setTitle]=useState()
    const [description,setDescription]=useState()

    const update= useRouter();

    
    const [todo,setTodo] =useState()
    useEffect(()=>{
        AXIOS.get("http://localhost:9000/text")
        .then(result1=> setTodo(result1.data))
        .catch(err=> console.log(err))
       })

    useEffect(()=>{
        AXIOS.get("http://localhost:3001/getUser/"+id)
        .then(result=> {console.log(result)
            setTitle(result.data.title)   
            setDescription(result.data.description)     
         })
        .catch(err=> console.log(err))
       })
   
   
       const Update = (e)=>{
           e.preventDefault();
           AXIOS.put("http://localhost:3001/updateUser/"+id,{title,description})
           .then(result=>{ 
               console.log(result)
               update.push('/')
            })
           .catch(err => console.log(err))
       }
    return(
        <div className='main'>
        <div className="yk">

        <form  onSubmit={Update}>

         <input type='text' placeholder='   Title '   value={title} onChange={(e)=>setTitle(e.target.value)}></input><br/><br/>
         <input type='text' placeholder='   Description' value={description} onChange={(e)=>setDescription(e.target.value)}></input><br/><br/>
         <button type='submit'>Add Task</button>
        
        </form>
        </div>

        
      <br/>
      <div className="d-flex vh-100 justify-content-center align-items-center "style={{backgroundColor:" rgb(183, 185, 185)", width:"80%", margin:"auto" ,borderRadius:"12px"}}>
        <div className="w-50 bg-white rounded p-3" >
        <table className='table'>
            <thead>
        
           <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
         </tr>
       
        </thead>
          <tbody>
                 { 
                    todo&& todo.map((text) => {
                            return<tr>
                                <td>{text.title}</td>
                                <td>{text.description}</td>
                                <td> <button  className="btn btn-success" >Edit</button></td>
                                <td><button  className="btn btn-danger">Delete</button></td>
                           
                               </tr>
                        })
                    }
                   
        
         </tbody>
        </table>



         
       </div>
        </div>
        </div>
        
    )
}