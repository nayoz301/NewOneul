import React, { useState } from "react";
import {
  BoxContainer,
  DiaryContainer,
  UserContentForm,
} from '../../../styles/mypage/DiaryPost.style';
import { connect } from "react-redux";
import SelectFilter from './SelectFilter';
import MyCardList from './MyCardList';

const DiaryPost = ({ diary }) => {
  const [myDiaries, setMyDiaries] = useState(diary.myDiary)
  const [onPublic, setOnPublic] = useState("");



  const filteringPublic = (e) => {
    // e.preventDefault()
    let selectCard = e.target.value
    setOnPublic(selectCard)
    if (selectCard === '') {
      setMyDiaries(diary.myDiary)
    }
    else if (selectCard === true) {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return (diary.isPublic === true)
        })
      )
    } else if (selectCard === false) {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return (diary.isPublic === false)
        })
      )
    }
    // console.log(selectCard)
  }


  return (
    <BoxContainer>
      <UserContentForm>
        <DiaryContainer>
          <SelectFilter
            filteringPublic={filteringPublic}
            onPublic={onPublic}
          />
          <MyCardList myDiaries={myDiaries} />
        </DiaryContainer>
      </UserContentForm>
    </BoxContainer>
  )
}


const mapStateToProps = ({ loginReducer, mainReducer }) => {
  return {
    userInfo: loginReducer,
    diary: mainReducer,
  };
};

export default connect(mapStateToProps)(DiaryPost);