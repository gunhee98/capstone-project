import React from "react";
import { useState } from "react";
import styled from "styled-components";
const Contain = styled.div`
  width: 80%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  border: 1px solid black;
  select {
    margin-right: 4px;
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: white;
    padding: 8px 25px;
    margin: 10px;
    & > div:first-child {
      display: flex;
      align-items: center;
      & > div:first-child {
        margin-right: 10px;
      }
    }
    & > div:nth-child(2) {
      display: flex;
      align-items: center;
      & > div:first-child {
        margin-right: 10px;
      }
      & > div:nth-child(2) {
        border: 1px solid black;
        border-radius: 3px;
        padding: 3px;
        margin-right: 4px;
        width: 100px;
      }
      & > div:nth-child(3) {
        border: 1px solid black;
        border-radius: 3px;
        padding: 3px;
        margin-right: 4px;
        width: 100px;
      }
    }
    & > div:nth-child(3) {
      border-radius: 3px;
      border: 1px solid black;
      padding: 3px;
      background-color: #252553;
      color: white;
      opacity: 0.5;
      &:hover {
        cursor: pointer;
      }
    }
  }
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 7%;
    background-color: #252553;
    color: whitesmoke;
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: 2px;
  }
  & > div:nth-child(3) {
    min-height: 30%;
    max-height: 40%;
    height: 40%;
    overflow-y: auto;
    background-color: white;
    margin: 10px;
    border: 1px solid black;
  }
  table {
    width: 100%;
    border: 1px solid #444444;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #444444;
    text-align: center;
  }
`;
const Seongjeog = () => {
  const [btn, setBtn] = useState(false);
  const onClick = () => {
    setBtn(true);
  };
  const arr = [];
  const info = {
    no: 1,
    year: 2017,
    semester: 2017,
    subjectCode: "a12345",
    subject: "캡스톤",
    completion: "교양선택",
    credit: 3,
    achievement: 3.5,
  };
  for (let i = 0; i <= 250; i++) {
    arr.push({ ...info, no: info.no + i });
  }
  const Contain = styled.div`
    width: 80%;
    height: 100%;
    padding: 1rem;
    margin-right: auto;
    margin-left: auto;
    & > div:first-child {
      text-align: center;
      width: 100%;
      height: 5%;
      background-color: #252553;
      color: whitesmoke;
      font-size: 1.2rem;
      opacity: 0.9;
    }
    & > div:nth-child(2) {
      min-height: 30%;
      max-height: 80%;
      overflow-y: auto;
    }
    table {
      width: 100%;
      border: 1px solid #444444;
      border-collapse: collapse;
    }
    th,
    td {
      border: 1px solid #444444;
      text-align: center;
    }
  `;
  
  return (
    <Contain>
      <div>성적 증명서</div>
      <div>
        <div>
          <div>년도/학기</div>
          <div>
            <select>
              <option value="2023">2023</option>
            </select>
            <select>
              <option value="1">1학기</option>
            </select>
          </div>
        </div>
        <div>
          <div>학번/성명</div>
          <div>201735006</div>
          <div>김건희</div>
        </div>
        <div onClick={onClick}>조회</div>
      </div>
      <div>
        <table>
          <tr>
            <th>No</th>
            <th>년도</th>
            <th>학기</th>
            <th>교과목코드</th>
            <th>교과목명</th>
            <th>이수구분</th>
            <th>학점</th>
            <th>성적등급</th>
          </tr>
          {btn === true
            ? arr.map((info) => (
                <tr>
                  <td>{info.no}</td>
                  <td>{info.year}</td>
                  <td>{info.semester}</td>
                  <td>{info.subjectCode}</td>
                  <td>{info.subject}</td>
                  <td>{info.completion}</td>
                  <td>{info.credit}</td>
                  <td>{info.achievement}</td>
                </tr>
              ))
            : null}
        </table>
      </div>
    </Contain>
  );
};

export default Seongjeog;
