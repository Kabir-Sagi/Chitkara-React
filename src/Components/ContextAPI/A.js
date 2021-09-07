import React,{useState}from 'react'
import B from './B'
import myContext from './Context'

export default function A() {
     const [state,setState]= useState({
               name:"Edyst",
               city:"HYD"
           })
    return (
        <div>
             <h2>A Component</h2>

             <myContext.Provider value={state}>
             <B />
             </myContext.Provider>
             
        </div>
    )
}
