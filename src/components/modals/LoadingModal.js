import React from "react";
import styled from "styled-components";
import Loading from "./Loading";

const LoadingModal = () => {
  console.log(clickedDayDiary);
  return (
    <>
      <Background>
        <Loading />
      </Background>
    </>
  );
};

const Background = styled.div``;

export default LoadingModal;
