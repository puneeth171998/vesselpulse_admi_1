import './App.css';
import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import Dashboard from './Components/pages/dashboard'
import Settings from './Components/pages/settings'
import VesselOwners from './Components/pages/vesselowners'
import Vessels from './Components/pages/vessels';
import Signups from './Components/pages/signups';
import Operations from './Components/pages/operations'
import Alerts from './Components/pages/alerts';
import Edit_owner from './Components/pages/edit_owner'
import Login from './Components/pages/authentication/login'
import CreateVesselowner from './Components/pages/create_vesselowner'
import Vesseldetails from './Components/pages/vesseldetails'
import Vesselownerdetails from './Components/pages/vesselowner_details'

import { useEffect } from 'react';
function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('accessToken')? JSON.parse(localStorage.getItem('accessToken')) :null
    console.log(token)

  useEffect(() => {

   
    if (token == null) {
      navigate('/login'); // Navigate to login page if token is not present
    } else {
       navigate('/dashboard');// Navigate to dashboard if token is present
    }
  }, [ token])

  return (
    
    <Routes>
      
    <Route path="/login" Component={Login}></Route>
      <Route path="/dashboard" Component={Dashboard}></Route>
      <Route path="/settings" Component={Settings}></Route>
      <Route path="/vesselowners" Component={VesselOwners}></Route>
      <Route path="/vessels" Component={Vessels}></Route>
      <Route path="/signups" Component={Signups}></Route>
      <Route path="/operations" Component={Operations}></Route>
      <Route path="/alerts" Component={Alerts}></Route>
      <Route path="/create_vesselowner" Component={CreateVesselowner}></Route>
      <Route path="/edit_owner/:id" Component={Edit_owner}></Route>
      <Route path="/vesseldetails/" Component={Vesseldetails}></Route>
      <Route path="/vesselowner_details/:id" Component={Vesselownerdetails}></Route>
      
      </Routes>
    
  );
}

export default App;
