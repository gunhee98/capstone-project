import React from "react";
import styled, { css } from "styled-components";
const Container = styled.div`
  border: 1px solid gray;
  
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: gray;
  }
  p {
    padding: 5px;
    font-weight: ${({ sameMonth }) => (sameMonth ? `700` : `300`)};
    ${({ sameDay }) =>
      sameDay
        ? css`
            
            color: white;
            background-color:rgba(0, 0, 0, 0.3);
            border-radius: 5px;
          `
        : css``}
    ${({ clickDay }) =>
      clickDay
        ? css`
            border: 1px solid skyblue;
          `
        : css``}
  }
`;
const AllDay = ({
  setDay,
  day,
  nowDate,
  setNowDate,
  clickedDate,
  setClickedDate,
}) => {
  const nowTime = new Date();

  const sameMonth = nowDate.getMonth() === day.getMonth();
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();
  const clickDay = clickedDate
    ? clickedDate.getFullYear() === day.getFullYear() &&
      clickedDate.getMonth() === day.getMonth() &&
      clickedDate.getDate() === day.getDate()
    : false;

  const clickDate = () => {
    setClickedDate(day);
    const date = new Date(nowDate.getTime());
    date.setDate(day.getDate());
    setNowDate(date);
  };
  return (
    <Container
      onClick={() => clickDate()}
      sameMonth={sameMonth}
      sameDay={sameDay}
      clickDay={clickDay}
    >
      <p>{day.getDate()}</p>
    </Container>
  );
};

export default AllDay;
