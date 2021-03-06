import React, { useState, useContext, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withRouter } from "react-router-dom";

import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import { CurrentUserContext } from "container/CurrentUser";
import { CustomSpinner } from "components/Loader";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
export const LoginPage = withRouter((props: any) => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    email: null,
    password: null,
    showPassword: false,
  });
  const [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false,
  });
  const { signIn, status: loginStatus } = useContext(CurrentUserContext);

  useEffect(() => {
    if (loginStatus.code === "ok") {
      props.history.push("/");
    }
  }, [loginStatus.code, props.history]);

  function handleChange(e: any) {
    setFields({ ...fields, [e.target.name]: e.target.value });
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    event.persist();
    setStatus({ loading: true, success: false, error: false });
    const { uid } = await signIn(fields);

    if (uid) {
      setStatus({ loading: false, success: true, error: false });
    } else {
      setStatus({ loading: false, error: true, success: false });
    }
  }

  const handleClickShowPassword = () => {
    setFields({ ...fields, showPassword: !fields.showPassword });
  };
  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {status.loading ? (
          <CustomSpinner />
        ) : (
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
              autoFocus
            />
            <FormControl
              variant="outlined"
              style={{
                display: "block",
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                required
                fullWidth
                name="password"
                label="Mot de Passe"
                type={fields.showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {fields.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              {...(status.loading && { disabled: true })}
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {/* Forgot password? */}
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        )}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
});

export default LoginPage;
