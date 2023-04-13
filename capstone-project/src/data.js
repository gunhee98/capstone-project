import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


function Data() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    
    firebase.initializeApp({
      projectId: "capstone-d844e",
    });

    const db = firebase.firestore();

    
    db.collection("privacy").get().then((querySnapshot) => {
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setData(fetchedData);
    });
  }, []);

  const handleAddData = () => {
   
    firebase.initializeApp({
      projectId: "capstone-d844e",
    });


    const db = firebase.firestore();

    db.collection("privacy").add({
      email: email,
      name: name,
    }).then(() => {
      console.log("Data added successfully!");
    }).catch((error) => {
      console.error("Error adding data: ", error);
    });
  };

  return (
    <div>
      <h1>Firestore Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddData}>Add Data</button>
      </div>
    </div>
  );
}


export default Data;
