import axios from "axios";
import React, { createContext, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { User, dataAction, useUserReducer } from "./hooks/useUserReducer";
import { Home } from "./pages/home";
import { Lobby } from "./pages/home/lobby";
import { Login } from "./pages/home/login";
import { Registration } from "./pages/home/registration";

type userContextType = {
  user: User;
  userDispatch: ({ type, payload }: dataAction) => void;
};

export const UserContext = createContext<userContextType>(
  {} as userContextType
);

const Routing = () => {
  const [user, userDispatch] = useUserReducer()
  useEffect(() => {
    checkLoginStatus()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    console.log(user)
  }, [user])

  const checkLoginStatus = async () => {
    const localObj = localStorage.getItem('auth')
    const authObj = localObj && JSON.parse(localObj);
    const axiosBase = axios.create({
      baseURL: 'http://localhost:3001/',
      timeout: 1000,
      headers: {
        "access-token": authObj["accessToken"],
        client: authObj["client"],
        uid: authObj["uid"],
      }
    });
    await axiosBase.get("/api/v1/whoami").then(function (response) {
      if (response.status === 200) {
        const payload = {
          email: response.data.email,
          accessToken: response.headers["access-token"],
          client: response.headers["client"],
          uid: response.headers["uid"],
        }
        userDispatch({ type: "sign_in", payload: payload })
      }
    }).catch(function (error) {
      console.log(error);
    });
  }
  return (
    <UserContext.Provider value={{user, userDispatch}}>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/registration" component={Registration}></Route>
        <Route path="/lobby" component={Lobby}></Route>
      </Router>
    </UserContext.Provider>
  );
}

export default Routing