
import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import TextForm from './TextForm';
import Alert from './Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg: message,
    type: type
  })
setTimeout(() => {
    setAlert(null);
  }, 1000);
}

const toggleMode = ()=>{
  if(mode==='light'){
   setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Darkmode has been enabled","success"); 
  }
else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Lightmode has been enabled","success"); 
}
}

  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
          
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
   
   </Routes>

    </div>
    </Router>
    </> 
  );
}

export default App;
