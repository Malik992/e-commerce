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
import CoverImage from "assets/images/cover-image1.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { MonetizationOnOutlined } from "@material-ui/icons";
import { Whatsapp } from "icons";
import { red } from "@material-ui/core/colors";
import { products } from "constants/data";

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
      width: "100%",
      paddingTop: "70%", // 16:9
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
      "@media(minWidth: 780px)": {
        width: "80%",
      },
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
          {products.map((item) => (
            <Grid item xs={12} sm={4} key={item.image}>
              <Card className={classes.card} style={{ margin: 10 }}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                      {item.avatar}
                    </Avatar>
                  }
                  title={item.headerTitle}
                  subheader={item.subheader}
                />
                <CardMedia
                  className={classes.media}
                  image={require(`../../assets/images/${item.image}`)}
                  title={item.mediaTitle}
                />

                <CardContent>
                  <Typography variant="body1" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="div"
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <MonetizationOnOutlined /> {item.price}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="shop" href={item.whatsapp}>
                    <Whatsapp className={classes.whatsappIcon} />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Page>
    </>
  );
});

export default HomePage;
