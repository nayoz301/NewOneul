import { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Modify from './modify/Modify';
import MypageHeader from './MypageHeader';
import ProfileImg from './profile/ProfileImg';
import DiaryPost from './diary/DiaryPost';
import Nav from './Nav';
import DiaryWrite from './dummy/DiaryWrite';
import {
  BoxContainer,
  FormContainer,
  Wrapper,
  UserInfoForm,
  UserContentForm,
  ContentContainer,
  ContentTitle,
  Frame,
  Info,
  Input,
  UserContent,
  Button
} from '../../styles/mypage/Mypage.style';
import { connect } from "react-redux";
import { login } from '../../actions';


const Mypage = ({ login, userLogin }) => {
  const [users, setUsers] = useState({
    nickname: userLogin.userInfo.nickname,
    email: userLogin.userInfo.email
  });
  console.log(userLogin.userInfo)

  return (
    <>
      <BoxContainer>
        <MypageHeader />
        <Wrapper>
          <FormContainer>
            <ContentTitle>나의 오늘,</ContentTitle>
            <ContentContainer>
              <UserInfoForm>
                <Frame>
                  <Switch>
                    <Route path="/mypage/modify" exact>
                      <Modify />
                    </Route>
                    <ProfileImg />
                  </Switch>
                  <Info>나의 프로필</Info>
                  <Input
                    type="text"
                    value={users.nickname}
                    name="nickname"
                    readOnly
                  />
                  <Input
                    type="email"
                    value={users.email}
                    name="email"
                    readOnly
                  />
                  <Link to="/mypage/modify">
                    <Button>나의 정보수정</Button>
                  </Link>
                </Frame>
              </UserInfoForm>
              <UserContentForm>
                <UserContent>
                  <Switch>
                    <Route path="/mypage/diarywrite" exact>
                      <DiaryWrite />
                    </Route>
                    <Route path="/mypage/mydiary" exact>
                      <DiaryPost />
                    </Route>
                  </Switch>
                </UserContent>
              </UserContentForm>
              <Nav />
            </ContentContainer>
          </FormContainer>
        </Wrapper>
      </BoxContainer>
    </>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
  };
};

export default connect(mapStateToProps, { login })(Mypage);
