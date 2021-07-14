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
  width: 80vmax;
  height: 100%;
  margin: 10rem 0 1rem 0;
  // background-color: #DBC5CD;
  // border: .3rem groove #DBC5CD;
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
  width: 20vmax;
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
    height: 65vh;
    box-shadow: 10px 5px 5px #D3CCDB;
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
// background-color: #FFFBF0;
background-color: #fff;
padding-top: 2.5rem;
margin-left: 1.5rem;
box-shadow: 10px 5px 5px #D3CCDB;

@media screen and (max-width: 945px) {
  width: 37vmax;
  top: 11.045rem;
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
    font-size: 1.5rem;
  }
`;

export const Input = styled.input`
font-family: var(--thick-font);
  font-size: 1.8rem;
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

  @media screen and (max-width: 1024px) {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 768px) {
    width: 14rem;
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
margin-top: 1rem;
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