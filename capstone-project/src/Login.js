import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate  } from "react-router-dom";
import Signup2 from "./Signup2.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { auth } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Logins from "./Logins.js";

const Contain = styled.div`
  margin-top: 20rem;
  position: relative;

  img {
    width: 100%;
    height: 26rem;
  }
`;
const Logo = styled.div`
  @media (max-width: 1000px) {
    & {
      display: none;
    }
  }
  position: absolute;
  top: -8vw;
  width: 30vw;
  margin-left: 15vw;
  h1:nth-child(1) {
    color: #69b030;
  }
  h1 {
    color: white;
    font-size: 6vw;
    margin: 0;
  }
`;
const LoingForm = styled.div`
  position: absolute;
  top: -8vw;
  right: 13vw;
  width: 30rem;
  height: 30rem;
  background-color: white;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 2rem;
    width: 20rem;
    height: 4rem;
  }
  hr {
    margin-top: 1rem;
    border: 1px solid rgba(100, 100, 100, 0.1);
    width: 80%;
  }
  p {
    color: #69b030;
    font-size: 2rem;
    font-weight: 700;
    width: 80%;
    text-align: left;
    margin: 2rem 0rem 1rem 0rem;
  }
  form {
    position: relative;
    width: 80%;
    input {
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
      width: 100%;
      height: 3rem;
      border-radius: 0.5rem;
      margin-bottom: 0.4rem;
    }
    button {
      width: 100%;
      height: 3rem;
      background-color: #69b030;
      border: none;
      border-radius: 0.5rem;
      color: white;
      font-weight: 700;
      cursor: pointer;
    }
  }
  div {
    height: 5rem;
    margin-top: 3rem;
    border-radius: 0 0 1.5rem 1.5rem;
    background-color: #252553;
    width: 100%;
    text-align: center;
    padding: 2rem;
    span {
      color: white;
      margin-left: 2rem;
      cursor: pointer;
    }
  }
`;

const Login = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


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
        alert('성공')
        console.log(user);
        navigate('/main');
      })
      .catch((error) => {
        // 로그인 실패
        console.log("errorMessage");
        alert('실패')
      });
  };

  return (
    <Contain>
      <img alt="이미지" src="https://portal.skhu.ac.kr/images/sso/sso_bg.jpg" />
      <Logo>
        <h1>Single</h1>
        <h1>Sign-on</h1>
      </Logo>
      <LoingForm>
        <img
          alt="이미지"
          src="https://portal.skhu.ac.kr/upload/SMN/SMN_DEFAULTINFO/logoImg2/LOGO2.svg"
        />
        <hr />
        <p>통합로그인</p>

        <form onSubmit={handleSubmit}> 
          <input
            type="text"
            placeholder="아이디"
            value={email}
            onChange={handleEmailChange}
          />

          <FontAwesomeIcon
            icon={faUser}
            size="xl"
            style={{
              position: "absolute",
              left: "22rem",
              top: "0.7rem",
              opacity: 0.2,
            }}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <FontAwesomeIcon
            icon={faUnlock}
            size="xl"
            style={{
              position: "absolute",
              left: "22rem",
              top: "4rem",
              opacity: 0.2,
            }}
          />
          <button type="submit">로그인</button>

        </form>
        <div>
          <span
            onClick={() => {
              setModal(!modal);
            }}
          >
            회원가입
          </span>
        </div>
      </LoingForm>

      <>
        {modal === true ? (
          <Signup2 modal={modal} setModal={setModal}></Signup2>
        ) : null}
      </>
    </Contain>
  );
};
export default Login;
