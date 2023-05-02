import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth } from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function Logins() {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 로그인 성공
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        // 로그인 실패
        // const errorCode = error.code;
        // const errorMessage = error.message;
        console.log('errorMessage');
      });
  };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <label>
  //         이메일:
  //         <input type="email" value={email} onChange={handleEmailChange} />
  //       </label>
  //       <label>
  //         비밀번호:
  //         <input type="password" value={password} onChange={handlePasswordChange} />
  //       </label>
  //       <button type="submit">로그인</button>
  //     </form>
  //   </div> 
  // );
}


export default Logins;
