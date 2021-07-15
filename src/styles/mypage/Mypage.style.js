import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--thick-font);
`;

export const FormContainer = styled.form`
  font-size: 2rem;
  width: 75vmax;
  height: 100%;
  margin: 10rem 0 1rem 0;
  border-radius: 1rem;
  color: #000;
  font-weight: bold;
  padding: 1rem;
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;


export const ContentTitle = styled.div`
  width: 25vmax;
  margin-top: 1rem;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-item: center;
  @media screen and (max-width: 1200px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const UserInfoForm = styled.div`
width: 37vmax;
  height: 85vh;
  border: 2px solid var(--primary-color);
  border-radius: .7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #fff;
  color: #000;
  @media screen and (max-width: 768px) {
    width: 37vmax;
    height: 75vh;
    box-shadow: 2px 5px 5px #D3CCDB;
    flex-direction: column;
    position: absolute;
    width: 37vmax;
    left: 10.5vmax;
    top: 11.045rem;
  }
  box-shadow: 1px 5px 5px #D3CCDB;
`;

export const Frame = styled.div`
  width: 95%;
  height: 95%;
  border: .5rem groove #99C5FF;
  border-radius: .7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserContentForm = styled.div`
width: 37vmax;
height: 85vh;
border: 2px solid var(--primary-color);
border-radius: .7rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
padding-top: 2.5rem;
margin-left: 1rem;
box-shadow: 10px 5px 5px #D3CCDB;

@media screen and (max-width: 1024px) {
  width: 35vmax;
  top: 11.045rem;
}
@media screen and (max-width: 930px) {
  width: 35vmax;
}
@media screen and (max-width: 768px) {
  width: 37vmax;
  height: 75vh;
}
`;

export const UserContent = styled.div`
  display: flex;
`;

export const Info = styled.div`
  font-size: 2.5rem;
  margin: 1rem;
  margin-top: 2rem;
  max-width: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  border-bottom: 3px groove #99C5FF;
  corlor: #000;
  
  @media screen and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Input = styled.input`
font-family: var(--thick-font);
  font-size: 1.8rem;
  border: none;
  border-bottom:  3px groove #99C5FF;
  width: 22rem;
  margin-top: 2rem;
  padding-left: 1rem;
  display: flex;
  background-color: #FFFBF0;

  &:focus {
    color: none;
    outline: none;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    width: 18rem;
    font-size: 1.4rem;
  }
`;

export const Button = styled.button`
font-family: var(--thick-font);
font-size: 1.4rem;
font-weight: 500;
width: 12rem;
height: 2.5rem;
background-color: #5999FF;
color: #fff;
padding: .5rem;
margin: 1rem 0;
border: none;
border-radius: .7rem;

&:hover {
  background: #1C82FF;
}

@media screen and (max-width: 1024px) {
  width: 8rem;
  font-size: 1rem;
}
@media screen and (max-width: 768px) {
  width: 8rem;
  font-size: .8rem;
}
`;