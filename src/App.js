import React from 'react';
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import  Workbook from './pages/Workbook'
import Database from './pages/Database'
import ServiceNow from './pages/Servicenow'
import ResponsiveNavigation from './components/ResponsiveNavigation'

function App() {

const navlinks =[
  {
    text:'Workbook',
    path:'/workbook',
    icon:''
  },
  {
    text:'Database',
    path:'/database',
    icon:''
  },
  {
    text:'ServiceNow',
    path:'/serviceNow',
    icon:''
  }
]

  return (
    <div className="App">
      <ResponsiveNavigation
      navlinks={ navlinks }
      logo={ logo }
      />
      <Router>
       <Workbook path="/workbook" /> 
       <Database path="/database" /> 
       <ServiceNow path="/serviceNow" /> 
      </Router>
       </div>
  );
}

export default App;
