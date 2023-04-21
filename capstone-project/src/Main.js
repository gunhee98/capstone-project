import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Dashboard from "./Dashboard";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/main",
      name: "Dashboard",
    },
    {
      path: "/main/seongjeog",
      name: "Seongjeog",
    },
  ];
  const Container = styled.div`
    display: flex;
  `;

  const Content = styled.div`
    width: 100%;
    height: 100vh;
    & > div:first-child {
      height: 4rem;
      border-bottom: 2px solid #252553;
      & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 100%;
        color: white;
        background-color: #252553;
      }
    }
    & > main {
      height: 100%;
    }
  `;

  return (
    <Container>
      <Sidebar isOpen={isOpen} menuItem={menuItem} />
      <Content>
        <div>
          <div>
            {isOpen ? (
              <HiChevronRight size="35" onClick={toggle} />
            ) : (
              <HiChevronLeft size="35" onClick={toggle} />
            )}
          </div>
        </div>
        <main>{menuItem.path === "/main" ? <Dashboard /> : <Outlet />}</main>
      </Content>
    </Container>
  );
};
export default Main;
