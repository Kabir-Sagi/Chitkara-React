import React,{useState}from 'react'
import axios from 'axios'
import Information from './Information/Information'
import Form from './Form/Form'
import Nodata from './NoData/NoData'
import {info} from '../../SensitiveInfo/info'


export default function Home() {
    const [state,setState] = useState({})

    const getDataFromServer =(city)=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${info.key}`)
       .then((res)=>{
         console.log(res.data)
         setState(res.data)
       },(error)=>{
         console.log("Error Message",error.message)
         alert("Entered City data  is not found")
       })
    }
    return (
        <div style={{textAlign:"center",height:"100vh",background: "url('https://images.pexels.com/photos/2028885/pexels-photo-2028885.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')"}}>
          <div style={{paddingTop:"100px",textAlign:"center",height:"100vh",backgroundColor:"rgba(0,0,0,0.7)"}}> 
             <h2 className="text-white">WEATHER APP</h2>
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0?<Nodata /> :<Information info={state} />} 
     </div>
        </div>
    )
}
