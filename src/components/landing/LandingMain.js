import React, { useEffect } from "react";
import background from "../../images/landing.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import LandingThird from "./LandingThird";
import {
  MainWrapper,
  MainDivForColor,
  MainInnerSection,
  MainInnerWrapper,
  MainInnerArticle,
  VideoContainer,
} from "../../styles/landing/LandingMain.style";

const LandingMain = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <MainWrapper id="section1">
      <MainDivForColor>
        <MainInnerSection>
          <MainInnerWrapper>
            <MainInnerArticle>
              <h2 data-aos={"fade-right"} data-aos-duration={"800"}>
                음악, 그림이
                <br />
                함께하는 일기
                <br />
                '오늘' 입니다 .
              </h2>
              <p data-aos={"fade-right"} data-aos-duration={"800"}>
                '오늘' 은 <br />
                여러분의 기분을 표현해줄 음악을 선정했고 <br />
                직접 그린 그림과 <br /> 함께 일기를 기록할 수 있습니다. <br />
                글로 표현할 수 없는 하루를 <br />
                부드러운 글과 음악 <br />
                그리고 자유롭게 그린 그림으로 <br />
                '오늘'에 담아주세요 .
              </p>
            </MainInnerArticle>
            <VideoContainer
              className="video-container"
              data-aos={"fade-left"}
              data-aos-duration={"500"}
            >
              <video src={background} muted autoPlay loop></video>
            </VideoContainer>
          </MainInnerWrapper>
        </MainInnerSection>
        <LandingThird />
      </MainDivForColor>
    </MainWrapper>
  );
};

export default LandingMain;
