import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Sidebar = ({ isOpen, menuItem }) => {
  const Side = styled.div`
    background: whitesmoke;
    height: 100vh;
    width: ${isOpen ? "0px" : "300px"};
    transition: all 0.5s;
    border-right: 2px solid #252553;

    & > div {
      height: 5rem;

      padding: 0.5rem;
      & > img {
        width: ${isOpen ? "0px" : "250px"};
      }
    }
  `;
  const NavStyle = styled(NavLink)`
    display: flex;
    flex-direction: column;
    color: #252553;

    padding: 10px 15px;

    & > div {
      display: ${isOpen ? "none" : "block"};
      text-align: center;
      font-size: 1.5rem;
      font-weight: 700;
    }
    &:hover {
      background-color: #252553;
      color: white;
      transition: all 0.5s;
    }
  `;
  return (
    <Side>
      <div>
        <img src="https://portal.skhu.ac.kr/upload/SMN/SMN_DEFAULTINFO/logoImg2/LOGO2.svg"></img>
      </div>
      {menuItem.map((item) => (
        <NavStyle to={item.path} key={item.name}>
          <div>{item.name}</div>
        </NavStyle>
      ))}
    </Side>
  );
};

export default Sidebar;
