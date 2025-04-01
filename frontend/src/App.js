import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import NoteState from './context/note/NoteState'
// import CalendarComponent from './component/CalendarComponent';

function App() {
  const [alert, setAlert] = useState(null);
  // const [mode, setMode] = useState('light');


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark')
  //     document.body.style.backgroundColor = '#042743'
  //     showAlert("Dark mode has been enabled ", "success")
  //   }
  //   else {
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("Light mode has been enabled ", "success")
  //   }


    return (

      <NoteState>
        <>




          <Router>
            <Navbar />
            <Alert alert={alert} />
            <div className="container mt-4">

              <Routes>
                <Route exact path="/" element={<Home showAlert={showAlert} />} />
                <Route exact path="/about" element={<About  />} />
                <Route exact path="/login" element={<Login showAlert={showAlert} />} />
                <Route exact path="/signup" element={<Signup  showAlert={showAlert} />} />
              </Routes>
            </div>
          </Router>
        </>
      </NoteState>

    );
  }

export default App;

