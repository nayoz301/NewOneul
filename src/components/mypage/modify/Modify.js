import { useState } from 'react';
import { useHistory, Switch, Route, Link } from "react-router-dom";
import useModify from './useModify';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Icon } from "react-icons-kit";
import { circle_delete } from "react-icons-kit/ikons/circle_delete";
import {
  BoxContainer,
  ModalContainer,
  Wrapper,
  ModifyText,
  ModifyForm,
  Input,
  ModifyBtn
} from '../../../styles/mypage/Modify.style';


const Modify = () => {
  const history = useHistory();
  const [modiValues, setModiValues] = useState({
    nickname: 'nickname',
    email: 'email',
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

  const handleModify = async (nickname, password) => {
    console.log("WoW")
    await axios
      .patch("https://oneul.site/O_NeulServer/user/edit",
        {
          nickname: nickname,
          password: password
        },
        {
          headers: {
            authorization: "accessToken",
            "Content-Type": "application/json"
          },
          withCredentials: true,
        })
      .then((res) => {
        history.push("/mypage")
        Swal.fire({
          icon: 'success',
          title: '✨✨✨ 수정완료! ✨✨✨',
          showConfirmButton: true,
          timer: 2000
        })
        console.log(res.data)
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
export default Modify
