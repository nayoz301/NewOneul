import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--thick-font);
  background-color: var(--primary-color);
`;

export const PageName = styled.form`
  font-size: 2rem;
  min-width: 80%;
  height: 50rem;
  margin: 10rem 0 1rem 0;
  // border: 1px solid red;
  background-color: #D4CDA3;
  color: #000;
  font-weight: bold;
  padding: 1rem;
`;

export const FormContainer = styled.div`
  width: 95%;
  height: 43rem;
  border: 1.5px dashed #fff;
  margin: 2rem;
  padding: .3rem 2rem;
  display: flex;
  background-color: #DBD9DB;
  // box-shadow: 5px 5px lightgray;

`;

export const ImgContainer = styled.div`
  min-width: 30rem;
  height: 38rem;
  border: 2px solid var(--primary-color);
  border-radius: .7rem;
  display: block;
  justify-content: center;
  align-item: center;
  background-color: #c1b297;
  margin-top: 3rem;
  color: #000;
`;

export const UserInfoForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 38rem;
  margin-left: 1rem;
  border: 2px solid var(--primary-color);
  border-radius: .7rem;
  padding-left: 1rem;
  background-color: #c1b297;
  margin-top: 3rem;
`;

export const Info = styled.div`
  font-size: 2rem;
  margin: 2rem;
  margin-bottom: 1.5rem;
  width: 11rem;
  display: block;
  flex-direction: column;
  border-bottom: 2px solid #DBD9DB;
  corlor: #000;
`;

export const Input = styled.input`
font-family: var(--thick-font);
  font-size: 1.6rem;
  border: none;
  border-bottom: 2px solid #DBD9DB;
  width: 25rem;
  margin-left: 2rem;
  margin-bottom: 1rem;
  display: block;
  background-color: #c1b297;

  &:focus {
    color: none;
    outline: none;
  }
`;

export const ModifyBtn = styled.button`
  font-family: var(--primary-font);
  font-size: 1.5rem;
  font-weight: bold;
  width: 8rem;
  height: 2.5rem;
  margin-left: 18rem;
  display: felx;
  justify-content: center;
  background-color: #D4CDA3;
  color: #000;
  border: 1px solid #D4CDA3;
  border-radius: .7rem;

  &:hover {
    background: #DBD086;
  }
`;

// export const SaveBtn = styled.button`
//   font-family: var(--primary-font);
//   font-size: 1.8rem;
//   font-weight: bold;
//   dispaly: flex;
//   position: relative;
//   align-item: center;
//   width: 10rem;
//   min-height: 3rem;
//   margin: 1rem;
//   background-color: #DBD9DB;
//   color: #fff;
//   border: 1px solid #DB7DC5;
//   border-radius: .7rem;

//   &:hover {
//     background: #DB18B1;
//   }
// `;