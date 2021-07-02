import { useState } from 'react';
import ImgEdit from './ImgEdit';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import { Icon } from "react-icons-kit";
import { circle_delete } from "react-icons-kit/ikons/circle_delete";
import {
  BoxContainer,
  FormContainer,
  ModalContainer,
  Close,
  Wrapper,
  ModifyText,
  ModifyForm,
  Input,
  ModifyBtn,
} from '../../../styles/modals/Modify.style';


const Modify = ({ clickModiModal }) => {
  const history = useHistory();
  // const [isModify, setIsModify] = useState('')
  const [modivalues, setModiValues] = useState({
    nickname: 'test',
    email: 'test@test.com',
    nowPassword: '',
    password: '',
    password2: '',
  });

  const handleModiChange = (e) => {
    const { name, value } = e.target;
    setModiValues({
      ...modivalues,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
  };


  // const onModifySuccess = () => {
  //   // true 일 때 메인페이지 이동
  //   setIsModify(!isModify);
  //   history.push('/');
  //   Swal.fire({
  //     icon: 'success',
  //     title: '✨✨✨ 다시 로그인해주세요! ✨✨✨',
  //     showConfirmButton: false,
  //     timer: 2000
  //   })
  // }

  const handleValidation = (e) => {
    e.preventDefault();
    const { nickname, password, password2 } = modivalues;

    if (nickname.length > 0 && password.length > 7 && password2 === password) {
      console.log("Modify");
      // clickModify()
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

  // const clickModify = () => {
  //   onModifySuccess()
  // }

  const handleModify = async (nickname, picture, password) => {
    console.log("WoW")
    // onModifySuccess()
    // await axios
    //   .patch("https://oneul.site/O_NeulServer/user/edit",
    //     {
    //       nickname: nickname,
    //       picture: picture,
    //       password: password
    //     },
    //     {
    //       headers: { "Content-Type": "application/json" },
    //       withCredentials: true,
    //     })
    //   .then((res) => {
    //     onModifySuccess()
    //     console.log("res.data")
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   })
  }

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <ModalContainer>
          <Wrapper>
            <Close onClick={clickModiModal}>
              <Icon size={25} icon={circle_delete} />
            </Close>
            <ModifyText>나의 정보수정</ModifyText>
            <ImgEdit />
            <ModifyForm>
              <Input
                type="text"
                placeholder="닉네임"
                onChange={handleModiChange}
                value={modivalues.nickname}
                /* {userInfo.nickname} */
                name="nickname"
              />
              <Input
                type="email"
                value={modivalues.email}
                /* {userInfo.email} */
                name="email"
                readOnly
              />
              <Input
                type="password"
                placeholder="비밀번호"
                onChange={handleModiChange}
                value={modivalues.password}
                name="Password"
              />
              <Input
                type="password"
                placeholder="비밀번호 확인"
                onChange={handleModiChange}
                value={modivalues.password2}
                name="password2"
              />
              <ModifyBtn type="button" onClick={handleValidation}>저 장</ModifyBtn>
            </ModifyForm>
          </Wrapper>
        </ModalContainer>
      </FormContainer>
    </BoxContainer>
  )
}
export default Modify
