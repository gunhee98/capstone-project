import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import Home from "./calendar/Main";
import { Link } from "react-router-dom";
const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/main",
      name: "Home",
    },
    {
      path: "/main/seongjeog",
      name: "Seongjeog",
    },
  ];
  const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  `;

  const Content = styled.div`
    width: 100%;
    height: 100vh;
    & > div:first-child {
      display: flex;
      align-items: center;
      height: 4rem;
      border-bottom: 2px solid #252553;
      & > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 100%;
        color: white;
        background-color: #252553;
        opacity: 0.9;
      }
      & > div:nth-child(2) {
        display: flex;
        align-items: center;
        margin-left: 9%;
        white-space: nowrap;
      }
      & > div:nth-child(3) {
        margin-left: 48%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        white-space: nowrap;
        & > p {
          margin: 0;
          margin-bottom: 3px;
          font-weight: 700;
          &:first-child {
            font-size: 13px;
            color: rgba(0, 0, 0, 0.5);
          }
        }
      }
      & > div:nth-child(4) {
        height: 80%;
        display: flex;
        align-items: center;
        border: 1px solid black;
        margin-left: 1%;
      }
    }
    & > main {
      width: 100%;
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
          <div>
            <h1>종합정보시스템</h1>
          </div>
          <div>
            <p>IT융합자율학부</p>
            <p>김건희</p>
          </div>
          <div>
            <Link to="/">
              <FiLogOut size="30" />
            </Link>
          </div>
        </div>
        <main>{menuItem.path === "/main" ? <Home /> : <Outlet />}</main>
      </Content>
    </Container>
  );
};

export default Main;
