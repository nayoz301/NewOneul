import React, { useState, useEffect } from "react";
import {
  BoxContainer,
  DiaryContainer,
  UserContentForm,
  Div,
} from "../../../styles/mypage/DiaryPost.style";
import { connect } from "react-redux";
import SelectFilter from "./SelectFilter";
import MyCardList from "./MyCardList";
import { fetchAllLoginDiary } from "../../../actions";
import fetchAxios from "../../main/useFetch";

const DiaryPost = ({ diary, userInfo, fetchAllLoginDiary }) => {
  const [myDiaries, setMyDiaries] = useState(null);
  const [onPublic, setOnPublic] = useState("");

  useEffect(() => {
    fetchAxios(userInfo)
      .then((result) => {
        fetchAllLoginDiary(
          result.publicDiary,
          result.myDiary,
          result.musicList
        );
        setMyDiaries(result.myDiary);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteringPublic = (e) => {
    let selectCard = e.target.value;
    setOnPublic(selectCard);
    if (selectCard === "") {
      setMyDiaries(diary.myDiary);
    } else if (selectCard === "true") {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return diary.isPublic === true;
        })
      );
    } else if (selectCard === "false") {
      setMyDiaries(
        diary.myDiary.filter((diary) => {
          return diary.isPublic === false;
        })
      );
    }
  };

  return (
    <BoxContainer>
      <UserContentForm>
        <Div>
          <SelectFilter filteringPublic={filteringPublic} onPublic={onPublic} />
        </Div>
        <DiaryContainer>
          {myDiaries && <MyCardList myDiaries={myDiaries} />}
        </DiaryContainer>
      </UserContentForm>
    </BoxContainer>
  );
};

const mapStateToProps = ({ loginReducer, mainReducer }) => {
  return {
    userInfo: loginReducer,
    diary: mainReducer,
  };
};

export default connect(mapStateToProps, {
  fetchAllLoginDiary,
})(DiaryPost);
