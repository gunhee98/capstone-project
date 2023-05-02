import Main from "./calendar/Main";
import styled from "styled-components";
import TodoContain from "./todo/TodoContain";
import { useState } from "react";
import Chat from "./Chat.js"
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
`;
const Home = () => {
  const [nowDate, setNowDate] = useState(new Date());
  const [clickedDate, setClickedDate] = useState();
  const [days, setDay] = useState();
  return (
    <Container>
      <Main
        setDay={setDay}
        nowDate={nowDate}
        setNowDate={setNowDate}
        clickedDate={clickedDate}
        setClickedDate={setClickedDate}
      />
      <TodoContain days={days} nowDate={nowDate} />
      <Chat></Chat>
    </Container>
  );
};
export default Home;
