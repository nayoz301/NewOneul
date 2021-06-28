export default function Validate(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = '📢 닉에임을 입력하세요!';
  }

  if (!values.email) {
    errors.email = '📢 이메일을 입력해주세요!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '📢 이메일 형식을 확인해주세요!';
  }
  if (!values.password) {
    errors.password = '📢 비밀번호를 입력해주세요!';
  } else if (values.password.length < 8) {
    errors.password = '📢 비밀번호는 8자리 이상입니다!';
  }

  if (!values.password2) {
    errors.password2 = '📢 비밀번호를 입력해주세요!';
  } else if (values.password2 !== values.password) {
    errors.password2 = '📢 비밀번호가 달라요 😢';
  }
  return errors;
}