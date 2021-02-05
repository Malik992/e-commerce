import * as React from "react";
import { MotherOfProviders } from "container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ImageLoader } from "components/Loader";
import Logo from "assets/images/shopping-logo.png";

const HomePage = React.lazy(() => import("pages/Home"));
const LoginPage = React.lazy(() => import("pages/Auth/login"));
const LogoutPage = React.lazy(() => import("pages/Auth/logout"));

const LoadingMessage = () => <ImageLoader image={Logo} />;
export const AllRoutes = () => {
  return (
    <MotherOfProviders>
      <React.Suspense fallback={<LoadingMessage />}>
        <Router>
          <React.Fragment>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/logout" exact component={LogoutPage} />
            <Route path="/logout" exact component={LogoutPage} />
          </React.Fragment>
        </Router>
      </React.Suspense>
    </MotherOfProviders>
  );
};

export default AllRoutes;
