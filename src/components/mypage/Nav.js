import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  // z-index: 1;
  width: 5%;
  ul {
    margin-top: 2rem;
    li {
      display: block;
      width: 4rem;
      margin-bottom: .2rem;
      padding: 1rem;
      background: #fff;
      border: 3px inset #99C5FF;
      border-right-radius: 10px;
      color: #000;
      font-size: 1.2rem;
      text-align: center;
      
      
      &:hover {
        background: #99C5FF;
        color: #fff;
      }
    }
  }
`;

function MainMenu() {
  return (
    <Nav>
      <ul>
        <Link to='/mypage/myinfo'>
          <li>내정보</li>
        </Link>
        <Link to='/mypage/mydiary'>
          <li>일기장</li>
        </Link>
      </ul>
    </Nav>
  );
}

export default MainMenu;
