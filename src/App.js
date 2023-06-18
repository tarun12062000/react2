
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showalert=(meassage,type)=>{
        setAlert({
          msg:meassage,
          type:type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showalert('Dark Mode has been enabled','success')
      document.title='TextUtils-Dark';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showalert('Light Mode has been enabled','success')
      document.title='TextUtils-Light';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <Routes>
        <Route path='/About' element={<About/>}/>
        <Route path='/' element={<TextForm heading='Enter text to analyze below' mode={mode} showalert={showalert}/>}/>
     </Routes>
    </div>
    </Router>
   </>
    
  );

}

export default App;
