import { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import Modify from './modify/Modify';
import MypageHeader from './MypageHeader';
import ProfileImg from './ProfileImg';
import GetMyDiary from './GetMyDiary';
import Nav from './Nav';
import MyInfo from './MyInfo';
import {
  BoxContainer,
  FormContainer,
  UserInfoForm,
  UserContentForm,
  ContentContainer,
  ContentTitle,
  Div,
  Frame,
  Info,
  Input,
  UserContent,
  Button
} from '../../styles/mypage/Mypage.style';
import { connect } from "react-redux";
import { login } from '../../actions';


const Mypage = ({ login, userLogin }) => {
  const [users, setusers] = useState({
    nickname: userLogin.userInfo.nickname,
    email: userLogin.userInfo.email
  });
  console.log(userLogin.userInfo)

  return (
    <>
      <BoxContainer>
        <MypageHeader />
        <FormContainer>
          <ContentContainer>
            <Div>
              <ContentTitle>나의 오늘,</ContentTitle>
            </Div>
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
                  <Route path="/mypage/myinfo" exact>
                    <MyInfo />
                  </Route>
                  <Route path="/mypage/mydiary" exact>
                    <GetMyDiary />
                  </Route>
                </Switch>
                <Nav />
              </UserContent>
            </UserContentForm>
          </ContentContainer>
        </FormContainer>
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
