import React, { useState } from "react";
import ControlDate from "./ControlDate";
import DateBox from "./DateBox";
import styled from "styled-components";
const Container = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;
const Main = ({ setDay, nowDate, setNowDate, clickedDate, setClickedDate }) => {
  return (
    <Container>
      <ControlDate nowDate={nowDate} setNowDate={setNowDate} />
      <DateBox
        setDay={setDay}
        nowDate={nowDate}
        setNowDate={setNowDate}
        clickedDate={clickedDate}
        setClickedDate={setClickedDate}
      />
    </Container>
  );
};

export default Main;
