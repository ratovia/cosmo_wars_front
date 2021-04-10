import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";

interface Props {
  authenticated: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkText: {
      color: "white",
      textDecoration: "none",
    },
  })
);

export const AccountIndicator = (props: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (props.authenticated) {
    return (
      <>
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={isOpen}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>profile</MenuItem>
          <MenuItem onClick={handleClose}>logout</MenuItem>
        </Menu>
      </>
    );
  } else {
    return (
      <Link className={classes.linkText} to="/login">
        <Button color="inherit">ログインする</Button>
      </Link>
    );
  }
};
