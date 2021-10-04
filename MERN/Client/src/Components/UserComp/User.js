import React,{useState,useEffect} from 'react'
import axios from 'axios'

 function User() {
       const [state,setState]= useState([])

         useEffect(() => {
            axios.get("http://localhost:8000/user/").then((res)=>{
                console.log(res.data)
                 setState(res.data)
            },(err)=>{
                alert("Error while getting data from server")
                console.log(err)
            })
            
         },[])
    return (
        <div className="container mt-5">
             <div className="row">
                 <div className="col">
                  {
                      state.length > 0 ?<div>
                              <table className="table table-hover">
                                  <thead className="bg-dark text-white">
                                      <tr>
                                          <th>ID</th>
                                          <th>NAME</th>
                                          <th>PASSWORD</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {
                                          state.map((element,index)=>{
                                          return <tr key={index + 1}>  
                                               <td>{element._id}</td>
                                               <td>{element.name}</td>
                                               <td>{element.password}</td>
                                               </tr>
                                          })
                                      }
                                  </tbody>
                              </table>
                          
                           </div>  :<div><h3>Data is not available</h3></div>
                  }
                 </div>
             </div>
        </div>
    )
}

export default User
