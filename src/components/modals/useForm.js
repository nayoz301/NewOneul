import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';

export default function useForm() {
  const [values, setValues] = useState({
    nickname: '',
    email: '',
    password: '',
    password2: '',
    errorMessage: ''
  });
  // login <-> signup
  const [clickedType, setClickedType] = useState("로그인");
  const [onLogin, setOnLogin] = useState(false);
  const [onSignup, setOnSignup] = useState(false);    // signup
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleClickedType = (e) => {
    setClickedType(e.target.innerText);
    setValues({
      nickname: '',
      email: '',
      password: '',
      password2: '',
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  const onLoginSuccess = () => {
    // true 일 때 메인페이지 이동
    setOnLogin(!onLogin);
    Swal.fire({
      icon: 'success',
      title: '✨✨✨ 로그인! ✨✨✨',
      showConfirmButton: false,
      timer: 2000
    })
    history.push("/main")
    console.log('로그인 완료')
  };

  const changeType = () => {
    setClickedType('로그인')
  }

  // Signup success => Login Modal
  const onSignupSuccess = () => {
    setOnSignup(!onSignup);
    changeType()
    setValues({
      email: '',
      password: '',
    })
    Swal.fire({
      icon: 'success',
      title: '🎉회원가입 완료!🥰',
      showConfirmButton: false,
      timer: 2500
    })
  };

  // logout = () => {
  //   localStorage.clear();
  //   alert('로그아웃 완료');
  //   this.setState({ userIsLoggedIn: false });
  // };

  return {
    handleChange,
    handleSubmit,
    values,
    clickedType,
    handleClickedType,
    onLoginSuccess,
    onSignupSuccess,
  };
};
