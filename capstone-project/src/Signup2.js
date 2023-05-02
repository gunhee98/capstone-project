import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { auth } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./style.css";
import Login from "./Login.js";

function Signup2(props) {
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    props.setModal(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // 로그인 성공
        const user = userCredential.user;
        alert("회원가입에 성공하였습니다.");

        // const db = firebase.firestore();
        // db.collection("users").add({
        //   name: name,
        //   email: email,
        //   phoneNumber: phoneNumber
        // })
        // .then((docRef) => {
        //   console.log("Document written with ID: ", docRef.id);
        // })
        // .catch((error) => {
        //   console.error("Error adding document: ", error);
        // });
      })
      .catch((error) => {
        alert("회원가입에 실패하였습니다.");
      });
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal__content">
        <div className="container">
          <h3>회원가입</h3>
          <span className="right item" onClick={handleClose}>
            닫기
          </span>
        </div>
        <div>
          <label>
            이메일:
            <input className="right" type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            비밀번호:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>

        {/* <label>
          이름:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          핸드폰 번호:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label> */}
        <button className = "right"type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Signup2;
