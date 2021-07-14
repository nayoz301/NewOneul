import React, { useState, useEffect } from "react";
import {
  BoxContainer,
  DiaryContainer,
  UserContentForm,
  Div,
} from '../../../styles/mypage/DiaryPost.style';
import { connect } from "react-redux";
import SelectFilter from './SelectFilter';
import MyCardList from './MyCardList';
import { fetchAllLoginDiary, fetchAllUnloginDiary } from "../../../actions";
import useFetch from "../../main/useFetch";
import WritingDiary from './WritingDiary';

const DiaryPost = ({ diary, userInfo, fetchAllLoginDiary, fetchAllUnloginDiary }) => {
  const [myDiaries, setMyDiaries] = useState(() => {
    return diary.myDiary
  })
  const [onPublic, setOnPublic] = useState("");
  const [isWriting, setIsWriting] = useState(false);
  const [clickToday, setClickToday] = useState(null);
  const [diaryIdSelect, setDiaryIdSelect] = useState(0);

  useFetch(
    "https://oneul.site/O_NeulServer/main",
    userInfo,
    fetchAllLoginDiary,
    fetchAllUnloginDiary
  );

  console.log(myDiaries)

  const filteringPublic = (e) => {
    let selectCard = e.target.value
    console.log(selectCard);
    setOnPublic(selectCard)
    if (selectCard === '') {
      setMyDiaries(diary.myDiary)
    }
    else if (selectCard === "true") {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return diary.isPublic === true
        })
      )
    } else if (selectCard === "false") {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return diary.isPublic === false
        })
      )
    }
    console.log(myDiaries);
  }

  useEffect(() => {
    if (clickToday !== null) {
      return setIsWriting((prev) => setIsWriting(!prev));
    }
  }, [clickToday]);

  const closeDiary = () => {
    setIsWriting((prev) => setIsWriting(!prev));
  };

  const diaryIdPass = (diaryId) => {
    setDiaryIdSelect(diaryId)
  }

  return (
    <BoxContainer>
      <UserContentForm>
        <Div>
          {isWriting && (
            <WritingDiary
              clickToday={clickToday}
              closeDiary={closeDiary}
              diaryIdSelect={diaryIdSelect}
              diaryIdPass={diaryIdPass}
            />
          )}
          <SelectFilter
            filteringPublic={filteringPublic}
            onPublic={onPublic}
          />
        </Div>
        <DiaryContainer>
          <MyCardList
            myDiaries={myDiaries}

          />
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

export default connect(mapStateToProps, { fetchAllLoginDiary, fetchAllUnloginDiary })(DiaryPost);