import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import Home from './Components/Home';
// import {
//   Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode,setMode] = useState("light")
  const [alert,setAlert] = useState(null);

  const otherTheme = (colorName) =>{
    document.body.style.backgroundColor=`${colorName}`;
   
  }

  const handleAlert = (message,type)=>{
    setAlert({
      message: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
 
  const handleMode = () =>{

    if(mode==="light"){
      setMode("dark");
      handleAlert("Dark Mode Enabled","success");
      document.body.style.backgroundColor='#031221';
      document.title="TextUtil-DarkMode";
    }
    else{
      setMode("light");
      handleAlert("Light Mode Enabled","success");
      document.body.style.backgroundColor='white';
      document.title="TextUtil-LightMode";
    }

  }

  

  return (
    <>
    <Navbar title={"Umer's React Web"} mode={mode} handleMode={handleMode} otherTheme={otherTheme} />
    <Alert alert={alert}/>
    <div className="container">
    {/* <Home/> */}
    {/* <Routes>
          <Route strict path="/About" element={<About/>}/>
          {/* <Route strict path="/Home" element={<Home/>}/> */}
          {/* <Route strict path="/" element={<TextForm heading= "Enter your text to analyze" mode={mode}  handleAlert={handleAlert}/>}/>
          <Route strict path="/TextForm" element={<TextForm heading= "Enter your text to analyze" mode={mode}  handleAlert={handleAlert}/>}/>
    </Routes>  */}

    <TextForm heading= "Enter your text to analyze" mode={mode}  handleAlert={handleAlert}/>
    </div>

    </>
    
  );
}

export default App;
