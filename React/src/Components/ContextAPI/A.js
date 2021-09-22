import React,{useState}from 'react'
import B from './B'
import myContext from './Context'

export default function A() {
     const [state,setState]= useState({
               name:"Edyst",
               city:"HYD"
           })
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <div className="card bg-dark text-white">
                        <div className="card-header bg-primary text-white text-center"> <h2>A Component</h2></div>
                        <div className="card-body">
                        <myContext.Provider value={state}>
                        <B />
             </myContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
             {/* <h2>A Component</h2>

             <myContext.Provider value={state}>
             <B />
             </myContext.Provider> */}

        </div>
    )
}
