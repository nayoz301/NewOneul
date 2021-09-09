import React from "react";
import DiaryFooterCheckBox from "./DiaryFooterCheckBox";
import {
  Footer,
  FooterClose,
  FooterRightWrapper,
  FooterPost,
  FooterHide,
  TextSpan,
} from "../../styles/modals/DiaryFooter.style";
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
