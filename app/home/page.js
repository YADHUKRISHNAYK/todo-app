"use client"
import { useEffect, useState } from 'react'
import '../home/home.css'
import AXIOS from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home1(){
    const [title ,setTitle] =useState()
    const [description,setDescription] =useState()
    
    const [todo,setTodo] =useState()

    useEffect(()=>{
     AXIOS.get("http://localhost:9000/text")
     .then(result1=> setTodo(result1.data))
     .catch(err=> console.log(err))
    })


    const handleText=(e)=>{
        e.preventDefault();
        AXIOS.post('http://localhost:9000/text',{title,description})
        .then(result1 =>{console.log(result1)
        })
        .catch(error =>console.log(error))}


    return(
        <div className='main'>
        <div className="yk">

        <form  onSubmit={handleText}>

         <input type='text' placeholder='   Title '  onChange={(e)=>setTitle(e.target.value)}></input><br/><br/>
         <input type='text' placeholder='   Description'  onChange={(e)=>setDescription(e.target.value)}></input><br/><br/>
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