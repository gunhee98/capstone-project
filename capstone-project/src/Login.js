import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUnlock } from "@fortawesome/free-solid-svg-icons";
const Login = () => {
  const Contain = styled.div`
    min-height: auto;
    margin-top: 20vw;
    position: relative;

    img {
      width: 100%;
      height: 27vw;
    }
  `;
  const Logo = styled.div`
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
    width: 30vw;
    height: 30vw;
    background-color: white;
    border-radius: 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 2vw;
      width: 20vw;
      height: 4vw;
    }
    hr {
      margin-top: 1vw;
      border: 1px solid rgba(100, 100, 100, 0.1);
      width: 80%;
    }

    p {
      color: #69b030;
      font-size: 2vw;
      font-weight: 700;
      width: 80%;
      text-align: left;
      margin: 2vw 0vw 1vw 0vw;
    }
    form {
      position: relative;
      width: 80%;

      input {
        background-color: rgba(0, 0, 0, 0.1);
        border: none;
        width: 100%;
        height: 3vw;
        border-radius: 0.5vw;
        margin-bottom: 0.4vw;
      }

      button {
        width: 100%;
        height: 3vw;
        background-color: #69b030;
        border: none;
        border-radius: 0.5vw;
        color: white;
        font-weight: 700;
      }
    }
    div {
      height: 5vw;
      margin-top: 3vw;
      border-radius: 0 0 1.5em 1.5em;
      background-color: #252553;
      width: 100%;
      text-align: center;
      padding: 2vw;
      span {
        color: white;
        margin-left: 2vw;
      }
    }
  `;

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

        <form>
          <input type="text" placeholder="아이디" />

          <FontAwesomeIcon
            icon={faUser}
            size="xl"
            style={{
              position: "absolute",
              left: "22vw",
              top: "0.7vw",
              opacity: 0.2,
            }}
          />
          <input type="text" placeholder="비밀번호" />
          <FontAwesomeIcon
            icon={faUnlock}
            size="xl"
            style={{
              position: "absolute",
              left: "22vw",
              top: "4vw",
              opacity: 0.2,
            }}
          />
          <button>로그인</button>
        </form>
        <div>
          <span>아이디 찾기</span>
          <span>비밀번호 초기화</span>
        </div>
      </LoingForm>
    </Contain>
  );
};
export default Login;
