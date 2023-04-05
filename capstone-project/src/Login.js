import styled from "styled-components";
const Login = () => {
  const Contain = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 20vw;
    position: relative;
    div {
      position: absolute;
      width: 50vw;
      top: -8vw;
      margin-left: 15vw;
      h1:nth-child(1) {
        color: #69b030;
      }
      h1 {
        color: white;
        font-size: 6vw;
        margin: 0;
      }
    }
    img {
      width: 100%;
      height: 27vw;
    }
    form {
      position: absolute;
      top: -8vw;
      right: 13vw;
      width: 29vw;
      height: 30vw;
      background-color: white;
      border-radius: 1.5em;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        margin-top: 1vw;
        width: 20vw;
        height: 4vw;
      }
      hr {
        border: 1px solid rgba(100, 100, 100, 0.1);
        width: 80%;
      }
      input {
        width: 80%;
        margin-bottom: 0.5vw;
      }
      p {
        width: 80%;
        text-align: left;
      }
    }
  `;

  return (
    <Contain>
      <img alt="이미지" src="https://portal.skhu.ac.kr/images/sso/sso_bg.jpg" />
      <div>
        <h1>Single</h1>
        <h1>Sign-on</h1>
      </div>
      <form>
        <img
          alt="이미지"
          src="https://portal.skhu.ac.kr/upload/SMN/SMN_DEFAULTINFO/logoImg2/LOGO2.svg"
        />
        <hr />
        <p>통합 로그인</p>
        <input type="text" />
        <input type="password" />
      </form>
    </Contain>
  );
};
export default Login;
