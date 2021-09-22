import React,{useState,useRef} from 'react'

const Form = (props)=>{
    const cityRef= useRef()
    console.log("Form")

    const[state,setState]  = useState('')

     const sendData = ()=>{
          props.getDataFromServer(cityRef.current.value)
     }

  return(
      <div className="container mt-5">
          <div className="row">
                 <div className="col-sm-3"></div>

                 <div className="col-sm-6">
                       <div className="form-group" style={{display:"flex"}}>
                      <input 
                      type="text" 
                      placeholder="Enter City" 
                      className="form-control"
                    //    onChange={(event)=>{setState(event.target.value)}}
                       ref={cityRef}
                      />
                      <button 
                      className="btn btn-primary px-5 mx-2"
                      onClick={sendData} 
                      >Search</button>
                       </div>

                 </div>

                 <div className="col-sm-3"></div>
          </div>
         
      </div>
  )

}

export default Form