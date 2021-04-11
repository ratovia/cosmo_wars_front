import { Button, Container, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/organisms/Header";
import { UserContext } from "../../routing";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      width: "100%",
      height: "calc(100vh - 64px)",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#fff",
      backgroundImage: "radial-gradient(#7bded9 20%, transparent 20%), radial-gradient(#7bded9 20%, transparent 20%)",
      backgroundSize: "40px 40px",
      backgroundPosition: "0 0, 20px 20px"
    },
  })
);

export const Home = () => {
  // eslint-disable-next-line
  const { user, userDispatch } = useContext(UserContext);
  const classes = useStyles();

  return (
    <div>
      <Header appTitle="COSMO WARS" authenticated={user.authenticated}></Header>
      <Container className={classes.container}>
        <Typography variant="h2" color="primary">コスモウォーズ</Typography>
        <Typography variant="h5" color="primary">コスモウォーズは手短にできるカードゲームです</Typography>
        <Button variant="contained" color="primary" href="/registration">
          新規登録
        </Button>
      </Container>
    </div>
  );
};
