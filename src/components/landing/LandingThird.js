import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import LandingCard from "./LandingCard";
import Scroll from "react-scroll";
import "aos/dist/aos.css";

import {
  SecondDivForColor,
  MainSecondInnerSection,
  MainSecondHeader,
  Footer,
  ScrollTop,
  LinkDiv,
  FooterBtnDiv,
} from "../../styles/landing/LandingThird.style";

const LandingThird = () => {
  const scrollToTop = () => {
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  };

  return (
    <SecondDivForColor>
      <MainSecondInnerSection>
        <MainSecondHeader data-aos={"fade-down"} data-aos-duration={"800"}>
          오늘과 이용해주신 분들
        </MainSecondHeader>
        <ScrollTop onClick={scrollToTop}>
          <IoIosArrowUp />
        </ScrollTop>
        <LandingCard />
        <Footer>
          <div>
            <h2>오늘 .</h2>
            <p>Copyright &copy; 2021</p>
          </div>
          <LinkDiv>
            <div className="first-line">김가형 김훈</div>
            <div className="second-line">김덕기 임해성</div>
          </LinkDiv>
          <FooterBtnDiv>
            <button>일기쓰기</button>
          </FooterBtnDiv>
        </Footer>
      </MainSecondInnerSection>
    </SecondDivForColor>
  );
};

export default LandingThird;
