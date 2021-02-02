import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "container/CurrentUser";
import { withRouter } from "react-router-dom";
import { HeaderNav } from "components/Header";

export const HomePage = withRouter((props: any) => {
  const { isLoggedIn, setLoggedIn } = useContext(CurrentUserContext);

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
      <HeaderNav />
      <p>fghjk</p>
    </>
  );
});

export default HomePage;
