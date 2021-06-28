import React, { useState } from "react";
import validate from "./Validate";
import useForm from "./useFrom";
import "./Signup.scss";
import axios from "axios";
import {
  BoxContainer,
  FormContainer,
  ModalContainer,
  Close,
  Wrapper,
  SignupText,
  SignupForm,
  Input,
  SignupBtn,
  LoginToSignupText,
  SignupToLoginText,
  SwitchSignup,
  SwitchLogin,
  Or,
  Kakaobtn,
  ForBlanceKakao,
  KakaoLogo,
  KakaoText,
  GoogleBtn,
  ForBalanceGoogle,
  GoogleLogo,
  GoogleText,
  NaverBtn,
  ForBalanceNaver,
  NaverLogo,
  NaverText,
} from "../../styles/modals/Signup.style";

// hooks
export default function Signup({ handleModal }) {
  const { handleChange, handleSubmit, values, errors } = useForm(validate);
  const [clickedType, setClickedType] = useState("로그인");

  const handleClickedType = (e) => {
    setClickedType(e.target.innerText);
  };

  const checkValidation = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = values;

    if (clickedType === '로그인') {
      if (!values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '📢 이메일을 확인해주세요!';
      } else if (!values.password) {
        errors.password = '📢 비밀번호를 입력해주세요!';
      } else if (values.password.length < 8) {
        errors.password = '📢 비밀번호는 8자리 이상입니다!';
      } else {
        // handleLogin(email, password);
        console.log('Login');
      }
    } else {
      if (
        username.length > 0 &&
        email.length > 0 &&
        password.length > 6 &&
        password2 === password &&
        email.includes('@')
      ) {
        console.log('Signup');
        // handleSignUp(username, email, password, password2);
      } else {
        alert('입력한 정보를 다시 확인하세요!');
      }
    }
  };

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
        <ModalContainer
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <Wrapper>
            <Close onClick={handleModal}>x</Close>
            <SignupText>
              {clickedType === "로그인" ? "로그인" : "회원가입"}
            </SignupText>
            <SignupForm>
              <Input
                type="text"
                className={
                  clickedType === "로그인" ? "displayNone" : "username"
                }
                placeholder="닉네임"
                onChange={handleChange}
                value={values.username}
                name="username"
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <Input
                type="email"
                placeholder="이메일"
                onChange={handleChange}
                value={values.email}
                name="email"
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
                value={values.password}
                name="password"
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <Input
                type="password"
                className={
                  clickedType === "로그인" ? "displayNone" : "password2"
                }
                placeholder="비밀번호 확인"
                onChange={handleChange}
                value={values.password2}
                name="password2"
                autoComplete="off"
              />
              {errors.username && <p>{errors.username}</p>}
              <SignupBtn onClick={() => console.log("hi")}>
                {clickedType === "회원가입" ? "회원가입" : "로그인"}
              </SignupBtn>
            </SignupForm>
            {clickedType === "로그인" ? (
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
                  <SwitchLogin onClick={handleClickedType}>로그인</SwitchLogin>
                </LoginToSignupText>
              </>
            )}
            <Or></Or>
            <NaverBtn>
              <ForBalanceNaver>
                <NaverLogo alt="Naverlogo" src="/img/naverlogo.png" />
                <NaverText>네이버 로그인</NaverText>
              </ForBalanceNaver>
            </NaverBtn>
            <Kakaobtn>
              <ForBlanceKakao>
                <KakaoLogo alt="kakaologo" src="/img/kakaologo.png" />
                <KakaoText>카카오 로그인</KakaoText>
              </ForBlanceKakao>
            </Kakaobtn>
            <GoogleBtn>
              <ForBalanceGoogle>
                <GoogleLogo alt="googlelogo" src="/img/googlelogo.png" />
                <GoogleText>구글 로그인</GoogleText>
              </ForBalanceGoogle>
            </GoogleBtn>
          </Wrapper>
        </ModalContainer>
      </FormContainer>
    </BoxContainer>
  );
  // }
}
