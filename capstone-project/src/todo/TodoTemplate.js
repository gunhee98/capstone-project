import styled from "styled-components";

const Todo = styled.div`
  width: 512px;

  border-radius: 4px;
  overflow: hidden;
  & > div:first-child {
    background: #252553;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:last-child {
    background-color: white;
  }
`;
const TodoTemplate = ({ children, nowDate, days }) => {
  const dateString = nowDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Todo>
      <div>{dateString}</div>
      <div>{children}</div>
    </Todo>
  );
};
export default TodoTemplate;
