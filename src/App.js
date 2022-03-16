import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from "./pages/home";
import {About} from "./pages/About";
import React from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import AlertState from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FirebaseState";

function App() {
  return (

          <FirebaseState>
          <AlertState>
          <BrowserRouter>
              <Navbar />
              <div className={"container pt-4"}>
                  <Alert />
                  <Routes>
                        <Route exact={"true"} path="/" element={<Home />}/>
                        <Route exact={"true"} path="/about" element={<About />}/>

                  </Routes>


              </div>

          </BrowserRouter>
           </AlertState>
          </FirebaseState>

  );
}

export default App;
