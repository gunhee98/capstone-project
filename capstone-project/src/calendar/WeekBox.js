import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background-color: gray;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WeekBox = ({ weekName }) => {
  return (
    <Container>
      <p>{weekName}</p>
    </Container>
  );
};

export default WeekBox;
