import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

export const FormContainer = styled.form`
  @include flex-center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 38rem;
  height: 70rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 4.2rem 4.4rem 4.8rem 4.4rem;
  border-radius: 1.2rem;
  color: grey;
  font-family: var(--primary-font);
  font-size: 1.5rem;
  z-index: 100;
`;

export const Close = styled.button`
  margin-left: 93%;
  border: none;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ModifyText = styled.div`
  color: #000;
  margin: .5rem;
  font-size: 3rem;
  font-weight: bold;
`;

export const ModifyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 25rem;
`;

export const Input = styled.input`
  display: block;
  align-items: center;
  margin: 1rem 0 .5rem 0;
  width: 100%;
  height: 40px;
  padding: 0 1.4rem;
  font-family: var(--primary-font);
  font-size: 1.8rem;
  caret-color: #59a1ff;
  border: none;
  border-bottom: 2px solid #DB7DC5;
  value: null;

  :focus {
    color: none;
    outline: none;
  }
`;

export const ModifyBtn = styled.button`
  font-family: var(--primary-font);
  font-size: 1.8rem;
  font-weight: 500;
  width: 100%;
  min-height: 4.4rem;
  background-color: #DB7DC5;
  color: white;
  border: none;
  border-radius: .5rem;
  margin-top: 3rem;

  &:hover {
    background: #DB18B1;
  }
`;