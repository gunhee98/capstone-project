import React, { useState } from "react";
import "./style.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { auth } from './firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function SignupForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 처리를 위한 코드

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal__content">
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="full-name">성명</label>
        <input
          id="full-name"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
          required
        />

        <label htmlFor="username">사용자 이름</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label htmlFor="confirm-password">비밀번호 확인</label>
        <input
          id="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <div>
          <button type="submit">가입</button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
