import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "container/CurrentUser";
import { withRouter } from "react-router-dom";
import Page from "constants/layouts";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Paper,
} from "@material-ui/core";
import CoverImage from "../../assets/images/cover-image1.jpg";
import Product01 from "../../assets/images/les-savons-marseille--23785_fap_cg01.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Whatsapp } from "icons";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: 0,
      width: "auto",
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
    whatsappIcon: {
      width: "1.3rem",
      height: "1.3rem",
    },

    divBackground: {
      display: "flex",
      width: "100%",
      height: "600px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${CoverImage})`,
    },
  })
);
export const HomePage = withRouter((props: any) => {
  const { isLoggedIn, setLoggedIn } = useContext(CurrentUserContext);
  const classes = useStyles();

  useEffect(() => {
    function isHeLoggedIn() {
      if (window.localStorage.getItem("user")) {
        setLoggedIn(true);
      } else {
        props.history.push("/login");
      }
    }

    isHeLoggedIn();
    return () => isHeLoggedIn();
  }, [isLoggedIn, setLoggedIn, props.history]);
  return (
    <>
      <Page>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.divBackground}></div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              {/* card start */}
              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      R
                    </Avatar>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  className={classes.media}
                  image={Product01}
                  title="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the
                    mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <Whatsapp className={classes.whatsappIcon} />
                  </IconButton>
                </CardActions>
              </Card>

              {/* end card */}
            </Paper>
          </Grid>
        </Grid>
      </Page>
    </>
  );
});

export default HomePage;
