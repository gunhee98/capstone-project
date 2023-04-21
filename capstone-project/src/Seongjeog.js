import React from "react";
import styled from "styled-components";

const Seongjeog = () => {
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
          {arr.map((info) => (
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
          ))}
        </table>
      </div>
    </Contain>
  );
};

export default Seongjeog;
