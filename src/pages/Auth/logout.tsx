import { useContext } from "react";

import { useEffectOnce } from "utils/hooks";
import { withRouter } from "react-router-dom";
import { CurrentUserContext } from "container/CurrentUser";
let mounted;
const LogoutPage = withRouter((props) => {
  const { signOut } = useContext(CurrentUserContext);
  useEffectOnce(() => {
    mounted = true;
    if (mounted) {
      signOut().then(() => props.history.push("/"));
    }

    return () => {
      mounted = false;
    };
  });

  return null;
});

export default LogoutPage;
