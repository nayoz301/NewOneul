import React from "react";
import styled from "styled-components";
import DiaryFooterCheckBox from "./DiaryFooterCheckBox";

const DiaryFooter = ({
  selectedDiary,
  isEditing,
  isPublic,
  setIsPublic,
  setIsEditing,
  closeDiaryModal,
  completeDiary,
  recompleteDiary,
  passDiaryId,
}) => {
  return (
    <Footer>
      <FooterClose
        onClick={() => {
          closeDiaryModal();
          passDiaryId(0);
        }}
      >
        닫기
      </FooterClose>
      <FooterRightWrapper>
        {!selectedDiary ? (
          <DiaryFooterCheckBox isPublic={isPublic} setIsPublic={setIsPublic} />
        ) : isEditing === true ? (
          <DiaryFooterCheckBox isPublic={isPublic} setIsPublic={setIsPublic} />
        ) : (
          <TextSpan>
            {isPublic ? "공개 일기입니다" : "비공개 일기입니다"}
          </TextSpan>
        )}

        {!selectedDiary ? (
          <FooterPost onClick={completeDiary}>등록하기</FooterPost>
        ) : isEditing === true ? (
          <FooterPost onClick={recompleteDiary}>재등록하기</FooterPost>
        ) : selectedDiary.isOtherDiary ? (
          <FooterHide />
        ) : (
          <FooterPost onClick={() => setIsEditing(true)}>수정하기</FooterPost>
        )}
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

const FooterHide = styled.div`
  color: rgba(255, 0, 0, 0);
  border: none;
  margin: 1rem 1rem;
  padding: 0.6rem 1.5rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 0, 0, 0);
  font-weight: 800;
  font-family: var(--thick-font);
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
  &:active {
    transform: scale(0.95);
  }
`;

const TextSpan = styled.span`
  display: flex;
  align-items: center;
  font-family: var(--thick-font);
  font-weight: 800;
  font-size: 1.5rem;
  color: #605138;
`;
