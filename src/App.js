import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Main from "./components/main/Main";
import Loading from "./components/loading/Loading";
import { GlobalStyle } from "./styles/global.style";
import Mypage from "./components/mypage/Mypage";
import Painting from "./components/painting/Painting";
import axios from "axios";

function App() {
  useEffect(async () => {
    try {
      const result = await axios(
        "https://oneul.site/O_NeulServer/user/renewToken",
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/main">
          <Main />
        </Route>
        <Route path="/loading">
          <Loading />
        </Route>
        <Route path="/painting">
          <Painting />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
