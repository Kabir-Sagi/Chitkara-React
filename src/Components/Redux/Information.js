import React from 'react'
import {useSelector} from 'react-redux'

export default function Information() {
          const store =  useSelector((ReduxstoreData)=>{
                         return ReduxstoreData
                  })
    return (
        <div>
            

              <div className="card mt-5 ">
                  <div className="card-header bg-dark text-white text-center">
                  <h2>Information About Items</h2>
                  </div>
                  <div className="card-body">
                    <h1>  Pizza:{store.pizzaReducer.pizza}</h1>
                    <h1>  Burger:{store.pizzaReducer.burger}</h1>
                  </div>
              </div>
        </div>
    )
}
