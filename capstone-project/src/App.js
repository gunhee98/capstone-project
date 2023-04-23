import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Data from './data.js'
import "normalize.css";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seongjeog from "./Seongjeog";
import Logins from "./Logins"
import SignupModal from './SignUp.js';
import './style.css'


function App() {
  return (
    <SignupModal/>
    // <BrowserRouter>
    //   <Sidebar>
    //     <Routes>
    //       <Route path="/seongjeog" element={<Seongjeog />} />
    //     </Routes>
    //   </Sidebar>
    // </BrowserRouter>
  );
}

export default App;
