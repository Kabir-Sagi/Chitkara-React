import React,{useContext} from 'react'
import myContext from './Context'

export default function D() {
           const myContextData= useContext(myContext)
    return (
        <div>
             {/* <h2>D Component</h2>
             <h5>NAME:{myContextData.name}</h5> */}
             {/* <h5>CITY:{myContextData.city}</h5> */}
             <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card bg-dark text-white">
                        <div className="card-header text-center text-white bg-warning">
                        <h2>D Component</h2>
                        </div>
                        <div className="card-body text-center">
                         <h5>{myContextData.name}</h5> 
                        <h5>{myContextData.city}</h5> 
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        </div>
    )
}
