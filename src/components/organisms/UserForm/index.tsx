import React from "react";
import { Copyright } from "../../molecules/Copyright";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  variant: "sign_up" | "sign_in";
  handleEmail: (value: string) => void;
  handlePassword: (value: string) => void;
  handlePasswordConfirmation?: (value: string) => void;
  handleSubmit: (e: any) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const TitleLabel = (variant: Props["variant"]) => {
  if (variant === "sign_up") {
    return "新規登録";
  } else if (variant === "sign_in") {
    return "ログイン";
  }
};

const SubmitBtnLabel = (variant: Props["variant"]) => {
  if (variant === "sign_up") {
    return "登録する";
  } else if (variant === "sign_in") {
    return "ログインする";
  }
};


export const UserForm = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {TitleLabel(props.variant)}
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={props.handleSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="メールアドレス"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => props.handleEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="パスワード"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => props.handlePassword(e.target.value)}
                  />
                </Grid>
                {props.variant === "sign_up" && (
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password_confirmation"
                      label="パスワード(再確認)"
                      type="password"
                      id="password_confirmation"
                      autoComplete="current-password-confirmation"
                      onChange={(e) =>
                        props.handlePasswordConfirmation &&
                        props.handlePasswordConfirmation(e.target.value)
                      }
                    />
                  </Grid>
                )}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {SubmitBtnLabel(props.variant)}
              </Button>
              {props.variant === "sign_in" && (
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/registration" variant="body2">
                      まだアカウント持っていません
                    </Link>
                  </Grid>
                </Grid>
              )}
              {props.variant === "sign_up" && (
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      すでにアカウントを持っています
                    </Link>
                  </Grid>
                </Grid>
              )}
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
