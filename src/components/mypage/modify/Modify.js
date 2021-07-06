import { useState } from 'react';
import { useHistory, Link } from "react-router-dom";
import useModify from './useModify';
import axios from 'axios';
import Swal from 'sweetalert2';
import {
  BoxContainer,
  ModalContainer,
  Wrapper,
  ModifyText,
  ModifyForm,
  Input,
  ModifyBtn
} from '../../../styles/mypage/Modify.style';
import { connect } from "react-redux";
import { login } from '../../../actions';


const Modify = ({ login, userLogin }) => {
  const history = useHistory();
  const [modiValues, setModiValues] = useState({
    nickname: userLogin.userInfo.nickname,
    email: userLogin.userInfo.email,
    password: '',
    password2: '',
  });

  const handleModiChange = (e) => {
    const { name, value } = e.target;
    setModiValues({
      ...modiValues,
      [name]: value
    });
  };

  const handleValidation = (e) => {
    e.preventDefault();
    const { nickname, password, password2 } = modiValues;

    if (nickname.length > 0 &&
      (password.length === 0 || password.length > 7) &&
      password2 === password) {
      console.log("Modify");
      handleModify();
    } else if (nickname.length === 0) {
      Swal.fire({
        icon: "error",
        title: "닉네임을 입력하세요! 🤔",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "비밀번호는 8자리 이상입니다! 🤔",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (password2 !== password) {
      Swal.fire({
        icon: "error",
        title: "비밀번호가 달라요! 😮",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  const handleModify = (nickname, password) => {
    console.log("WoW")
    return axios
      .patch("https://oneul.site/O_NeulServer/user/edit",
        {
          nickname: nickname,
          password: password
        },
        {
          headers: {
            authorization: userLogin.login.accessToken,
            "Content-Type": "application/json"
          },
          withCredentials: true,
        })
      .then((res) => {
        console.log(res.data)
        history.push("/mypage")
        Swal.fire({
          icon: 'success',
          title: '✨✨✨ 수정완료! ✨✨✨',
          showConfirmButton: true,
          timer: 2000
        })
      })
      .catch((err) => {
        console.log("error");
      })
  }


  return (
    <BoxContainer>
      <ModalContainer>
        {/* <Wrapper> */}
        <ModifyText>나의 정보수정</ModifyText>
        <ModifyForm>
          <Input
            type="text"
            placeholder="닉네임"
            onChange={handleModiChange}
            value={modiValues.nickname}
            name="nickname"
          />
          <Input
            type="email"
            onChange={handleModiChange}
            value={modiValues.email}
            name="email"
            readOnly
          />
          <Input
            type="password"
            placeholder="비밀번호"
            onChange={handleModiChange}
            value={modiValues.password}
            name="password"
          />
          <Input
            type="password"
            placeholder="비밀번호 확인"
            onChange={handleModiChange}
            value={modiValues.password2}
            name="password2"
          />
          <ModifyBtn type="button" onClick={handleValidation}>저 장</ModifyBtn>
          <Link to="/mypage">
            <ModifyBtn type="button">뒤로가기</ModifyBtn>
          </Link>
        </ModifyForm>
        {/* </Wrapper> */}
      </ModalContainer>
    </BoxContainer>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer,
  };
};

export default connect(mapStateToProps, { login })(Modify);
