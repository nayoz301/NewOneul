import React from "react";
import { MainHeader, HeaderWrapper } from "../../styles/main/Main.style";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { DiaryLogin } from "../../styles/main/cards/MyCards.style";
import styled from "styled-components";

const MainHeaderCompo = ({ userLogin }) => {
  const history = useHistory();

  // const [isLogin, setIsLogin] = useState(false);

  // const tokenRequest = () => {
  //   setIsLogin(true);
  // };

  // useEffect(() => {
  //   async function token() {
  //     await axios
  //       .post("https://oneul.site/O_NeulServer/user/diarys", {
  //         headers: {
  //           Authorization: "accessToken",
  //           "Content-Type": "application/json",
  //         },
  //         withCredentials: true,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         tokenRequest();
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // });

  // const goHome = () => {
  //   history.push("/main");
  //   console.log("hi");
  // };

  const handleMypage = () => {
    history.push("/mypage");
  };

  return (
    <MainHeader>
      <HeaderWrapper>
        <Link to="/">
          <h1>오늘 ,</h1>
        </Link>
        {userLogin.accessToken ? (
          <button onClick={handleMypage}>MY PAGE</button>
        ) : (
          <button>로그인</button>
        )}
      </HeaderWrapper>
    </MainHeader>
  );
};

const mapStateToProps = ({ loginReducer }) => {
  return {
    userLogin: loginReducer.login,
  };
};

export default connect(mapStateToProps)(MainHeaderCompo);
