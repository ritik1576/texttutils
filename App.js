import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041631";
      showalert("Dark mode has been enable", "succes");
      // document.title = "Textutils - dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enable", "succes");
      // document.title = "Textutils - light mode";
    }
  };
  return (
    <>
 
      <Navbar aboutText="About" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}
      <Alert Alert={alert} />
      <div className="container my-3">
        
          
            <Textform
              showalert={showalert}
              heading=" Enter the text to analyze"
              mode={mode}
            />
          <About/>
      </div>
   
    </>
  );
}

export default App;
