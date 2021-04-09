import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "../../routing";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/organisms/Header";

export const Lobby = () => {
  const history = useHistory();
  // eslint-disable-next-line
  const { user, userDispatch } = useContext(UserContext);

  const handleLogoutClick = async (e: any) => {
    e.preventDefault();
    const localObj = localStorage.getItem("auth");
    const authObj = localObj && JSON.parse(localObj);
    const axiosBase = axios.create({
      baseURL: "http://localhost:3001",
      timeout: 1000,
      headers: {
        "access-token": authObj["accessToken"],
        client: authObj["client"],
        uid: authObj["uid"],
      },
    });
    await axiosBase
      .delete("/api/v1/auth/sign_out")
      .then(function (response) {
        if (response.status === 200) {
          userDispatch({ type: "sign_out", payload: {} });
          history.push("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Header appTitle="COSMO WARS" authenticated={user.authenticated}></Header>
      Your are Login user
      <div>{user.email}</div>
      <div onClick={handleLogoutClick}>ログアウトする</div>
    </div>
  );
};
