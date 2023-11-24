import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import {Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#132849";
      showAlert("Dark Mode has been enables", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enables", "success")
    }
  }
  return (
    <>
      <Navbar title="Text-Utils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <Routes>
          <Route path='/' element={<TextForm mode={mode} showAlert={showAlert} />} />
          <Route path='/about' element={<About mode={mode} />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
