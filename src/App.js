import React,{useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';


import Weather from './Components/WeatherApp/Home'

import UseRef from './Components/Hooks/UseRef';
import Navbar from './Components/Routing/Navbar/Nav'
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './Components/Routing/Home/Home'
import Pizza from './Components/Redux/Pizza'
import AContext from './Components/ContextAPI/A'
import ReduxInformation from './Components/Redux/Information';

function App() {
       

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={Weather} />
        <Route path="/capi" component={AContext} />
        <Route path="/form" component={UseRef} />
        <Route path="/redux" component={Pizza} />
        <Route path="/info" component={ReduxInformation} />
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
