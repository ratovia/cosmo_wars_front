import React, { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../routing";
import { UserForm } from "../../components/organisms/UserForm";

export const Registration = () => {
  // eslint-disable-next-line
  const { user, userDispatch } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const history = useHistory();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3001/api/v1/auth", {
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      })
      .then(function (response) {
        if (response.status === 200) {
          const payload = {
            email: response.data.data.email,
            accessToken: response.headers["access-token"],
            client: response.headers["client"],
            uid: response.headers["uid"],
          };
          userDispatch({ type: "registration", payload: payload });
          history.push("/lobby");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <UserForm
        variant="sign_up"
        handleEmail={setEmail}
        handlePassword={setPassword}
        handlePasswordConfirmation={setPasswordConfirmation}
        handleSubmit={handleSubmit}
      ></UserForm>
    </div>
  );
};
