import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Modify from '../modals/modify/Modify';
import MypageHeader from './MypageHeader';
import ProfileImg from './ProfileImg';
import {
  BoxContainer,
  FormContainer,
  ImgContainer,
  UserInfoForm,
  Info,
  PageName,
  Input,
  ModifyBtn,
} from '../../styles/mypage/Mypage.style';


const Mypage = () => {
  const [modiModal, setModiModal] = useState(false);
  // const [isLogin, setIsLogin] = localStorage.getItem('token') !== null;
  // const [data, setData] = useState({ userInfo: [] });
  const [modivalues, setModiValues] = useState({
    nickname: 'test',
    email: 'test@test.com',
    nowPassword: '',
    password: '',
    password2: '',
  });

  const clickModal = (e) => {
    setModiModal(!modiModal);
  };

  return (
    <BoxContainer>
      <MypageHeader />
      <PageName>
        마이페이지
        <FormContainer>
          <ImgContainer>
            <ProfileImg />
            <Info>나의 프로필</Info>
            <Input
              type="text"
              placeholder="닉네임"
              value={modivalues.nickname}
              name="nickname"
              readOnly
            />
            <Input
              type="email"
              value={modivalues.email}
              name="email"
              readOnly
            />
            <ModifyBtn onClick={clickModal}>정보수정</ModifyBtn>
            {modiModal && <Modify clickModal={clickModal} />}
          </ImgContainer>
          <UserInfoForm />
        </FormContainer>
      </PageName>
    </BoxContainer>
  )
}
export default Mypage
