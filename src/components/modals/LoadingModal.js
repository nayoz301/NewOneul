import React from "react";
import styled from "styled-components";
import Loading from "./Loading";

const LoadingModal = () => {

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
