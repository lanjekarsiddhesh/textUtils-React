
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const changeMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor='#fff'
  }else{
    setMode('dark')
    document.body.style.backgroundColor='#112D4E'
  }}
  return (
  
    
    <Router>
    <Navbar titleText="TextUtils" titleLink="/" mode={mode} enableMode={changeMode} />
    
    <div className='container my-3'>
    <Routes>
          <Route path="/about" element={<About mode={mode} /> } />
          <Route path="/" element={<Textarea heading="Enter the text to analyze" mode={mode} />} />
        </Routes>
    
    </div>
    </Router>
   
  );
}

export default App;
