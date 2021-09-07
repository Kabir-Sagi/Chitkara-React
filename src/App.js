import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';
import Form from './Components/Form/Form'
import Information from './Components/Information/Information';
import axios from 'axios'
import Nodata from './Components/NoData/NoData'
import UseRef from './Components/Hooks/UseRef';
import Navbar from './Components/Routing/Navbar/Nav'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Components/Routing/Home/Home'
import Service from './Components/Routing/Service/Service'
import Profile from './Components/Routing/Profile/Profile'
import AContext from './Components/ContextAPI/A'

function App() {
        const [state,setState] = useState({})

    const getDataFromServer = (city)=>{
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=95eb982c8d6867b69cca24b1eb60018e`)
       .then((res)=>{
         console.log(res.data)
         setState(res.data)
       },(error)=>{
         console.log("Error Message",error.message)
         alert("Entered City data  is not found")
       })
    }

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
       
        <Route path="/capi" component={AContext} />
        <Route path="/profile" component={UseRef} />
      </Switch>
      </BrowserRouter>
     {/* <h2 className="text-white">WEATHER APP</h2>
     <Form getDataFromServer={getDataFromServer} />
     {Object.keys(state).length===0?<Nodata /> :<Information info={state} />} */}
     {/* <UseRef /> */}
    </div>
  );
}

export default App;
