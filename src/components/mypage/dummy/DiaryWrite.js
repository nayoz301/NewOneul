import React from 'react'
import styled from "styled-components";

const DiaryWrite = () => {
  return (
    <BoxContainer>
      {/* <FormContainer> */}
      {/* <ContentContainer> */}
      {/* <UserContentForm> */}
      <div>
        <h3>일기작성</h3>
      </div>
      <div />
      <input name="date" type="date" />
      <select name="imoticon" id="imoticon">
        <option value="select">이모티콘 선택</option>
        <option value="smile">😄</option>
        <option value="lovely">😍</option>
        <option value="sad">😭</option>
        <option value="angry">😡</option>
        <option value="melancholy">😔</option>
        <option value="scream">😱</option>
        <option value="sick">😷</option>
      </select>
      <input name="nickname" placeholder="닉네임" value="후니훈" type="text" />
      <div>
        <input name="content" placeholder="내용입력" type="textarea" />
      </div>
      <div>
        <input name="openPost" value="open" type="checkbox" />
        공개일기
        <button>작성하기</button>
      </div>
      {/* </UserContentForm> */}
      {/* </ContentContainer> */}
      {/* </FormContainer> */}
    </BoxContainer >
  )
}

export default DiaryWrite

export const BoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: var(--thick-font);
`;
