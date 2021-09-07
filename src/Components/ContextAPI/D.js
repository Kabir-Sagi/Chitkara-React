import React,{useContext} from 'react'
import myContext from './Context'

export default function D() {
           const myContextData= useContext(myContext)
    return (
        <div>
             <h2>D Component</h2>
             <h5>NAME:{myContextData.name}</h5>
             <h5>CITY:{myContextData.city}</h5>
        </div>
    )
}
