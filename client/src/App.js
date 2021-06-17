import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageRender from "./customRouter/PageRender";
import PrivateRouter from "./customRouter/PrivateRouter";
import Login from "./pages/login";
import Alert from "./components/alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import Home from "./pages/home";
import { refreshToken } from "./redux/actions/authAction";
import { useEffect } from "react";
import Header from "./components/header/Header";
import Register from "./pages/register";

function App() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          <Header />
          <Route exact path="/" component={auth.token ? Home : Login} />
          <Route exact path="/register" component={Register} />

          <PrivateRouter exact path="/:page" component={PageRender} />
          <PrivateRouter exact path="/:page/:id" component={PageRender} />
        </div>
      </div>
    </Router>
  );
}

export default App;
