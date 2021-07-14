import styled from "styled-components";


export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  flex-wrap: wrap;
  jutify-content: center;
  font-family: var(--thick-font);
  `;

export const DiaryContainer = styled.div`
  min-width: 20%;
  height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-item: center;
  flex-wrap: wrap;
  font-family: var(--thick-font);
  margin-top: 2rem;
  `;

export const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 8rem;
  `;

export const UserContentForm = styled.div`
  width: 37vmax;
  height: 85vh;
  border: 2px solid var(--primary-color);
  border-radius: .7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  margin-bottom: 2.5rem;
  color: #000;
`;

export const Button = styled.button`
  font-family: var(--thick-font);
  font-size: 1.8rem;
  font-weight: 500;
  width: 10rem;
  height: 4rem;
  background-color: #5999FF;
  color: #fff;
  padding: .5rem;
  border: none;
  border-radius: .7rem;

  &:hover {
    background: #1C82FF;
  }
`;

// export const DiaryWrite = styled.button`
//   padding: 1.2rem 4rem;
//   font-size: 1.7rem;
//   font-family: var(--thick-font);
//   border-radius: 0rem;
//   outline: none;
//   transition: all 0.35s;
//   & svg {
//     width: 19px;
//     height: 19px;
//     color: var(--black-color);
//     margin-left: 1rem;
//   }

//   &:hover {
//     border-radius: 3rem;
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   }
// `;