import styled from "styled-components";
import WeekBox from "./WeekBox";
import AllDay from "./AllDay";
const Container = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: white;
`;
const monthList = (nowDate) => {
  const nowYear = nowDate.getFullYear();
  const nowMonth = nowDate.getMonth();

  const dayOneWeek = new Date(nowYear, nowMonth, 1).getDay();
  const dayLastWeek = new Date(nowYear, nowMonth + 1, 0).getDay();
  const result = [];
  const prevMonthEnd = new Date(nowYear, nowMonth, 0).getDate();
  const nowMonthEnd = new Date(nowYear, nowMonth + 1, 0).getDate();
  for (let i = dayOneWeek - 1; i >= 0; i--) {
    result.push(new Date(nowYear, nowMonth - 1, prevMonthEnd - i));
  }

  for (let i = 1; i <= nowMonthEnd; i++) {
    result.push(new Date(nowYear, nowMonth, i));
  }

  for (let i = 1; i < 7 - dayLastWeek; i++) {
    result.push(new Date(nowYear, nowMonth + 1, i));
  }
  console.log(result);
  return result;
};
const DateBox = ({
  setDay,
  nowDate,
  setNowDate,
  clickedDate,
  setClickedDate,
}) => {
  const allDay = monthList(nowDate);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <Container>
      {weeks.map((week) => {
        return <WeekBox key={week} weekName={week} />;
      })}
      {allDay.map((day) => {
        return (
          <AllDay
            setDay={setDay}
            key={day}
            day={day}
            nowDate={nowDate}
            setNowDate={setNowDate}
            clickedDate={clickedDate}
            setClickedDate={setClickedDate}
          />
        );
      })}
    </Container>
  );
};

export default DateBox;
