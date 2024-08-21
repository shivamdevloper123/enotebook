import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import NoteState from './context/note/NoteState'

function App() {
  return (
   <NoteState>
      <>
        <Router>
          <Navbar />
          <Alert message = "This react course is amazing"/>
          <div className="container">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/signup" element={<Signup/>} />
          </Routes>
          </div>
        </Router>
      </>
      </NoteState>

  );
}

export default App;
