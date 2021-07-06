import React, { useState } from "react";
import useForm from "./useForm";
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
} from "../../../styles/modals/Signup.style";
import { Icon } from "react-icons-kit";
import { circle_delete } from "react-icons-kit/ikons/circle_delete";
import Swal from "sweetalert2";
import { connect } from "react-redux";
import { login, logout } from "../../../actions";

const Signup = ({ handleModal, login, logout }) => {
  const {
    handleChange,
    handleSubmit,
    values,
    clickedType,
    handleClickedType,
    onLoginSuccess,
    onSignupSuccess,
  } = useForm();

  // 로그인, 회원가입 전환에 따른 유효성 검사
  const checkValidation = (e) => {
    e.preventDefault();
    const { nickname, email, password, password2 } = values;

    if (clickedType === "로그인") {
      if (email.length > 0 && password.length > 7 && email.includes("@")) {
        handleLogin(email, password);
        console.log("Login");
      } else {
        Swal.fire({
          icon: "error",
          title: "이메일과 비밀전호를 확인하세요!🤔",
          showConfirmButton: true,
        });
      }
    } else if (clickedType === "회원가입") {
      if (
        nickname.length > 0 &&
        email.length > 0 &&
        password.length > 7 &&
        password2 === password &&
        email.includes("@")
      ) {
        console.log("Signup");
        handleSignUp(nickname, email, password);
      } else if (nickname.length === 0) {
        Swal.fire({
          icon: "error",
          title: "닉네임을 입력하세요! 🤔",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (email.length === 0 || !/\S+@\S+\.\S+/) {
        Swal.fire({
          icon: "error",
          title: "이메일 확인하세요! 🤔",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (password.length === 0 || password.length === 0) {
        Swal.fire({
          icon: "error",
          title: "비밀번호를 입력해주세요! 🤔",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (password.length < 8) {
        Swal.fire({
          icon: "error",
          title: "비밀번호는 8자리 이상입니다! 🤔",
          showConfirmButton: false,
          timer: 1500,
        });
      } else if (password2 !== password) {
        Swal.fire({
          icon: "error",
          title: "비밀번호가 달라요! 😮",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  // Signup 시  axios.post
  const handleSignUp = async (nickname, email, password) => {
    await axios
      .post(
        "https://oneul.site/O_NeulServer/user/signup",
        {
          nickname: nickname,
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        onSignupSuccess();
        console.log("success");
      })
      .catch((err) => {
        console.log("error");
      });
  };

  // Login 시  axios.post
  const handleLogin = async (email, password, message) => {
    await axios
      .post(
        "https://oneul.site/O_NeulServer/user/signin",
        {
          email: email,
          password: password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.data);
        const { accessToken, user } = res.data.data;
        login(accessToken, user);
        onLoginSuccess();
      })
      .catch((err) => {
        if ({ message: "invalid email!" || "password error!" }) {
          Swal.fire({
            icon: "error",
            title: "이메일 또는 비밀번호가 다릅니다! 😮",
            showConfirmButton: true,
          });
        }
        console.log(err);
      });
  };

  // 소셜로그인
  const handleSocialLogin = async (e, siteName) => {
    e.preventDefault();

    const loginUrl = await axios.post(
      `https://oneul.site/O_NeulServer/oauth/getCode`,
      {
        siteName: siteName,
      },
      { withCredentials: true }
    );
    window.location.href = loginUrl.data;
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
            <Close onClick={handleModal}>
              <Icon size={25} icon={circle_delete} />
            </Close>
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
                errorMessage="닉네임을 입력하세요!"
              />
              <Input
                type="email"
                placeholder="이메일"
                onChange={handleChange}
                value={values.email}
                name="email"
              />
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={handleChange}
                value={values.password}
                name="password"
              />
              <Input
                type="password"
                className={
                  clickedType === "로그인" ? "displayNone" : "nickname"
                }
                placeholder="비밀번호 확인"
                onChange={handleChange}
                value={values.password2}
                name="password2"
              />
              <SignupBtn type="submit" onClick={checkValidation}>
                {clickedType === "회원가입" ? "회원가입" : "로그인"}
              </SignupBtn>
            </SignupForm>
            {clickedType === "로그인" ? (
              <SignupToLoginText>
                계정이 없으신가요 ?
                <SwitchSignup onClick={handleClickedType}>
                  회원가입
                </SwitchSignup>
              </SignupToLoginText>
            ) : (
              <LoginToSignupText>
                이미 가입하셨나요 ?
                <SwitchLogin onClick={handleClickedType}>로그인</SwitchLogin>
              </LoginToSignupText>
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
};

export default connect(null, { login, logout })(Signup);
