import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [physicians, setPhysicians] = useState([]);
  const [currentPhysician, setCurrentPhysician] = useState([]);
  const [appointments, setAppointments] = useState({})
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    axios.get("http://localhost:5000/api/visitors/physicians")
    .then(res=>{
      setPhysicians(res.data)
      setIsLoading(false)
    })
    .catch(err=>console.log(err))
 })

//  const getAppointments = (id) => {
//    axios.get(`http://localhost:5000/api/visitors/physicians/:${id}`)
//    .then(res => {
//      setAppointments(res.data)
//      console.log("here")
//    })
//    .catch(err=>console.log(err))
//  }
 return (
   <div>
    <div className="App">
      {isLoading ?
        <h2>Gathering your physicians</h2>
      :
      physicians.map(physician=>{
        return <p >{physician.name}</p>
    })
    }
  </div>
 </div>
 );
}


export default App;
