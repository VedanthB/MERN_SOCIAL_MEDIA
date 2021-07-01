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
import StatusModal from "./components/StatusModal";
import Register from "./pages/register";
import { getPosts } from "./redux/actions/postAction";
import SocketClient from "./SocketClient";

import io from "socket.io-client";
import { GLOBALTYPES } from "./redux/actions/globalTypes";
import { getNotifies } from "./redux/actions/notifyAction";
import { getSuggestions } from "./redux/actions/suggestionsAction";
import CallModal from "./components/message/CallModal";
import Peer from "peerjs";

function App() {
  const { auth, status, modal, call } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());

    const socket = io();
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket });
    return () => socket.close();
  }, [dispatch]);

  useEffect(() => {
    if (auth.token) {
      dispatch(getPosts(auth.token));
      dispatch(getSuggestions(auth.token));
      dispatch(getNotifies(auth.token));
    }
  }, [dispatch, auth.token]);

  useEffect(() => {
    const newPeer = new Peer(undefined, {
      path: "/",
      secure: true,
    });

    dispatch({ type: GLOBALTYPES.PEER, payload: newPeer });
  }, [dispatch]);

  return (
    <Router>
      <Alert />
      <input type="checkbox" id="theme" />
      <div className="App">
        <div className="main">
          {auth.token && <Header />}
          {status && <StatusModal />}
          {auth.token && <SocketClient />}
          {call && <CallModal />}
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
