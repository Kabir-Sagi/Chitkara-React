import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

 function Pizza() {
     const storeData = useSelector((store)=>{
         return store
     })
     const dispatch = useDispatch()

     const sendDataToRedux = ()=>{
             dispatch({
                 type:"PIZZA",
                 payload:storeData.pizzaReducer.pizza - 1
             })
     }

      const UpdateBurger = ()=>{
                dispatch({
                    type:"BURGER",
                    payload:storeData.pizzaReducer.burger - 1
                })
      }
    return (
        <div className="container mt-5">
             <div className="row">
                 <div className="col-sm-6">
                     <div className="card">
                         <div className="card-header bg-primary text-white text-center">
                             Pizza Hut
                         </div>
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-sm-6">
                                     <img src="https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img-fluid" />
                                 </div>
                                 <div className="col-sm-6">
                                     <h2>Total: {storeData.pizzaReducer.pizza}</h2>
                                     <button onClick={sendDataToRedux} class="btn btn-primary px-3 mt-3">Buy Pizza</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm-6">
                 <div className="card">
                         <div className="card-header bg-primary text-white text-center">
                             Burger King
                         </div>
                         <div className="card-body">
                             <div className="row">
                                 <div className="col-sm-6">
                                     <img src="https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="img-fluid" />
                                 </div>
                                 <div className="col-sm-6">
                                     <h2>Total: {storeData.pizzaReducer.burger}</h2>
                                     <button onClick={UpdateBurger} class="btn btn-primary px-3 mt-3">Buy Burger</button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
export default Pizza
