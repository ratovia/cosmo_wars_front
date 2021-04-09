import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/organisms/Header";
import { UserContext } from "../../routing";

export const Home = () => {
  // eslint-disable-next-line
  const { user, userDispatch } = useContext(UserContext);

  return (
    <div>
      <Header appTitle="COSMO WARS" authenticated={user.authenticated}></Header>
      <Link to="/registration">新規作成</Link>
    </div>
  );
};
