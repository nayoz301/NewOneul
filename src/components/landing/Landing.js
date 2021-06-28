import React, { useEffect } from "react";
import { LandingWrapper } from "../../styles/landing/Landing.style";
import LandingSection from "./LandingSection";
import "../../style.css";
import LandingMain from "./LandingMain";

const Landing = () => {
  useEffect(() => {
    console.log("랜딩");
    return () => {
      console.log("랜딩아웃");
    };
  }, []);
  return (
    <LandingWrapper>
      <LandingSection />
      <LandingMain />
    </LandingWrapper>
  );
};

export default Landing;
