import React from "react";
import styled from "styled-components";
const Dashboard = () => {
  const Contain = styled.div`
    width: 100%;
    height: 100vh;

    & > h1 {
      margin: 0;
      padding: 1rem;
    }
  `;

  return (
    <Contain>
      <h1>Dashboard</h1>
    </Contain>
  );
};

export default Dashboard;
