import styled from "styled-components";
import { flexSpaceBtw } from "../global.style";

export const MainHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 6vh;
  background: white;
  z-index: 200;
  background: #fffdfa;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
`;

export const HeaderWrapper = styled.div`
  ${flexSpaceBtw}
  width: 80%;
  min-height: 100%;
  margin: 0 auto;
  font-family: var(--thick-font);

  & h1 {
    font-size: 2.4rem;
  }

  & button {
    padding: 0.8rem 1.4rem;
    font-family: var(--thick-font);
    font-size: 1.5rem;
    border-radius: 3px;
    border-color: grey;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px; */
    /* box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 30px; */
    /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px; */
    /* border: none; */
    /* border-bottom: 1px solid grey; */

    /* &:hover{
      
    } */
  }
`;
