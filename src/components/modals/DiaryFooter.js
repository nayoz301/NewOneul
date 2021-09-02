import React from "react";
import styled from "styled-components";

const DiaryFooter = ({
  isPublic,
  SetIsPublic,
  closeDiaryModal,
  completeDiary,
}) => {
  return (
    <Footer>
      <FooterClose onClick={closeDiaryModal}>닫기</FooterClose>
      <FooterRightWrapper>
        <FooterCheckBox>
          <FooterInput
            type="checkbox"
            onClick={() => {
              SetIsPublic(!isPublic);
            }}
          ></FooterInput>
          <FooterLabel>글 공개</FooterLabel>
          {/* <input
            type="checkbox"
            id="check_box"
            onClick={() => {
              SetIsPublic(!isPublic);
            }}
          ></input>
          <label
            htmlFor="check_box"
            className="private"
            style={{
              fontSize: "1.5rem",
              color: "#605138",
              fontFamily: "var(--thick-font)",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
            }}
          >
            글 공개
          </label> */}
        </FooterCheckBox>
        <FooterPost onClick={completeDiary}>등록하기</FooterPost>
      </FooterRightWrapper>
    </Footer>
  );
};

export default DiaryFooter;

const Footer = styled.div`
  border: none;
  background-color: #d2c4adf0;
  display: flex;
  min-height: 4.5rem;
  justify-content: space-between;
  align-items: center;
  background-image: url("https://www.transparenttextures.com/patterns/cardboard-flat.png");
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
`;

const FooterClose = styled.button`
  font-family: var(--thick-font);
  margin: 1rem 1rem;
  border: none;
  background-color: #837970;
  border-radius: 0.5rem;
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  color: #d4c7b1;
  padding: 0.5rem 1.5rem;
  z-index: 201; //뮤직창이 200이다
  &:active {
    transform: scale(0.95);
  }
`;

const FooterRightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FooterCheckBox = styled.div``;

const FooterLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #605138;
  font-family: var(--thick-font);
  font-weight: 800;
`;
const FooterInput = styled.input.attrs({ type: "checkbox" })`
  display: none;

  + ${FooterLabel} {
    display: block;
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;

    &:before {
      content: "";
      border: 0.1rem solid #827870;
      border-radius: 50%;
      display: inline-block;
      width: 1rem;
      height: 1rem;
      margin-right: 0.5rem;
      vertical-align: center;
      align-items: center;
      color: transparent;
      transition: 0.2s;
    }

    &:active {
      &:before {
        transform: scale(0);
      }
    }
  }

  &:checked + ${FooterLabel} {
    &:before {
      background-color: #837970;
      border-color: #837970;
      color: #fff;
    }
  }
`;

const FooterPost = styled.button`
  color: #d4c7b1;
  border: none;
  margin: 1rem 1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #837970;
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  &:active {
    transform: scale(0.95);
  }
`;
