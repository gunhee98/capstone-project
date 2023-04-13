import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Data from './data.js'

function App() {
  return (
    <Data />
  );
}

export default App;
