import Main from "./calendar/Main";
import styled from "styled-components";
const Home = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <Container>
      <Main />
    </Container>
  );
};
export default Home;
