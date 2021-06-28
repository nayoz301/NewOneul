import React, { useState } from 'react';
import styled from 'styled-components';
import validate from './Validate';
import useForm from './useFrom';
import './Signup.scss';
import axios from 'axios';

// hooks
export default function Signup({ handleModal }) {
  const {
    handleChange,
    handleSubmit,
    values,
    errors } = useForm(validate)
  const [clickedType, setClickedType] = useState('로그인');


  const handleClickedType = (e) => {
    setClickedType(e.target.innerText)
  };

  // const checkValidation = (e) => {
  //   e.preventDefault();
  //   const { username, email, password, password2 } = values;

  //   if (clickedType === '로그인') {
  //     if (!values.email && !/\S+@\S+\.\S+/.test(values.email)) {
  //       errors.email = '📢 이메일을 확인해주세요!';
  //     } else if (!values.password) {
  //       errors.password = '📢 비밀번호를 입력해주세요!';
  //     } else if (values.password.length < 8) {
  //       errors.password = '📢 비밀번호는 8자리 이상입니다!';
  //     } else {
  //       // handleLogin(email, password);
  //       console.log('Login');
  //     }
  //   } else {
  //     if (
  //       username.length > 0 &&
  //       email.length > 0 &&
  //       password.length > 6 &&
  //       password2 === password &&
  //       email.includes('@')
  //     ) {
  //       console.log('Signup');
  //       handleSignUp(username, email, password, password2);
  //     } else {
  //       alert('입력한 정보를 다시 확인하세요!');
  //     }
  //   }
  // };

  // const handleSignUp = async (username, email, password, password2) => {
  //   await axios
  //     .post("http://ec2-100-25-162-56.compute-1.amazonaws.com", {
  //       username: username,
  //       email: email,
  //       password: password,
  //       password2: password2,
  //     },
  //       {
  //         headers: {
  //           'Content-Type': 'application/json'
  //         }, withCredentials: true
  //       })
  //     .then((res) => {
  //       this.props.onSignupSuccess();
  //       console.log("success")
  //     })
  //     .catch((err) => {
  //       console.log("error")
  //     })
  // };

  // const handleLogin = async (email, password) => {
  //   await axios
  //     .post(
  //       "http://ec2-100-25-162-56.compute-1.amazonaws.com", {
  //       email: email,
  //       password: password
  //     },
  //       { headers: { "Content-Type": "application/json" }, withCredentials: true }
  //     )
  //     .then((res) => {
  //       if (res.token) {
  //         this.props.onLoginSuccess();
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit} noValidate>
        <ModalContainer onClick={(e) => { e.stopPropagation(); }}>
          <Wrapper>
            <Close onClick={handleModal}>x</Close>
            <SignupText>
              {clickedType === '로그인' ? '로그인' : '회원가입'}
            </SignupText>
            <SignupForm>
              <Input
                type='text'
                className={clickedType === '로그인' ? 'displayNone' : 'username'}
                placeholder='닉네임'
                onChange={handleChange}
                value={values.username}
                name='username'
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <Input
                type='email'
                placeholder='이메일'
                onChange={handleChange}
                value={values.email}
                name='email'
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <Input
                type='password'
                placeholder='비밀번호'
                onChange={handleChange}
                value={values.password}
                name='password'
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <Input
                type='password'
                className={clickedType === '로그인' ? 'displayNone' : 'password2'}
                placeholder='비밀번호 확인'
                onChange={handleChange}
                value={values.password2}
                name='password2'
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <SignupBtn onClick={checkValidation}>
                {clickedType === '회원가입' ? '회원가입' : '로그인'}
              </SignupBtn>
            </SignupForm>
            {clickedType === '로그인' ? (
              <>
                <SignupToLoginText>
                  계정이 없으신가요?
                  <SwitchSignup onClick={handleClickedType}>
                    회원가입
                  </SwitchSignup>
                </SignupToLoginText>
              </>
            ) : (
              <>
                <LoginToSignupText>
                  이미 가입하셨나요?
                  <SwitchLogin onClick={handleClickedType}>
                    로그인
                  </SwitchLogin>
                </LoginToSignupText>
              </>
            )}
            <Or></Or>
            <NaverBtn>
              <ForBalanceNaver>
                <NaverLogo
                  alt='Naverlogo'
                  src='/img/naverlogo.png'
                />
                <NaverText>네이버 로그인</NaverText>
              </ForBalanceNaver>
            </NaverBtn>
            <Kakaobtn>
              <ForBlanceKakao>
                <KakaoLogo
                  alt='kakaologo'
                  src='/img/kakaologo.png'
                />
                <KakaoText>카카오 로그인</KakaoText>
              </ForBlanceKakao>
            </Kakaobtn>
            <GoogleBtn>
              <ForBalanceGoogle>
                <GoogleLogo
                  alt='googlelogo'
                  src='/img/googlelogo.png'
                />
                <GoogleText>구글 로그인</GoogleText>
              </ForBalanceGoogle>
            </GoogleBtn>
          </Wrapper>
        </ModalContainer>
      </FormContainer >
    </BoxContainer >
  );
  // }
}


// styled-components

const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
`;

const FormContainer = styled.form`
  @include flex-center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #00000080;
  z-index: 10000;
`;

const ModalContainer = styled.div`
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
  font-family: MapoFlowerIsland;
  font-size: 15px;
  z-index: 100;
`;

const Close = styled.button`
  margin-left: 93%;
  font-size: 20px;
  border: none;
  margin-top: 0
  padding: 0;

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SignupText = styled.div`
  color: #000;
  margin: 20px;
  font-size: 3rem;
  font-weight: bold;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
`;

const Input = styled.input`
  display: block;
  margin: 10px 10px 5px 0;
  width: 100%;
  // margin-left: 5%;
  height: 40px;
  padding: 0 14px;
  font-family: MapoFlowerIsland;
  font-size: 14px;
  caret-color: #59A1FF;
  border: none;
  border-bottom: 2px solid #59A1FF;

  :focus {
    color: none;
    outline: none;
  }
`;

const SignupBtn = styled.button`
  font-family: MapoFlowerIsland;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  min-height: 44px;
  background-color: #9CC3FF;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {                
    background: #59A1FF;
  }
`;

const LoginToSignupText = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color:rgb(150, 150, 150);
`;


const SignupToLoginText = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color:rgb(150, 150, 150);
`;

const SwitchSignup = styled.span`
  color: #9CC3FF;
  cursor: pointer;

  &:hover {                
    color: #1A53FF;
  }
`;

const SwitchLogin = styled.span`
  color: #9CC3FF;
  cursor: pointer;

  &:hover {                
    color: #1A53FF;
  }
`;

const Or = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
  margin: 24px 0;
  &::after {
    content: 'OR';
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
    content: '';
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    border-top: 1px solid #bdbcbc;
  }
`;

// kakao

const Kakaobtn = styled.button`
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

const ForBlanceKakao = styled.div`
  height: 44px;
  margin-right: 120px;
`;

const KakaoLogo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 20px;
`;

const KakaoText = styled.span`
  margin-top: 13px;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
`;

// google

const GoogleBtn = styled.button`
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

const ForBalanceGoogle = styled.div`
  height: 44px;
  margin-right: 120px;
`;

const GoogleLogo = styled.img`
  margin: 2px 20px 0 0;
  height: 38px;
  width: 38px;
`;

const GoogleText = styled.span`
  margin-top: 13px;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  font-weight: 700;
`;

// Naver
const NaverBtn = styled.button`
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

const ForBalanceNaver = styled.div`
  height: 44px;
  margin-right: 120px;
`;

const NaverLogo = styled.img`
  margin: 2px 20px 0 0;
  height: 38px;
  width: 38px;
`;

const NaverText = styled.span`
  margin-top: 13px;
  position: absolute;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  font-weight: 700;
`;