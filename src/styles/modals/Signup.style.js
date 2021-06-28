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
  z-index: 10000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  width: 325px;
  height: 700px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 32px 20px 48px 20px;
  border-radius: 12px;
  color: grey;
  font-family: var(--primary-font);
  font-size: 15px;
  z-index: 100;
`;

export const Close = styled.button`
  margin-left: 93%;
  font-size: 20px;
  border: none;
  margin-top: 0;
  padding: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SignupText = styled.div`
  color: #000;
  margin: 20px;
  font-size: 3rem;
  font-weight: bold;
`;

export const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
`;

export const Input = styled.input`
  display: block;
  margin: 10px 10px 5px 0;
  width: 100%;
  /* // margin-left: 5%; */
  height: 40px;
  padding: 0 14px;
  font-family: var(--primary-font);
  font-size: 14px;
  caret-color: #59a1ff;
  border: none;
  border-bottom: 2px solid #59a1ff;

  :focus {
    color: none;
    outline: none;
  }
`;

export const SignupBtn = styled.button`
  font-family: var(--primary-font);
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  min-height: 44px;
  background-color: #9cc3ff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background: #59a1ff;
  }
`;

export const LoginToSignupText = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: rgb(150, 150, 150);
`;

export const SignupToLoginText = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: rgb(150, 150, 150);
`;

export const SwitchSignup = styled.span`
  color: #9cc3ff;
  cursor: pointer;

  &:hover {
    color: #1a53ff;
  }
`;

export const SwitchLogin = styled.span`
  color: #9cc3ff;
  cursor: pointer;

  &:hover {
    color: #1a53ff;
  }
`;

export const Or = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 24px 0;
  &::after {
    content: "OR";
    display: inline-block;
    position: relative;
    padding: 0px 14px;
    color: #bdbcbc;
    background-color: white;
    vertical-align: middle;
    font-size: 14px;
    font-weight: 400;
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    border-top: 1px solid #bdbcbc;
  }
`;

// kakao

export const Kakaobtn = styled.button`
  width: 100%;
  height: 44px;
  margin: 7px 0;
  padding: 0;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  background-color: #fae100;
  cursor: pointer;
`;

export const ForBlanceKakao = styled.div`
  height: 44px;
  margin-right: 120px;
`;

export const KakaoLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

export const KakaoText = styled.span`
  margin-top: 13px;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
`;

// google

export const GoogleBtn = styled.button`
  width: 100%;
  height: 44px;
  margin: 7px 0;
  padding: 0;
  font-size: 16px;
  border-radius: 7px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
`;

export const ForBalanceGoogle = styled.div`
  height: 44px;
  margin-right: 120px;
`;

export const GoogleLogo = styled.img`
  margin: 2px 20px 0 0;
  height: 38px;
  width: 38px;
`;

export const GoogleText = styled.span`
  margin-top: 13px;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  font-weight: 700;
`;

// Naver
export const NaverBtn = styled.button`
  width: 100%;
  height: 44px;
  margin: 7px 0;
  padding: 0;
  font-size: 16px;
  border: none;
  border-radius: 7px;
  background-color: rgb(49, 195, 30);
  cursor: pointer;
`;

export const ForBalanceNaver = styled.div`
  height: 44px;
  margin-right: 120px;
`;

export const NaverLogo = styled.img`
  margin: 2px 20px 0 0;
  height: 38px;
  width: 38px;
`;

export const NaverText = styled.span`
  margin-top: 13px;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  font-weight: 700;
`;
