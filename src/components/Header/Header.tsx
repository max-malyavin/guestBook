import React from "react";
import { NavLink } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 2,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const styleLink = {
  color: "#ffffff",
  textShadow: "0px 2px 2px #000000",
};

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink
              style={{
                margin: "0 auto 0 0",
                padding: "7px",
                borderRadius: "10px",
                fontSize: "17px",
              }}
              exact
              to="/"
              activeStyle={styleLink}
            >
              Главная
            </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
