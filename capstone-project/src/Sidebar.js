import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import React, { Children, useState } from "react";
import { NavLink } from "react-router-dom";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
    },
    {
      path: "/seongjeog",
      name: "Seongjeog",
    },
  ];
  const Container = styled.div`
    display: flex;
  `;
  const Side = styled.div`
    background: whitesmoke;
    height: 100vh;
    width: ${isOpen ? "0px" : "300px"};
    transition: all 0.5s;
    & > div {
      height: 5rem;
      background-color: #69b030;
      padding: 0.5rem;
      & > img {
        width: ${isOpen ? "0px" : "250px"};
      }
    }
  `;
  const NavStyle = styled(NavLink)`
    display: flex;
    flex-direction: column;
    color: black;

    padding: 10px 15px;

    & > div {
      display: ${isOpen ? "none" : "block"};
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    &:hover {
      background-color: black;
      color: white;
      transition: all 0.5s;
    }
  `;
  const Content = styled.div`
    width: 100%;
    height: 100vh;
    & > div:first-child {
      height: 5rem;
      background-color: #69b030;

      & > div {
        background-color: yellow;
        width: 30px;
        height: 50px;
      }
    }
    & > main {
      height: 100%;
    }
  `;

  return (
    <Container>
      <Side>
        <div>
          <img src="https://portal.skhu.ac.kr/upload/SMN/SMN_DEFAULTINFO/logoImg2/LOGO2.svg"></img>
        </div>
        {menuItem.map((item, index) => (
          <NavStyle to={item.path} key={index}>
            <div>{item.name}</div>
          </NavStyle>
        ))}
      </Side>
      <Content>
        <div>
          <div>
            <FaBars onClick={toggle} />
          </div>
        </div>
        <main>{children}</main>
      </Content>
    </Container>
  );
};
export default Sidebar;
