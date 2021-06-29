import { Switch, Route } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Main from "./components/main/Main";
import Loading from "./components/loading/Loading"
import { GlobalStyle } from "./styles/global.style";

function App() {
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
      </Switch>
    </>
  );
}

export default App;
