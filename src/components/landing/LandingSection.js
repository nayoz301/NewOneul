import React, { useEffect, useState } from "react";
import writing from "../../images/writing.mp4";
import swing from "../../images/landing.mp4";
import { connect } from "react-redux";
import {
  HeaderSection,
  Overlay,
  LandingNav,
  LdInnerSection,
  LdInnerSpanWrapper,
  LdInnerSpan,
  LdBtnWrapper,
  LdBtn,
} from "../../styles/landing/LandingSection.style";
import { Link } from "react-router-dom";
import Signup from "../modals/signup_in/Signup";
import { login, logout, modifyAccessToken } from "../../actions";

const random = () => {
  return Math.ceil(Math.random() * 2) - 1;
};

const LandingSection = ({ userLogin, logout }) => {
  const [video, setVideo] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  useEffect(() => {
    const background = [writing, swing];
    setVideo(background[random()]);
  }, []);

  return (
    <HeaderSection>
      <Overlay>
        <video src={video} muted="muted" autoPlay loop />
      </Overlay>
      <LandingNav>
        <Link to="/">
          <h1>오늘 ,</h1>
        </Link>
        {userLogin.isLogin ? (
          <span
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </span>
        ) : (
          <span onClick={handleModal}>로그인</span>
        )}
      </LandingNav>
      {isModal && <Signup handleModal={handleModal} />}
      <LdInnerSection>
        <LdInnerSpanWrapper>
          <LdInnerSpan first>오늘,</LdInnerSpan>
          <br />
          <LdInnerSpan>당신의 하루는 어떠셨나요?</LdInnerSpan>
          <br />
          <LdInnerSpan>잘 보냈던,</LdInnerSpan>
          <br />
          <LdInnerSpan>그렇지 않던,</LdInnerSpan>
          <br />
          <LdInnerSpan>오늘 하루를</LdInnerSpan>
          <br />
          <LdInnerSpan>글, 그림, 음악에 담아보세요</LdInnerSpan>
        </LdInnerSpanWrapper>
        <LdBtnWrapper>
          <Link to="/main">
            <LdBtn first>시작하기</LdBtn>
          </Link>
          <LdBtn
            onClick={() => {
              window.scrollTo({ top: 1016, behavior: "smooth" });
            }}
          >
            더 알아보기
          </LdBtn>
        </LdBtnWrapper>
      </LdInnerSection>
    </HeaderSection>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer.login,
  };
};

export default connect(mapStateToProps, { login, logout, modifyAccessToken })(
  LandingSection
);
