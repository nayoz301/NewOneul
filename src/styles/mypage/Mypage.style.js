import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--thick-font);
`;

export const FormContainer = styled.form`
  font-size: 2rem;
  width: 75vmax;
  // min-height: 50%;
  margin: 10rem 0 1rem 0;
  // background-color: #DBC5CD;
  color: #000;
  font-weight: bold;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContentContainer = styled.div`
  width: 70vmax;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;


export const ContentTitle = styled.h1`
  width: 10vmax;
  margin-left: 12rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserInfoForm = styled.div`
  width: 30vmax;
  height: 80vh;
  border: 2px solid var(--primary-color);
  border-radius: .7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFFBF0;
  // margin-top: 3rem;
  color: #000;
`;

export const Frame = styled.div`
  width: 95%;
  height: 95%;
  border: .5rem groove #99C5FF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserContentForm = styled.div`
width: 37vmax;
height: 80vh;
border: 2px solid var(--primary-color);
border-radius: .7rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFFBF0;
// margin-top: 3rem;
margin-left: 1rem;
color: #000;
`;

export const UserContent = styled.div`
  display: flex;
`;

export const Info = styled.div`
  font-size: 2.5rem;
  margin: 1rem;
  margin-top: 3rem;
  max-width: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  border-bottom: 3px groove #99C5FF;
  corlor: #000;
`;

export const Input = styled.input`
font-family: var(--thick-font);
  font-size: 1.5rem;
  border: none;
  border-bottom:  3px groove #99C5FF;
  width: 18rem;
  margin-top: 2rem;
  padding-left: 1rem;
  display: flex;
  background-color: #FFFBF0;

  &:focus {
    color: none;
    outline: none;
  }
`;

export const Button = styled.button`
font-family: var(--thick-font);
font-size: 1.2rem;
font-weight: 500;
width: 10rem;
height: 2.5rem;
background-color: #DB7DC5;
color: #fff;
padding: .5rem;
margin-top: 1rem;
border: none;
border-radius: .7rem;

&:hover {
  background: #DB18B1;
}
`;