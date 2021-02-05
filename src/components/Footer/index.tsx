import React from "react";
import { withRouter } from "react-router-dom";
import "styled-components/macro";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import "styled-components/macro";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divStyled: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "cadetblue",
      color: "aliceblue",
      padding: "1rem",
      flexShrink: 0,
      position: "relative",
      left: 0,
      bottom: 0,
    },
  })
);
export const Footer = withRouter((props) => {
  const classes = useStyles();

  const { location, history } = props;
  let position = "";

  if (location.pathname === "/login") {
    position = "Login";
  } else if (location.pathname === "/") {
    position = "Home";
  } else {
    position = "Home";
  }

  console.log({ history, position });

  return (
    <footer className={classes.divStyled}>
      <p>
        Copyright &copy; 2021 Shop with me | Designed by <i>Malikdev</i>
      </p>
    </footer>
  );
});
