import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


function App() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    // Firebase 프로젝트에 연결합니다.
    firebase.initializeApp({
      projectId: "capstone-d844e",
    });

    // Firestore 인스턴스를 생성합니다.
    const db = firebase.firestore();

    // Firestore 데이터를 가져와서 state에 저장합니다.
    db.collection("privacy").get().then((querySnapshot) => {
      const fetchedData = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });
      setData(fetchedData);
    });
  }, []);

  const handleAddData = () => {
    // Firebase 프로젝트에 연결합니다.
    firebase.initializeApp({
      projectId: "capstone-d844e",
    });

    // Firestore 인스턴스를 생성합니다.
    const db = firebase.firestore();

    // 데이터를 추가합니다.
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


export default App;
