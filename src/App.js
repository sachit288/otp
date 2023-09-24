import './App.css';
import SignUp from './Views/SignUp';
import Otp from './Views/Otp';
import Success from './Views/Success';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './Api/Api'

function App() {

  const [number, setNumber] = useState('');
  
  const navigate = useNavigate();

  return (
    
    <div className="App">
      
      <Routes>
        <Route path = "/" element={<SignUp number={number} setNumber={setNumber} navigate={navigate}/>}/>
        <Route path = "/otp" element={<Otp number={number} navigate={navigate} setNumber={setNumber}/>}/>
        <Route path = "/success" element={<Success/>}/>
      </Routes>
    </div>
  );
}

export default App;
