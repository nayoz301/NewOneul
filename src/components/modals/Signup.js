import React, { useState } from "react";
import useForm from "./useFrom";
import "./Signup.scss";
import { useHistory } from "react-router-dom";
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
  const { handleChange, handleSubmit, values, setValues } = useForm();
  // login <-> signup
  const [clickedType, setClickedType] = useState("로그인");
  // signup, login
  const [onLogin, setOnLogin] = useState(false);
  const [onSignup, setOnSignup] = useState(false);
  // token
  const [accessToken, setAccessToken] = useState('');
  const history = useHistory();

  const handleClickedType = (e) => {
    setClickedType(e.target.innerText);
    setValues({
      nickname: '',
      email: '',
      password: '',
      password2: '',
    })
  };

  const onLoginSuccess = () => {
    // true 일 때 메인페이지 이동
    setOnLogin(true);
    history.push("/main")
    console.log('로그인 완료')
  };

  const onSignupSuccess = () => {
    alert('안녕하세요! 회원가입이 완료되었습니다!');
    setOnSignup(handleModal);
  };
  const handleSocialLogin = async (e, siteName) => {
    e.preventDefault();
    const loginUrl = await axios.post(`http://localhost:80/oauth/getCode`, {
      siteName: siteName
    }, {
      withCredentials: true
    })
    window.location.href = loginUrl.data;
  }

  // const checkValidation = (e) => {
  //   e.preventDefault();
  //   const { username, email, password, password2 } = values;

  // 로그인, 회원가입 전환에 따른 유효성 검사
  const checkValidation = (e) => {
    e.preventDefault();
    const { nickname, email, password, password2 } = values;

    if (clickedType === '로그인') {
      if (email.length > 0 && password.length > 7 && email.includes('@')) {
        handleLogin(email, password);
        console.log('Login');
      } else {
        alert('📢 로그인 정보를 정보를 입력하세요! 📢');
      }
    } else if (clickedType === '회원가입') {
      if (
        nickname.length > 0 &&
        email.length > 0 &&
        password.length > 7 &&
        password2 === password &&
        email.includes('@')
      ) {
        console.log('Signup');
        handleSignUp(nickname, email, password);
      }
      else if (
        nickname.length === 0) {
        alert('📢 닉네임을 입력하세요! 📢');
      }
      else if (email.length === 0 || !/\S+@\S+\.\S+/) {
        alert('📢 이메일 형식을 확인하세요! 📢')
      }
      else if (password.length < 8) {
        alert('📢 비밀번호는 8자리 이상입니다! 📢')
      }
      else if (password2 !== password) {
        alert('📢 비밀번호가 달라요! 😢 📢')
      }
    }
  };

  const handleSignUp = async (nickname, email, password) => {
    await axios
      .post(
        "https://oneul.site/O_NeulServer/user/signup", {
        nickname: nickname,
        email: email,
        password: password
      },
        {
          headers: {
            'Content-Type': 'application/json'
          }, withCredentials: true
        })
      .then((res) => {
        onSignupSuccess();
        console.log("success")
      })
      .catch((err) => {
        console.log("error")
      })
  };

  const handleLogin = async (email, password) => {
    await axios
      .post(
        "https://oneul.site/O_NeulServer/user/signin", {
        email: email,
        password: password
      },
        {
          headers: {
            "Content-Type": "application/json"
          }, withCredentials: true
        }
      )
      .then((res) => {
        onLoginSuccess();
        // if (res.token) {
        //   onLoginSuccess();
        // }
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
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
                  clickedType === "로그인" ? "displayNone" : "nickname"
                }
                placeholder="닉네임"
                onChange={handleChange}
                value={values.nickname}
                name="nickname"
                autoComplete="off"
              />
              <Input
                type="email"
                placeholder="이메일"
                onChange={handleChange}
                value={values.email}
                name="email"
                autoComplete="off"
              />
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
                value={values.password}
                name="password"
                autoComplete="off"
              />
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
              <SignupBtn type="submit" onClick={checkValidation}>
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
            <NaverBtn onClick={(e) => handleSocialLogin(e, "naver")}>
              <ForBalanceNaver>
                <NaverLogo alt="Naverlogo" src="/img/naverlogo.png" />
                <NaverText>네이버 로그인</NaverText>
              </ForBalanceNaver>
            </NaverBtn>
            <Kakaobtn onClick={(e) => handleSocialLogin(e, "kakao")}>
              <ForBlanceKakao>
                <KakaoLogo alt="kakaologo" src="/img/kakaologo.png" />
                <KakaoText>카카오 로그인</KakaoText>
              </ForBlanceKakao>
            </Kakaobtn>
            <GoogleBtn onClick={(e) => handleSocialLogin(e, "google")}>
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
