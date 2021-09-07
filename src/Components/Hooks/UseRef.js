import React,{useRef} from 'react'

 function UseRef() {
    const nameRef= useRef()
    const passwordRef= useRef()
    const emailRef= useRef()

    const getDataFromFields = ()=>{
        console.log(nameRef.current.value,passwordRef.current.value,emailRef.current.value)
      var Information = {
          uname:nameRef.current.value,
          pname:passwordRef.current.value,
          ename:emailRef.current.value
      }
      console.log(Information)

    
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                       <div className="card">

                           <div className="card-header bg-dark text-white h4"> FORM CONCEPT</div>
                           <div className="card-body">
                               <div className="form-group mt-3">
                                 <input 
                                 type="text"
                                  placeholder="Enter Username" 
                                  className="form-control" 
                                  ref={nameRef}
                                  />
                               </div>
                               <div className="form-group mt-3">
                                 <input 
                                  ref={passwordRef}
                                 type="password" placeholder="Enter Password" className="form-control" />
                               </div>
                               <div className="form-group mt-3">
                                 <input 
                                  ref={emailRef}
                                 type="text" placeholder="Enter Email" className="form-control" />
                               </div>
                               <button className="btn btn-dark px-3 mt-3" onClick={getDataFromFields}>Submit</button>

                           </div>
                       </div>

                </div>
            </div>
            
        </div>
    )
}
export default UseRef
